import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useApplicationStore } from "@/store/applicationStore";
import { Shield, FileText, CreditCard, Smartphone, Mail, MessageSquare } from "lucide-react";

export const ConsentsStep = () => {
  const {
    consent_terms_privacy,
    consent_credit_search_soft,
    consent_open_banking_pre,
    marketing_email,
    marketing_sms,
    marketing_whatsapp,
    updateField,
  } = useApplicationStore();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-comic text-3xl md:text-5xl text-foreground mb-4">
          <span className="text-primary">SNAP!</span> Final Step
        </h1>
        <p className="font-body text-lg text-muted-foreground">
          Please review and accept our terms and consents
        </p>
      </div>

      {/* Required Consents */}
      <Card className="p-6 border-2">
        <h3 className="font-comic text-xl mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Required Consents
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={consent_terms_privacy}
              onCheckedChange={(checked) => updateField('consent_terms_privacy', !!checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="terms" className="text-sm font-medium cursor-pointer flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Terms & Privacy Policy
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                I confirm that I have read and agree to Whoosh's Terms & Conditions and Privacy Policy. 
                I understand how my data will be used and stored.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="credit-search"
              checked={consent_credit_search_soft}
              onCheckedChange={(checked) => updateField('consent_credit_search_soft', !!checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="credit-search" className="text-sm font-medium cursor-pointer flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Soft Credit Search
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                I consent to Whoosh and our lending partners conducting a soft credit search. 
                This will NOT affect my credit score and helps us find the best finance options for me.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="open-banking"
              checked={consent_open_banking_pre}
              onCheckedChange={(checked) => updateField('consent_open_banking_pre', !!checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="open-banking" className="text-sm font-medium cursor-pointer flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Open Banking (Optional but Recommended)
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                I consent to share my bank transaction data via Open Banking. This significantly improves 
                approval rates and may help secure better rates. Data is shared securely and you remain in control.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Marketing Preferences */}
      <Card className="p-6 border-2">
        <h3 className="font-comic text-xl mb-4 flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Marketing Preferences (Optional)
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          Stay updated with exclusive offers, finance tips, and vehicle deals. You can unsubscribe at any time.
        </p>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing-email"
              checked={marketing_email}
              onCheckedChange={(checked) => updateField('marketing_email', !!checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="marketing-email" className="text-sm font-medium cursor-pointer flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Marketing
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                Receive finance tips, exclusive deals, and updates via email
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing-sms"
              checked={marketing_sms}
              onCheckedChange={(checked) => updateField('marketing_sms', !!checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="marketing-sms" className="text-sm font-medium cursor-pointer flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                SMS Marketing
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                Get quick alerts about time-sensitive offers via text message
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing-whatsapp"
              checked={marketing_whatsapp}
              onCheckedChange={(checked) => updateField('marketing_whatsapp', !!checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="marketing-whatsapp" className="text-sm font-medium cursor-pointer flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                WhatsApp Marketing
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                Receive personalized offers and updates via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Consent Summary */}
      <Card className="p-6 border-2 bg-accent">
        <h4 className="font-comic text-lg mb-3">Consent Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Terms & Privacy:</span>
            <span className={consent_terms_privacy ? "text-green-600 font-bold" : "text-destructive"}>
              {consent_terms_privacy ? '✓ Accepted' : '✗ Required'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Soft Credit Search:</span>
            <span className={consent_credit_search_soft ? "text-green-600 font-bold" : "text-destructive"}>
              {consent_credit_search_soft ? '✓ Accepted' : '✗ Required'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Open Banking:</span>
            <span className={consent_open_banking_pre ? "text-green-600 font-bold" : "text-muted-foreground"}>
              {consent_open_banking_pre ? '✓ Accepted' : 'Not selected'}
            </span>
          </div>
        </div>
      </Card>

      {(!consent_terms_privacy || !consent_credit_search_soft) && (
        <div className="text-center p-4 bg-destructive/10 rounded-lg border-2 border-destructive">
          <p className="font-body text-sm text-destructive">
            ⚠️ Please accept all required consents to continue
          </p>
        </div>
      )}
    </div>
  );
};
