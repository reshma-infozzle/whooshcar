import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PostcodeAddress } from "@/lib/postcodeService";
import { Check } from "lucide-react";

interface AddressSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  addresses: PostcodeAddress[];
  onSelectAddress: (address: PostcodeAddress) => void;
  postcode: string;
}

export const AddressSelectionDialog = ({
  open,
  onOpenChange,
  addresses,
  onSelectAddress,
  postcode,
}: AddressSelectionDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-4 border-black shadow-comic bg-white z-50">
        <DialogHeader>
          <DialogTitle className="font-comic text-2xl md:text-3xl text-black">
            <span className="text-primary">ZAP!</span> Select Your Address
          </DialogTitle>
          <DialogDescription className="font-body text-base text-black/70">
            Found {addresses.length} addresses for postcode <strong>{postcode}</strong>
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[400px] pr-4">
          <div className="space-y-2">
            {addresses.map((address, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto py-4 px-4 font-body text-sm md:text-base border-2 border-black bg-white hover:bg-primary/10 hover:scale-[1.02] transition-all"
                onClick={() => {
                  onSelectAddress(address);
                  onOpenChange(false);
                }}
              >
                <div className="flex items-start gap-3 w-full">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-black">{address.line_1}</div>
                    {address.line_2 && (
                      <div className="text-black/70">{address.line_2}</div>
                    )}
                    <div className="text-black/70">{address.post_town}</div>
                    <div className="text-black/60 text-sm">{address.postcode}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
        
        <div className="border-t-2 border-black pt-4">
          <p className="text-xs text-black/60 font-body">
            Can't find your address?{" "}
            <button
              onClick={() => onOpenChange(false)}
              className="text-primary hover:underline font-semibold"
            >
              Enter it manually
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
