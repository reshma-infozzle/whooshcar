import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useApplicationStore, type Employment } from "@/store/applicationStore";
import { Plus, Trash2, AlertCircle, Briefcase } from "lucide-react";

export const EmploymentHistoryStep = () => {
  const {
    employment_status,
    employments,
    benefit_types,
    benefit_income_monthly,
    pension_income_monthly,
    total_net_income_monthly,
    updateField,
    addEmployment,
    removeEmployment,
    sumEmploymentMonths,
  } = useApplicationStore();

  const totalMonths = sumEmploymentMonths();
  const needsMoreHistory = totalMonths < 12;

  const employmentStatuses = [
    'employed',
    'self_employed',
    'benefits',
    'retired',
    'armed_forces',
    'homemaker',
    'carer',
    'education',
    'other',
  ];

  const benefitOptions = [
    'Universal Credit',
    'Income Support',
    'Employment Support Allowance',
    'Personal Independence Payment',
    'Disability Living Allowance',
    'Child Tax Credit',
    'Working Tax Credit',
    'Pension Credit',
    'Other',
  ];

  const handleAddEmployment = () => {
    addEmployment({
      employment_status: 'employed',
      employment_duration_months: 0,
    });
  };

  const updateEmployment = (index: number, field: keyof Employment, value: any) => {
    const updated = [...employments];
    updated[index] = { ...updated[index], [field]: value };
    updateField('employments', updated);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-comic text-3xl md:text-5xl text-foreground mb-4">
          <span className="text-primary">POW!</span> Employment History
        </h1>
        <p className="font-body text-lg text-muted-foreground">
          We need at least 12 months of employment history
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
          <Briefcase className="h-4 w-4" />
          <span className="font-comic text-sm">Total: {Math.floor(totalMonths / 12)} years {totalMonths % 12} months</span>
          {needsMoreHistory ? (
            <AlertCircle className="h-4 w-4 text-destructive" />
          ) : (
            <span className="text-green-600">✓</span>
          )}
        </div>
      </div>

      {/* Primary Employment Status */}
      <Card className="p-6 border-2">
        <h3 className="font-comic text-xl mb-4">Current Employment Status</h3>
        <Select value={employment_status} onValueChange={(val) => updateField('employment_status', val as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your employment status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="employed">Employed</SelectItem>
            <SelectItem value="self_employed">Self-Employed</SelectItem>
            <SelectItem value="benefits">Receiving Benefits</SelectItem>
            <SelectItem value="retired">Retired</SelectItem>
            <SelectItem value="armed_forces">Armed Forces</SelectItem>
            <SelectItem value="homemaker">Homemaker</SelectItem>
            <SelectItem value="carer">Carer</SelectItem>
            <SelectItem value="education">In Education</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </Card>

      {/* Benefits Section */}
      {(employment_status === 'benefits' || benefit_types.length > 0) && (
        <Card className="p-6 border-2">
          <h3 className="font-comic text-xl mb-4">Benefit Details</h3>
          <div className="space-y-4">
            <div>
              <Label className="mb-3 block">Which benefits do you receive?</Label>
              <div className="space-y-2">
                {benefitOptions.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-2">
                    <Checkbox
                      id={`benefit-${benefit}`}
                      checked={benefit_types.includes(benefit)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateField('benefit_types', [...benefit_types, benefit]);
                        } else {
                          updateField('benefit_types', benefit_types.filter(b => b !== benefit));
                        }
                      }}
                    />
                    <label htmlFor={`benefit-${benefit}`} className="text-sm">{benefit}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label>Monthly Benefit Income (£)</Label>
              <Input
                type="number"
                value={benefit_income_monthly || ''}
                onChange={(e) => updateField('benefit_income_monthly', Number(e.target.value))}
                placeholder="e.g. 800"
              />
            </div>
          </div>
        </Card>
      )}

      {/* Pension Section */}
      {employment_status === 'retired' && (
        <Card className="p-6 border-2">
          <h3 className="font-comic text-xl mb-4">Pension Details</h3>
          <div>
            <Label>Monthly Pension Income (£)</Label>
            <Input
              type="number"
              value={pension_income_monthly || ''}
              onChange={(e) => updateField('pension_income_monthly', Number(e.target.value))}
              placeholder="e.g. 1200"
            />
          </div>
        </Card>
      )}

      {/* Employment Roles */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-comic text-xl">Employment Roles</h3>
          <Button onClick={handleAddEmployment} variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Role
          </Button>
        </div>

        {employments.length === 0 && (
          <Card className="p-6 text-center border-2 border-dashed">
            <p className="text-muted-foreground">No employment roles added yet</p>
            <Button onClick={handleAddEmployment} variant="outline" className="mt-4">
              Add Your First Role
            </Button>
          </Card>
        )}

        {employments.map((employment, index) => (
          <Card key={index} className="p-6 border-2 relative">
            {employments.length > 1 && (
              <Button
                onClick={() => removeEmployment(index)}
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}

            <h4 className="font-comic text-lg mb-4">Role {index + 1}</h4>
            
            <div className="space-y-4">
              <div>
                <Label>Employment Type</Label>
                <Select
                  value={employment.employment_status}
                  onValueChange={(val) => updateEmployment(index, 'employment_status', val)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employed">Employed</SelectItem>
                    <SelectItem value="self_employed">Self-Employed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(employment.employment_status === 'employed' || employment.employment_status === 'self_employed') && (
                <>
                  <div>
                    <Label>Employer Name</Label>
                    <Input
                      value={employment.employer_name || ''}
                      onChange={(e) => updateEmployment(index, 'employer_name', e.target.value)}
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <Label>Job Title</Label>
                    <Input
                      value={employment.job_title || ''}
                      onChange={(e) => updateEmployment(index, 'job_title', e.target.value)}
                      placeholder="Your role"
                    />
                  </div>

                  <div>
                    <Label>Monthly Income (£)</Label>
                    <Input
                      type="number"
                      value={employment.income_monthly || ''}
                      onChange={(e) => updateEmployment(index, 'income_monthly', Number(e.target.value))}
                      placeholder="e.g. 2000"
                    />
                  </div>
                </>
              )}

              <div>
                <Label>Duration in this role</Label>
                <Select
                  value={String(employment.employment_duration_months || 0)}
                  onValueChange={(val) => updateEmployment(index, 'employment_duration_months', Number(val))}
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
      </div>

      {/* Total Income Summary */}
      <Card className="p-6 border-2 bg-accent">
        <h3 className="font-comic text-xl mb-4">Total Monthly Income</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Employment Income:</span>
            <span className="font-bold">
              £{employments.reduce((sum, emp) => sum + (emp.income_monthly || 0), 0).toFixed(2)}
            </span>
          </div>
          {benefit_income_monthly > 0 && (
            <div className="flex justify-between">
              <span>Benefit Income:</span>
              <span className="font-bold">£{benefit_income_monthly.toFixed(2)}</span>
            </div>
          )}
          {pension_income_monthly > 0 && (
            <div className="flex justify-between">
              <span>Pension Income:</span>
              <span className="font-bold">£{pension_income_monthly.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t-2 border-border">
            <span className="font-comic">Total:</span>
            <Input
              type="number"
              value={total_net_income_monthly || ''}
              onChange={(e) => updateField('total_net_income_monthly', Number(e.target.value))}
              placeholder="Enter total"
              className="w-32 h-8 text-right"
            />
          </div>
        </div>
      </Card>

      {needsMoreHistory && (
        <div className="text-center p-4 bg-destructive/10 rounded-lg border-2 border-destructive">
          <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
          <p className="font-body text-sm text-destructive">
            Please ensure your employment history totals at least 12 months
          </p>
        </div>
      )}
    </div>
  );
};
