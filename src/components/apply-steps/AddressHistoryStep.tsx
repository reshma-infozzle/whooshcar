import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useApplicationStore } from "@/store/applicationStore";
import { lookupPostcode, type PostcodeAddress } from "@/lib/postcodeService";
import { AddressSelectionDialog } from "@/components/AddressSelectionDialog";
import { Plus, Trash2, Search, Loader2, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const AddressHistoryStep = () => {
  const {
    current_address,
    residential_status,
    address_duration_months,
    previous_addresses,
    updateField,
    addPreviousAddress,
    removePreviousAddress,
    sumAddressMonths,
  } = useApplicationStore();

  const [postcodeSearch, setPostcodeSearch] = useState("");
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [foundAddresses, setFoundAddresses] = useState<PostcodeAddress[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const totalMonths = sumAddressMonths();
  const needsMoreHistory = totalMonths < 36;

  const residentialOptions = [
    { value: 'owner', label: 'Homeowner' },
    { value: 'tenant', label: 'Tenant' },
    { value: 'living_with_parents', label: 'Living with Parents' },
    { value: 'other', label: 'Other' },
  ];

  const handlePostcodeLookup = async (index: number | null) => {
    if (!postcodeSearch || postcodeSearch.length < 5) {
      toast({
        title: "Invalid Postcode",
        description: "Please enter a valid UK postcode",
        variant: "destructive",
      });
      return;
    }

    setIsLookingUp(true);
    setEditingIndex(index);

    try {
      const addresses = await lookupPostcode(postcodeSearch);
      if (addresses && addresses.length > 0) {
        setFoundAddresses(addresses);
        setDialogOpen(true);
      } else {
        toast({
          title: "No Addresses Found",
          description: "Please enter your address manually",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Lookup Failed",
        description: "Please enter your address manually",
        variant: "destructive",
      });
    } finally {
      setIsLookingUp(false);
    }
  };

  const handleSelectAddress = (address: PostcodeAddress) => {
    if (editingIndex === null) {
      // Current address
      updateField('current_address', {
        street: address.line_1,
        town: address.post_town,
        postcode: address.postcode,
      });
    } else {
      // Previous address
      const updated = [...previous_addresses];
      updated[editingIndex] = {
        ...updated[editingIndex],
        street: address.line_1,
        town: address.post_town,
        postcode: address.postcode,
      };
      updateField('previous_addresses', updated);
    }

    setPostcodeSearch("");
    toast({
      title: "Address Selected",
      description: "Your address has been filled in",
    });
  };

  return (
    <div className="space-y-8">
      <AddressSelectionDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        addresses={foundAddresses}
        onSelectAddress={handleSelectAddress}
        postcode={postcodeSearch}
      />

      <div className="text-center">
        <h1 className="font-comic text-3xl md:text-5xl text-foreground mb-4">
          <span className="text-primary">BOOM!</span> Your Address History
        </h1>
        <p className="font-body text-lg text-muted-foreground">
          We need at least 3 years of address history
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
          <span className="font-comic text-sm">Total: {Math.floor(totalMonths / 12)} years {totalMonths % 12} months</span>
          {needsMoreHistory ? (
            <AlertCircle className="h-4 w-4 text-destructive" />
          ) : (
            <span className="text-green-600">✓</span>
          )}
        </div>
      </div>

      {/* Current Address */}
      <Card className="p-6 border-2">
        <h3 className="font-comic text-xl mb-4">Current Address</h3>
        
        <div className="space-y-4">
          <div>
            <Label>Postcode Lookup</Label>
            <div className="flex gap-2">
              <Input
                value={postcodeSearch}
                onChange={(e) => setPostcodeSearch(e.target.value.toUpperCase())}
                placeholder="e.g. SW1A 1AA"
                className="uppercase"
              />
              <Button
                onClick={() => handlePostcodeLookup(null)}
                disabled={isLookingUp}
                variant="secondary"
              >
                {isLookingUp ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div>
            <Label>Full Address</Label>
            <Input
              value={`${current_address.building_no || ''} ${current_address.building_name || ''} ${current_address.street}`.trim()}
              onChange={(e) => {
                const parts = e.target.value.split(' ');
                updateField('current_address', {
                  ...current_address,
                  street: e.target.value,
                });
              }}
              placeholder="Enter full address"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Town/City</Label>
              <Input
                value={current_address.town}
                onChange={(e) => updateField('current_address', { ...current_address, town: e.target.value })}
                placeholder="Town"
              />
            </div>
            <div>
              <Label>Postcode</Label>
              <Input
                value={current_address.postcode}
                onChange={(e) => updateField('current_address', { ...current_address, postcode: e.target.value.toUpperCase() })}
                placeholder="Postcode"
                className="uppercase"
              />
            </div>
          </div>

          <div>
            <Label>Residential Status</Label>
            <Select value={residential_status} onValueChange={(val) => updateField('residential_status', val as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {residentialOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Time at this address</Label>
            <Select value={String(address_duration_months)} onValueChange={(val) => updateField('address_duration_months', Number(val))}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(120)].map((_, i) => (
                  <SelectItem key={i} value={String(i)}>
                    {Math.floor(i / 12)} years {i % 12} months
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Previous Addresses */}
      {needsMoreHistory && (
        <>
          <div className="text-center">
            <p className="font-body text-muted-foreground mb-4">
              Please add previous addresses to reach 3 years
            </p>
            <Button onClick={() => addPreviousAddress({
              street: '',
              town: '',
              postcode: '',
              residential_status: 'tenant',
              address_duration_months: 0,
            })} variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Previous Address
            </Button>
          </div>

          {previous_addresses.map((addr, index) => (
            <Card key={index} className="p-6 border-2 relative">
              <Button
                onClick={() => removePreviousAddress(index)}
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
              >
                <Trash2 className="h-4 w-4" />
              </Button>

              <h3 className="font-comic text-xl mb-4">Previous Address {index + 1}</h3>
              
              <div className="space-y-4">
                <div>
                  <Label>Postcode Lookup</Label>
                  <div className="flex gap-2">
                    <Input
                      value={postcodeSearch}
                      onChange={(e) => setPostcodeSearch(e.target.value.toUpperCase())}
                      placeholder="e.g. SW1A 1AA"
                      className="uppercase"
                    />
                    <Button
                      onClick={() => handlePostcodeLookup(index)}
                      disabled={isLookingUp}
                      variant="secondary"
                    >
                      {isLookingUp ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Full Address</Label>
                  <Input
                    value={addr.street}
                    onChange={(e) => {
                      const updated = [...previous_addresses];
                      updated[index] = { ...updated[index], street: e.target.value };
                      updateField('previous_addresses', updated);
                    }}
                    placeholder="Enter full address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Town/City</Label>
                    <Input
                      value={addr.town}
                      onChange={(e) => {
                        const updated = [...previous_addresses];
                        updated[index] = { ...updated[index], town: e.target.value };
                        updateField('previous_addresses', updated);
                      }}
                      placeholder="Town"
                    />
                  </div>
                  <div>
                    <Label>Postcode</Label>
                    <Input
                      value={addr.postcode}
                      onChange={(e) => {
                        const updated = [...previous_addresses];
                        updated[index] = { ...updated[index], postcode: e.target.value.toUpperCase() };
                        updateField('previous_addresses', updated);
                      }}
                      placeholder="Postcode"
                      className="uppercase"
                    />
                  </div>
                </div>

                <div>
                  <Label>Residential Status</Label>
                  <Select
                    value={addr.residential_status}
                    onValueChange={(val) => {
                      const updated = [...previous_addresses];
                      updated[index] = { ...updated[index], residential_status: val as any };
                      updateField('previous_addresses', updated);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {residentialOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Time at this address</Label>
                  <Select
                    value={String(addr.address_duration_months)}
                    onValueChange={(val) => {
                      const updated = [...previous_addresses];
                      updated[index] = { ...updated[index], address_duration_months: Number(val) };
                      updateField('previous_addresses', updated);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(120)].map((_, i) => (
                        <SelectItem key={i} value={String(i)}>
                          {Math.floor(i / 12)} years {i % 12} months
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};
