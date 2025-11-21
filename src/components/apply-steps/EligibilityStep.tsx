import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useApplicationStore } from "@/store/applicationStore";
import { CheckCircle2 } from "lucide-react";

export const EligibilityStep = () => {
  const { age_check, licence_type, uk_resident, monthly_net_income, updateField } = useApplicationStore();

  const licenceOptions = [
    { value: 'full_uk', label: 'Full UK Licence', icon: '🇬🇧' },
    { value: 'provisional_uk', label: 'Provisional UK', icon: '📝' },
    { value: 'eu_eea', label: 'EU/EEA Licence', icon: '🇪🇺' },
    { value: 'international', label: 'International', icon: '🌍' },
    { value: 'none', label: 'No Licence', icon: '❌' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-comic text-3xl md:text-5xl text-foreground mb-4">
          <span className="text-primary">ZAP!</span> Quick Eligibility Check
        </h1>
        <p className="font-body text-lg text-muted-foreground">
          Let's make sure you're eligible before we continue
        </p>
      </div>

      {/* Age Check */}
      <div className="space-y-4">
        <Label className="font-comic text-xl">Are you 18 or over?</Label>
        <div className="grid grid-cols-2 gap-4">
          {[true, false].map((value) => (
            <Card
              key={String(value)}
              onClick={() => updateField('age_check', value)}
              className={`p-6 cursor-pointer text-center font-comic text-lg transition-all hover:scale-105 border-2 ${
                age_check === value
                  ? "bg-primary text-primary-foreground border-primary scale-105"
                  : "bg-card hover:bg-accent"
              }`}
            >
              {value ? '✅ Yes' : '❌ No'}
            </Card>
          ))}
        </div>
      </div>

      {/* Licence Type */}
      <div className="space-y-4">
        <Label className="font-comic text-xl">What type of driving licence do you have?</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {licenceOptions.map((option) => (
            <Card
              key={option.value}
              onClick={() => updateField('licence_type', option.value as any)}
              className={`p-4 cursor-pointer text-center transition-all hover:scale-105 border-2 ${
                licence_type === option.value
                  ? "bg-primary text-primary-foreground border-primary scale-105"
                  : "bg-card hover:bg-accent"
              }`}
            >
              <div className="text-3xl mb-2">{option.icon}</div>
              <div className="font-comic text-sm">{option.label}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* UK Resident */}
      <div className="space-y-4">
        <Label className="font-comic text-xl">Are you a UK resident?</Label>
        <div className="grid grid-cols-2 gap-4">
          {[true, false].map((value) => (
            <Card
              key={String(value)}
              onClick={() => updateField('uk_resident', value)}
              className={`p-6 cursor-pointer text-center font-comic text-lg transition-all hover:scale-105 border-2 ${
                uk_resident === value
                  ? "bg-primary text-primary-foreground border-primary scale-105"
                  : "bg-card hover:bg-accent"
              }`}
            >
              {value ? '✅ Yes' : '❌ No'}
            </Card>
          ))}
        </div>
      </div>

      {/* Monthly Income */}
      <div className="space-y-4">
        <Label className="font-comic text-xl">What's your monthly net income?</Label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xl">£</span>
          <Input
            type="number"
            value={monthly_net_income || ''}
            onChange={(e) => updateField('monthly_net_income', Number(e.target.value))}
            placeholder="e.g. 1500"
            className="pl-8 text-lg h-14 border-2"
          />
        </div>
        {monthly_net_income >= 1200 && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-body text-sm">Great! Your income meets our minimum requirement</span>
          </div>
        )}
        {monthly_net_income > 0 && monthly_net_income < 1200 && (
          <div className="p-4 bg-destructive/10 border-2 border-destructive rounded-lg">
            <p className="font-body text-sm text-destructive">
              ⚠️ Our minimum income requirement is £1,200 per month. You may still apply, but approval may be more difficult.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
