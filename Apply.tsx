import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, Search, Loader2, Plus, Trash2 } from "lucide-react";
import { applyFormSchema, type ApplyFormData } from "@/lib/applyFormValidation";
import { toast } from "@/hooks/use-toast";
import { lookupPostcode, type PostcodeAddress } from "@/lib/postcodeService";
import { AddressSelectionDialog } from "@/components/AddressSelectionDialog";
import { DateOfBirthPicker } from "@/components/DateOfBirthPicker";
import {
  mapEmploymentStatus,
  mapHousingStatus,
  mapLicenceType,
  mapVehicleType,
  mapMaritalStatus,
  getCountryCode
} from "@/lib/autoconvertMapper";
import { useEffect } from "react";



const Apply = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLookingUpPostcode, setIsLookingUpPostcode] = useState(false);
  const [addressDialogOpen, setAddressDialogOpen] = useState(false);
  const [foundAddresses, setFoundAddresses] = useState<PostcodeAddress[]>([]);
  const [lookupPostcodeValue, setLookupPostcodeValue] = useState("");
  const [currentAddressIndex, setCurrentAddressIndex] = useState<number>(0);
  const [employmentTouched, setEmploymentTouched] = useState(false);
  const [addressTouched, setAddressTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ApplyFormData>({
    resolver: zodResolver(applyFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      loanAmount: undefined,
      loanAmountSpecific: "",
      vehicleType: "",
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      licenceType: "",
      ukResident: "",
      maritalStatus: "",
      addressHistory: [{
        postcode: "",
        address: "",
        yearsAtAddress: "",
        monthsAtAddress: "",
      }],
      employmentHistory: [{
        employerName: "",
        jobTitle: "",
        yearsAtEmployment: "",
        monthsAtEmployment: "",
      }],
      employmentStatus: "",
      employerPhone: "",
      yearsInEmploymentStatus: "",
      annualIncome: "",
      housingStatus: "",
      partnerConsent: false,
      creditConsent: false,
      termsConsent: false,
    },
  });

  const totalSteps = 14;

  const handleNext = () => {
    const loanAmount = form.watch("loanAmount");
    const ukResident = form.watch("ukResident");

    if (currentStep === 9 && ukResident === "No") {
      form.setError("ukResident", {
        type: "manual",
        message: "You must be a UK resident to proceed with this application",
      });
      return;
    }

    if (currentStep === 1 && loanAmount >= 4000) {
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
   
    // if (currentStep === 5) {
    //   setEmploymentTouched(true);
    // }

    // if (currentStep === 11) {
    //   setAddressTouched(true);
    // }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    const loanAmount = form.watch("loanAmount");

    if (currentStep === 3 && loanAmount !== "Under £5,000") {
      setCurrentStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

  };

  const handleOptionSelect = (field: keyof ApplyFormData, value: string) => {
    form.setValue(field, value, { shouldValidate: true });

    if (field === "loanAmount" && value === "Under £5,000") {
      setTimeout(() => {
        setCurrentStep(2);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
      return;
    }

    if (field === "loanAmountSpecific" && value === "Under £1,000") {
      return;
    }

    if (field === "ukResident" && value === "No") {
      form.setError("ukResident", {
        type: "manual",
        message: "You must be a UK resident to proceed with this application",
      });
      return;
    }

    if (field === "employmentStatus") {
      const isEmployed =
        value === "Full-time Employed" ||
        value === "Part-time Employed";

      if (!isEmployed) {
        // remove employment history completely
        form.setValue("employmentHistory", []);
      } else {
        // ensure at least one row exists when employed
        form.setValue("employmentHistory", [
          { employerName: "", jobTitle: "", yearsAtEmployment: "" }
        ]);
      }
    }

    setTimeout(() => {
      if (currentStep < totalSteps) {
        const nextStep = currentStep === 1 && value !== "Under £5,000" ? 3 : currentStep + 1;
        setCurrentStep(nextStep);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300);
  };


  const onSubmit = async (data: ApplyFormData) => {
    console.log("✅ onSubmit fired", data);

    setIsSubmitting(true);
    const formData = new FormData();

    /* ======================
       LOAN
    ====================== */
    formData.append("borrow_amount", String(data.loanAmount || ""));
    formData.append(
      "specific_borrow_amount",
      data.loanAmountSpecific ? String(data.loanAmountSpecific) : ""
    );

    /* ======================
       VEHICLE
    ====================== */
    formData.append("finance_for", data.vehicleType || "");

    /* ======================
       EMPLOYMENT
    ====================== */
    const isEmployed =
      data.employmentStatus === "Full-time Employed" ||
      data.employmentStatus === "Part-time Employed";

    formData.append("employment_status", data.employmentStatus || "");
    formData.append("monthly_income", data.annualIncome || "");
    formData.append("housing_status", data.housingStatus || "");
    formData.append("employer_phone", data.employerPhone || "N/A");

    if (isEmployed) {
      // Current employment
      formData.append("employer_name",     data.employmentHistory[0]?.employerName    || "N/A");
      formData.append("job_title",         data.employmentHistory[0]?.jobTitle        || "N/A");
      formData.append("years_as_employed", data.employmentHistory[0]?.yearsAtEmployment || "");
      formData.append("years_employed",    data.employmentHistory[0]?.yearsAtEmployment || "");

      // Previous employment 1
      formData.append("employer_name_1",     data.employmentHistory[1]?.employerName    || "");
      formData.append("job_title_1",         data.employmentHistory[1]?.jobTitle        || "");
      formData.append("years_as_employed_1", data.employmentHistory[1]?.yearsAtEmployment || "");

      // Previous employment 2
      formData.append("employer_name_2",     data.employmentHistory[2]?.employerName    || "");
      formData.append("job_title_2",         data.employmentHistory[2]?.jobTitle        || "");
      formData.append("years_as_employed_2", data.employmentHistory[2]?.yearsAtEmployment || "");
    } else {
      // Non-employed statuses
      formData.append("employer_name",     "N/A");
      formData.append("job_title",         "N/A");
      formData.append("years_as_employed", data.yearsInEmploymentStatus || "");
      formData.append("years_employed",    data.yearsInEmploymentStatus || "");
      formData.append("employer_name_1",   "");
      formData.append("job_title_1",       "");
      formData.append("years_as_employed_1", "");
      formData.append("employer_name_2",   "");
      formData.append("job_title_2",       "");
      formData.append("years_as_employed_2", "");
    }

    /* ======================
      ADDRESS
    ====================== */
    // Current address
    formData.append("postal_code",      data.addressHistory[0]?.postcode       || "");
    formData.append("full_address",     data.addressHistory[0]?.address        || "");
    formData.append("years_at_address", data.addressHistory[0]?.yearsAtAddress || "");
    formData.append("time_at_address",  data.addressHistory[0]?.yearsAtAddress || "");

    // Previous address 1
    formData.append("postal_code_1",      data.addressHistory[1]?.postcode       || "");
    formData.append("full_address_1",     data.addressHistory[1]?.address        || "");
    formData.append("years_at_address_1", data.addressHistory[1]?.yearsAtAddress || "");

    // Previous address 2
    formData.append("postal_code_2",      data.addressHistory[2]?.postcode       || "");
    formData.append("full_address_2",     data.addressHistory[2]?.address        || "");
    formData.append("years_at_address_2", data.addressHistory[2]?.yearsAtAddress || "");

    /* ======================
       PERSONAL
    ====================== */
    formData.append("dob", data.dateOfBirth || "");
    formData.append("uk_residency", data.ukResident === "Yes" ? "1" : "0");
    formData.append("driving_license", data.licenceType || "");
    formData.append("title", data.title || "");
    formData.append("first_name", data.firstName || "");
    formData.append("middle_name", data.middleName || "");
    formData.append("last_name", data.lastName || "");
    formData.append("email", data.email || "");
    formData.append("phone", data.employerPhone || "");
    formData.append("marital_status", data.maritalStatus || "");



    /* ======================
       CONSENTS
    ====================== */
    formData.append("credit_check_consent", "1");
    formData.append("credit_search_consent", "1");
    formData.append("privacy_consent", "1");
    formData.append("partner_consent", data.partnerConsent ? "1" : "0");
    formData.append("credit_consent", data.creditConsent ? "1" : "0");
    formData.append("terms_consent", data.termsConsent ? "1" : "0");

    /* ======================
       META
    ====================== */
    formData.append("source", "web");
    formData.append("ip_address", "127.0.0.1");

    /* ======================
       SECOND API JSON PAYLOAD
    ====================== */
    const saveApplicationPayload = {
      ApiKey: "9ad2ecf5-0501-4cf9-b6b0-6a25da150ff3",

      Applicants: [
        {
          Title: data.title || "",
          Forename: data.firstName || "",
          Surname: data.lastName || "",
          DateOfBirth: data.dateOfBirth || "",
          Email: data.email || "",
          Mobile: "" + (data.employerPhone || ""),
          DrivingLicenceType: mapLicenceType(data.licenceType),
          MaritalStatus: mapMaritalStatus(data.maritalStatus),

          Employments: isEmployed
            ? data.employmentHistory.map(emp => ({
                MonthlyIncome: data.annualIncome,
                EmploymentStatus: mapEmploymentStatus(data.employmentStatus),
                JobTitle: emp.jobTitle || "",
                Employer: emp.employerName || "",
                TimeAtEmployerYears: emp.yearsAtEmployment || "",
                TimeAtEmployerMonths:
                  emp.yearsAtEmployment === "0"
                    ? emp.monthsAtEmployment || "0"
                    : "0"
              }))
            : [
                {
                  MonthlyIncome: data.annualIncome,
                  EmploymentStatus: mapEmploymentStatus(data.employmentStatus),
                  JobTitle: "",
                  Employer: "",
                  TimeAtEmployerYears: data.yearsInEmploymentStatus || "",
                  TimeAtEmployerMonths: ""
                }
              ],

          Addresses: data.addressHistory.map((addr, index) => ({
            ResidentialStatus: index === 0 ? mapHousingStatus(data.housingStatus) : "",
            Building: "",
            Street: addr.address || "",
            Town: "",
            District: "",
            County: "",
            Postcode: addr.postcode || "",
            TimeAtAddressYears: addr.yearsAtAddress || "",
            TimeAtAddressMonths:
             addr.yearsAtAddress === "0"
                    ? addr.monthsAtAddress || "0"
                    : "0",
            BuildingNumber: "",
            CountryAlphaCode: getCountryCode(),
            DependentLocality: ""
          })),
        }
      ],

      Nationality: "UK",
      BusinessDetails: null,
      BusinessAddress: null,
      AmountToBorrow: Number(data.loanAmount) || 0,
      Term: 12,
      VehicleType: mapVehicleType(data.vehicleType),
      CreditScore: 0,
      Registration: null,
      LoanAmount: Number(data.loanAmount) || 0,
      LoanTerm: 0,
      LenderQuestionAnswers: null
    };

    try {
      /* FIRST API */
      const res = await fetch(
        "https://admin.whooshcarfinance.co.uk/api/apply",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("🔵 AutoConvert payload:", JSON.stringify(saveApplicationPayload, null, 2));
      /* SECOND API */
      const saveApplicationRes = await fetch(
        "https://admin.whooshcarfinance.co.uk/api/save_application",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveApplicationPayload),
        }
      );

      if (!res.ok || !saveApplicationRes.ok) {
        throw new Error("API request failed");
      }

      console.log("✅ Both APIs submitted successfully");
      navigate("/application-submitted");

    } catch (error) {
      console.error("❌ Submit failed", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };


  const handlePostcodeLookup = async (postcode: string, addressIndex: number) => {
    if (!postcode || postcode.length < 5) {
      toast({
        title: "Invalid Postcode",
        description: "Please enter a valid UK postcode",
        variant: "destructive",
      });
      return;
    }

    setIsLookingUpPostcode(true);
    setCurrentAddressIndex(addressIndex);

    try {
      const addresses = await lookupPostcode(postcode);

      if (addresses && addresses.length > 0) {
        setFoundAddresses(addresses);
        setLookupPostcodeValue(postcode);
        setAddressDialogOpen(true);
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
      setIsLookingUpPostcode(false);
      setIsSubmitting(false);
    }
  };

  const handleSelectAddress = (address: PostcodeAddress) => {
    const addressHistory = form.getValues("addressHistory");
    addressHistory[currentAddressIndex] = {
      postcode: address.postcode,
      address: address.formatted_address,
      yearsAtAddress: addressHistory[currentAddressIndex]?.yearsAtAddress || "",
    };

    form.setValue("addressHistory", addressHistory, { shouldValidate: true });

    toast({
      title: "Address Selected",
      description: "Your address has been filled in",
    });
  };

  const addNewAddress = () => {
    const currentAddresses = form.getValues("addressHistory");
    form.setValue("addressHistory", [
      ...currentAddresses,
      { postcode: "", address: "", yearsAtAddress: "" }
    ]);
  };

  const removeAddress = (index: number) => {
    const currentAddresses = form.getValues("addressHistory");
    if (currentAddresses.length > 1) {
      form.setValue(
        "addressHistory",
        currentAddresses.filter((_, i) => i !== index)
      );
    }
  };

  const getTotalAddressYears = () => {
    const addressHistory = form.watch("addressHistory");

    const total = addressHistory.reduce((sum, addr) => {
      const years = parseInt(addr.yearsAtAddress || "0");
      const months =
        addr.yearsAtAddress === "0"
          ? parseInt(addr.monthsAtAddress || "0")
          : 0;

      return sum + years + months / 12;
    }, 0);

    return Math.round(total * 100) / 100;
  };

  const getRemainingAddress = () => {
    const total = getTotalAddressYears();
    const remaining = Math.max(0, 3 - total);

    const years = Math.floor(remaining);
    const months = Math.round((remaining - years) * 12);

    return { years, months };
  };

  const getTotalEmploymentYears = () => {
    const employmentHistory = form.watch("employmentHistory");

    const total = employmentHistory.reduce((sum, emp) => {
      const years = parseInt(emp.yearsAtEmployment || "0");
      const months =
        emp.yearsAtEmployment === "0"
          ? parseInt(emp.monthsAtEmployment || "0")
          : 0;

      return sum + years + months / 12;
    }, 0);

    return Math.round(total * 100) / 100;
  };

  const getRemainingEmployment = () => {
    const total = getTotalEmploymentYears();
    const remaining = 3 - total;

    const years = Math.floor(remaining);
    const months = Math.round((remaining - years) * 12);

    return { years, months };
  };

  const remaining = getRemainingEmployment();

  const remainingAddress = getRemainingAddress();

  const addEmployment = () => {
    const current = form.getValues("employmentHistory");
    form.setValue("employmentHistory", [
      ...current,
      { employerName: "", jobTitle: "", yearsAtEmployment: "" }
    ]);
  };

  const removeEmployment = (index: number) => {
    const current = form.getValues("employmentHistory");
    if (current.length > 1) {
      form.setValue(
        "employmentHistory",
        current.filter((_, i) => i !== index)
      );
    }
  };

  const isStepValid = () => {
    const values = form.getValues();
    const errors = form.formState.errors;

    switch (currentStep) {
      case 1:
        const amount = values.loanAmount;
        return typeof amount === "number" && amount >= 4000 && !errors.loanAmount;
      case 2:
        return values.loanAmount !== "Under £5,000" ||
          (values.loanAmountSpecific !== "" &&
           values.loanAmountSpecific !== "Under £1,000" &&
           !errors.loanAmountSpecific);
      case 3:
        return values.vehicleType !== "" && !errors.vehicleType;
      case 4:
        return values.employmentStatus !== "" && !errors.employmentStatus;
      case 5: {
        const empStatus = values.employmentStatus;
        if (empStatus === "Full-time Employed" || empStatus === "Part-time Employed") {
          const empHistory = values.employmentHistory;
          const allFilled = empHistory.every(emp =>
            emp.employerName !== "" && emp.jobTitle !== "" && emp.yearsAtEmployment !== ""
          );
          return allFilled && getTotalEmploymentYears() >= 3;
        } else {
          return values.yearsInEmploymentStatus !== "" && !errors.yearsInEmploymentStatus;
        }
      }
      case 6:
        return values.annualIncome !== "" && parseFloat(values.annualIncome) >= 1200 && !errors.annualIncome;
      case 7:
        return values.housingStatus !== "" && !errors.housingStatus;
      case 8:
        return values.dateOfBirth !== "" && !errors.dateOfBirth;
      case 9:
        return values.ukResident === "Yes";
      case 10:
        return values.licenceType !== "" && !errors.licenceType;
      case 11: {
        const addressHistory = values.addressHistory;
        const allFilled = addressHistory.every(addr =>
          addr.postcode !== "" && addr.address !== "" && addr.yearsAtAddress !== ""
        );
        return allFilled && getTotalAddressYears() >= 3;
      }
      case 12:
        return values.title !== "" && values.firstName !== "" && values.lastName !== "" &&
               !errors.title && !errors.firstName && !errors.lastName;
      case 13:
        return values.maritalStatus !== "" && !errors.maritalStatus;
      case 14:
        return (
          values.email !== "" &&
          values.employerPhone !== "" && // ✅ added
          values.partnerConsent === true &&
          values.creditConsent === true &&
          values.termsConsent === true &&
          !errors.email &&
          !errors.employerPhone
        );
      default:
        return false;
    }
  };

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', { content_name: 'Apply' });
    }
  }, []);


  return (
    <>
      <Helmet>
        <title>Apply Now - Whoosh Car Finance</title>
        <meta name="description" content="Apply for car finance with Whoosh. Quick and easy application process with instant decisions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        <Header />

        <main className="pt-24 md:pt-32 pb-6 md:pb-16">
          <div className="container max-w-4xl mx-auto px-3 md:px-4">
            <AddressSelectionDialog
              open={addressDialogOpen}
              onOpenChange={setAddressDialogOpen}
              addresses={foundAddresses}
              onSelectAddress={(address) => handleSelectAddress(address)}
              postcode={lookupPostcodeValue}
            />

            <Form {...form}>
              {/* Progress Indicator */}
              <div className="mb-6 md:mb-8">
                <div className="w-full bg-white/50 rounded-full h-3 md:h-4 overflow-hidden border-2 md:border-4 border-black shadow-comic">
                  <div
                    className="bg-primary h-full transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step Content */}
              <div className="comic-panel bg-white/95 p-4 md:p-10 lg:p-12 border-4 border-black shadow-comic-lg">

                {/* Step 1: Loan Amount */}
                {currentStep === 1 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">KAPOW!</span> How much do you want to borrow?
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        Enter your desired loan amount (minimum £4,000)
                      </p>
                    </div>
                    <div className="max-w-md mx-auto px-2 md:px-0">
                      <FormField
                        control={form.control}
                        name="loanAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-comic text-xl md:text-2xl text-black/60">£</span>
                                <Input
                                  {...field}
                                  type="text"
                                  inputMode="numeric"
                                  placeholder="Enter your Amount"
                                  className="pl-10 h-14 md:h-16 text-xl md:text-2xl font-comic border-2 md:border-4 border-black shadow-comic text-center"
                                  onChange={(e) => {
                                    const value = e.target.value.replace(/[^0-9]/g, '');
                                    field.onChange(value ? Number(value) : undefined);
                                  }}
                                />
                              </div>
                            </FormControl>
                            {/* <FormMessage className="text-center font-semibold mt-2" /> */}
                          </FormItem>
                        )}
                      />
                    </div>
                    {form.formState.errors.loanAmount && (
                      <p className="text-destructive text-sm font-semibold text-center mt-4">
                        {form.formState.errors.loanAmount.message}
                      </p>
                    )}
                  </div>
                )}

                {/* Step 2: Specific Loan Amount */}
                {currentStep === 2 && form.watch("loanAmount") === "Under £5,000" && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">POW!</span> More specifically, how much?
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        Please specify your loan amount
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto px-2 md:px-0">
                      {["Under £1,000", "£1,000 - £5,000"].map((amount) => (
                        <Card
                          key={amount}
                          onClick={() => handleOptionSelect("loanAmountSpecific", amount)}
                          className={`p-4 md:p-8 cursor-pointer text-center font-comic text-base md:text-2xl transition-all hover:scale-105 border-2 md:border-4 border-black shadow-comic ${
                            form.watch("loanAmountSpecific") === amount
                              ? "bg-primary text-white scale-105"
                              : "bg-white hover:bg-primary/10"
                          }`}
                        >
                          {amount}
                        </Card>
                      ))}
                    </div>
                    {form.watch("loanAmountSpecific") === "Under £1,000" && (
                      <div className="mt-4 p-3 md:p-6 bg-destructive/10 border-2 md:border-4 border-destructive rounded-lg text-center w-full">
                        <p className="font-comic text-base md:text-2xl text-destructive mb-2 break-words">
                          ⚠️ MINIMUM BORROWING REQUIREMENT
                        </p>
                        <p className="font-body text-xs md:text-lg text-black break-words">
                          Sorry! Our minimum borrowing amount is <strong>£1,000</strong>.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Vehicle Type */}
                {currentStep === 3 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">KAPOW!</span> What would you like finance for?
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        Select the type of vehicle you're interested in
                      </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 max-w-4xl mx-auto px-2 md:px-0">
                      {[
                        { value: "Car", icon: "🚗" },
                        { value: "Van", icon: "🚐" },
                        { value: "Motorbike", icon: "🏍️" },
                        { value: "Leisure Vehicles", icon: "🚙" }
                      ].map((option) => (
                        <Card
                          key={option.value}
                          onClick={() => handleOptionSelect("vehicleType", option.value)}
                          className={`p-3 md:p-8 cursor-pointer text-center font-comic text-base md:text-2xl transition-all hover:scale-105 border-2 md:border-4 border-black shadow-comic ${
                            form.watch("vehicleType") === option.value
                              ? "bg-primary text-white scale-105"
                              : "bg-white hover:bg-primary/10"
                          }`}
                        >
                          <div className="text-3xl md:text-5xl mb-2 md:mb-4">{option.icon}</div>
                          {option.value}
                        </Card>
                      ))}
                    </div>
                    {form.formState.errors.vehicleType && (
                      <p className="text-destructive text-sm font-semibold text-center mt-4">
                        {form.formState.errors.vehicleType.message}
                      </p>
                    )}
                  </div>
                )}

                {/* Step 4: Employment Status */}
                {currentStep === 4 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">ZOOM!</span> Employment status
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        What is your current employment situation?
                      </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto px-2 md:px-0">
                      {[
                        "Full-time Employed",
                        "Part-time Employed",
                        "Self-employed",
                        "Benefits",
                        "Retired",
                        "Student",
                        "Armed Forces",
                        "Homemaker",
                        "Carer",
                      ].map((status) => (
                        <Card
                          key={status}
                          onClick={() => handleOptionSelect("employmentStatus", status)}
                          className={`p-3 md:p-6 cursor-pointer text-center font-comic text-xs md:text-lg transition-all hover:scale-105 border-2 md:border-4 border-black shadow-comic ${
                            form.watch("employmentStatus") === status
                              ? "bg-primary text-white scale-105"
                              : "bg-white hover:bg-primary/10"
                          }`}
                        >
                          {status}
                        </Card>
                      ))}
                    </div>
                    {form.formState.errors.employmentStatus && (
                      <p className="text-destructive text-sm font-semibold text-center mt-4">
                        {form.formState.errors.employmentStatus.message}
                      </p>
                    )}
                  </div>
                )}

                {/* Step 5: Employment Details */}
                {currentStep === 5 && (
                  <div className="space-y-4 md:space-y-10">
                    {(form.watch("employmentStatus") === "Full-time Employed" ||
                      form.watch("employmentStatus") === "Part-time Employed") ? (
                      <>
                        <div className="text-center">
                          <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                            <span className="text-secondary">KABOOM!</span> Employer details
                          </h1>
                          <p className="font-body text-sm md:text-xl text-black/80">
                            We need at least 3 years of employment history
                          </p>
                          <div className="mt-4 font-comic text-lg">
                            Total Years:{" "}
                            <span className={`${getTotalEmploymentYears() >= 3 ? 'text-primary' : 'text-destructive'} font-bold`}>
                              {getTotalEmploymentYears()} {getTotalEmploymentYears() >= 3 && '✓'}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-6 max-w-2xl mx-auto">
                          {form.watch("employmentHistory").map((_, index) => (
                            <div key={index} className="border-2 border-black p-4 rounded-lg bg-white/50 space-y-4">
                              <div className="flex justify-between items-center">
                                <h3 className="font-comic text-lg">
                                  {index === 0 ? "Current Employment" : `Previous Employment ${index}`}
                                </h3>
                                {index > 0 && (
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => removeEmployment(index)}
                                    className="border-2 border-black"
                                  >
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                  </Button>
                                )}
                              </div>

                              <FormField
                                control={form.control}
                                name={`employmentHistory.${index}.employerName`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Employer Name *</FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        placeholder="Company Name Ltd"
                                        onChange={(e) => {
                                          field.onChange(e);
                                        }}
                                      />      
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name={`employmentHistory.${index}.jobTitle`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Job Title *</FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        placeholder="Software Developer"
                                        onChange={(e) => {
                                          field.onChange(e);
                                        }}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name={`employmentHistory.${index}.yearsAtEmployment`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Years *</FormLabel>
                                    <Select
                                      value={field.value}
                                      onValueChange={(value) => {
                                        field.onChange(value);
                                        setEmploymentTouched(true);
                                      }}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select years" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="0">Less than 1 year</SelectItem>
                                        <SelectItem value="1">1 year</SelectItem>
                                        <SelectItem value="2">2 years</SelectItem>
                                        <SelectItem value="3">3 years</SelectItem>
                                        <SelectItem value="4">4 years</SelectItem>
                                        <SelectItem value="5">5+ years</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {form.watch(`employmentHistory.${index}.yearsAtEmployment`) === "0" && (
                                <FormField
                                  control={form.control}
                                  name={`employmentHistory.${index}.monthsAtEmployment`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Months *</FormLabel>
                                      <Select
                                        value={field.value}
                                        onValueChange={(value) => field.onChange(value)}
                                      >
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select months" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {[...Array(11)].map((_, i) => (
                                            <SelectItem key={i + 1} value={String(i + 1)}>
                                              {i + 1} month{i + 1 > 1 ? "s" : ""}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              )}
                            </div>
                          ))}

                          {getTotalEmploymentYears() < 3 && (
                            <Button
                              type="button"
                              onClick={addEmployment}
                              variant="outline"
                              className="w-full font-comic text-base md:text-lg py-6 border-2 md:border-4 border-black hover:bg-primary/10"
                            >
                              <Plus className="h-5 w-5 mr-2" />
                              Add Previous Employment
                            </Button>
                          )}

                          {employmentTouched && getTotalEmploymentYears() < 3 && (
                            <p className="text-destructive text-center font-semibold">
                              ⚠️ You need {remaining.years} year(s) and {remaining.months} month(s) of employment
                            </p>
                            // <p className="text-destructive text-center font-semibold">
                            //   ⚠️ You need {3 - getTotalEmploymentYears()} more year(s) of employment
                            // </p>
                          )}        

                          <p className="text-xs text-center">
                            💡 Don't worry, we will never contact your employer
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                            <span className="text-secondary">POW!</span> Employment duration
                          </h1>
                          <p className="font-body text-sm md:text-xl text-black/80">
                            How long have you been {form.watch("employmentStatus")?.toLowerCase()}?
                          </p>
                        </div>

                        <div className="space-y-4 md:space-y-6 max-w-md mx-auto px-2 md:px-0">
                          <FormField
                            control={form.control}
                            name="yearsInEmploymentStatus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-comic text-sm md:text-lg text-black">
                                  Years as {form.watch("employmentStatus")} *
                                </FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="font-body text-base md:text-lg p-3 md:p-6 border-2 md:border-4 border-black">
                                      <SelectValue placeholder="Select duration" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="0">Less than 1 year</SelectItem>
                                    <SelectItem value="1">1 year</SelectItem>
                                    <SelectItem value="2">2 years</SelectItem>
                                    <SelectItem value="3">3 years</SelectItem>
                                    <SelectItem value="4">4 years</SelectItem>
                                    <SelectItem value="5">5-10 years</SelectItem>
                                    <SelectItem value="10">Over 10 years</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage className="text-destructive text-sm font-semibold" />
                              </FormItem>
                            )}
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Step 6: Income */}
                {currentStep === 6 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">WHAM!</span> Your income
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        Tell us about your personal monthly income (not household)
                      </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto px-2 md:px-0">
                      <FormField
                        control={form.control}
                        name="annualIncome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-comic text-sm md:text-lg text-black">
                              Your Monthly Income (After Tax) *
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 font-body text-base md:text-lg text-black/60">
                                  £
                                </span>
                                <Input
                                  {...field}
                                  type="number"
                                  inputMode="numeric"
                                  pattern="[0-9]*"
                                  min="0"
                                  step="1"
                                  className="font-body text-base md:text-lg p-3 md:p-6 pl-7 md:pl-12 border-2 md:border-4 border-black w-full"
                                  placeholder="Enter your monthly income"
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-destructive text-sm font-semibold" />
                            <p className="text-xs text-black/60 mt-1 px-1">
                              Include your personal income and any benefits. Do not include your partner's or household income.
                            </p>
                          </FormItem>
                        )}
                      />

                      {(() => {
                        const income = parseFloat(form.watch("annualIncome") || "0");
                        if (income > 0 && income < 1200) {
                          return (
                            <div className="mt-4 p-3 md:p-6 bg-destructive/10 border-2 md:border-4 border-destructive rounded-lg text-center w-full">
                              <p className="font-comic text-base md:text-2xl text-destructive mb-2 break-words">
                                ⚠️ MINIMUM INCOME REQUIREMENT
                              </p>
                              <p className="font-body text-xs md:text-lg text-black break-words">
                                Unfortunately, a minimum monthly income of £1,200 is required for finance applications.
                              </p>
                            </div>
                          );
                        } else if (income >= 1200 && income < 1500) {
                          return (
                            <div className="mt-4 p-3 md:p-6 bg-accent/20 border-2 md:border-4 border-accent rounded-lg text-center w-full">
                              <p className="font-comic text-base md:text-2xl text-foreground mb-2 break-words">
                                💡 LIMITED OPTIONS AVAILABLE
                              </p>
                              <p className="font-body text-xs md:text-lg text-black break-words">
                                Your income meets the minimum requirement, but most lenders prefer £1,500+ per month. You may have limited finance options available.
                              </p>
                            </div>
                          );
                        }
                        return null;
                      })()}
                    </div>
                  </div>
                )}

                {/* Step 7: Housing Status */}
                {currentStep === 7 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-secondary">SMASH!</span> Housing status
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        What is your current housing situation?
                      </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto px-2 md:px-0">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                        {[
                          "Homeowner",
                          "Private Tenant",
                          "Council Tenant",
                          "Living with Family",
                          "Military Accommodation",
                          "Work Accommodation",
                          "Student Accommodation",
                          "Other",
                        ].map((status) => (
                          <Card
                            key={status}
                            onClick={() => handleOptionSelect("housingStatus", status)}
                            className={`p-3 md:p-6 cursor-pointer text-center font-comic text-xs md:text-lg transition-all hover:scale-105 border-2 md:border-4 border-black shadow-comic ${
                              form.watch("housingStatus") === status
                                ? "bg-secondary text-white scale-105"
                                : "bg-white hover:bg-secondary/10"
                            }`}
                          >
                            {status}
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 8: Date of Birth */}
                {currentStep === 8 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-secondary">BOOM!</span> Date of birth
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        You must be 21 or over to apply
                      </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 max-w-md mx-auto px-2 md:px-0">
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => {
                          const today = new Date();
                          const maxDate = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());

                          return (
                            <FormItem className="flex flex-col w-full">
                              <FormLabel className="font-comic text-sm md:text-lg text-black block mb-2">
                                Date of Birth *
                                <span className="block text-xs md:text-sm text-black/60 font-body mt-1">
                                  (Must be 21 or over)
                                </span>
                              </FormLabel>
                              <FormControl>
                                <DateOfBirthPicker
                                  value={field.value}
                                  onChange={field.onChange}
                                  maxDate={maxDate}
                                />
                              </FormControl>
                              <FormMessage className="text-destructive text-sm font-semibold" />
                            </FormItem>
                          );
                        }}
                      />

                      {(() => {
                        const dob = form.watch("dateOfBirth");
                        if (dob) {
                          const birthDate = new Date(dob);
                          const today = new Date();
                          let age = today.getFullYear() - birthDate.getFullYear();
                          const monthDiff = today.getMonth() - birthDate.getMonth();
                          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                            age--;
                          }
                          if (age < 21) {
                            return (
                              <div className="mt-4 p-3 md:p-6 bg-destructive/10 border-2 md:border-4 border-destructive rounded-lg text-center w-full">
                                <p className="font-comic text-base md:text-2xl text-destructive mb-2 break-words">
                                  ⚠️ AGE REQUIREMENT NOT MET
                                </p>
                                <p className="font-body text-xs md:text-lg text-black break-words">
                                  Unfortunately, you must be at least 21 years old to apply for vehicle finance.
                                </p>
                              </div>
                            );
                          }
                        }
                        return null;
                      })()}
                    </div>
                  </div>
                )}

                {/* Step 9: UK Resident */}
                {currentStep === 9 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-secondary">POW!</span> UK Residency
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        Are you a UK resident?
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto px-2 md:px-0">
                      {[
                        { value: 'Yes', icon: '✅' },
                        { value: 'No', icon: '❌' },
                      ].map((option) => (
                        <Card
                          key={option.value}
                          onClick={() => handleOptionSelect("ukResident", option.value)}
                          className={`p-6 md:p-10 cursor-pointer text-center transition-all hover:scale-105 border-2 md:border-4 border-black shadow-comic ${
                            form.watch("ukResident") === option.value
                              ? "bg-secondary text-white scale-105"
                              : "bg-white hover:bg-secondary/10"
                          }`}
                        >
                          <div className="text-4xl md:text-6xl mb-3">{option.icon}</div>
                          <div className="font-comic text-xl md:text-3xl">{option.value}</div>
                        </Card>
                      ))}
                    </div>

                    {form.watch("ukResident") === "No" && (
                      <div className="mt-4 p-3 md:p-6 bg-destructive/10 border-2 md:border-4 border-destructive rounded-lg text-center w-full">
                        <p className="font-comic text-base md:text-2xl text-destructive mb-2 break-words">
                          ⚠️ UK RESIDENCY REQUIRED
                        </p>
                        <p className="font-body text-xs md:text-lg text-black break-words">
                          Unfortunately, you must be a UK resident to apply for finance with us.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 10: Licence Type */}
                {currentStep === 10 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">ZOOM!</span> Driving Licence
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        What type of driving licence do you have?
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto px-2 md:px-0">
                      {[
                        { value: 'Full UK', icon: '🇬🇧' },
                        { value: 'Provisional UK', icon: '📝' },
                        { value: 'EU/EEA', icon: '🇪🇺' },
                        { value: 'International', icon: '🌍' },
                        { value: 'No Licence', icon: '❌' },
                      ].map((option) => (
                        <Card
                          key={option.value}
                          onClick={() => handleOptionSelect("licenceType", option.value as any)}
                          className={`p-3 md:p-6 cursor-pointer text-center transition-all hover:scale-105 border-2 md:border-4 border-black shadow-comic ${
                            form.watch("licenceType") === option.value
                              ? "bg-primary text-white scale-105"
                              : "bg-white hover:bg-primary/10"
                          }`}
                        >
                          <div className="text-3xl md:text-5xl mb-2">{option.icon}</div>
                          <div className="font-comic text-sm md:text-lg">{option.value}</div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 11: Address History */}
                {currentStep === 11 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">POW!</span> Your address history
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        We need at least 3 years of address history
                      </p>
                      <div className="mt-4 font-comic text-lg">
                        Total Years:{" "}
                        <span className={`${getTotalAddressYears() >= 3 ? 'text-primary' : 'text-destructive'} font-bold`}>
                          {getTotalAddressYears()} {getTotalAddressYears() >= 3 && '✓'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto px-2 md:px-0">
                      {form.watch("addressHistory").map((_, index) => (
                        <div key={index} className="border-2 md:border-4 border-black p-4 md:p-6 rounded-lg bg-white/50 space-y-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-comic text-lg md:text-xl text-black">
                              {index === 0 ? 'Current Address' : `Previous Address ${index}`}
                            </h3>
                            {index > 0 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeAddress(index)}
                                className="border-2 border-black"
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            )}
                          </div>

                          <FormField
                            control={form.control}
                            name={`addressHistory.${index}.postcode`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-comic text-sm md:text-base text-black">Postcode *</FormLabel>
                                <div className="flex gap-2">
                                  <FormControl>
                                    <Input
                                      {...field}
                                      onChange={(e) => {
                                        field.onChange(e);
                                      }}
                                      className="font-body text-base md:text-base p-3 md:p-4 border-2 border-black w-full"
                                      placeholder="SW1A 1AA"
                                      onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                          e.preventDefault();
                                          handlePostcodeLookup(field.value, index);
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <Button
                                    type="button"
                                    onClick={() => handlePostcodeLookup(field.value, index)}
                                    disabled={isLookingUpPostcode || !field.value}
                                    className="font-comic text-xs md:text-sm px-2 md:px-3 border-2 border-black"
                                    variant="secondary"
                                  >
                                    {isLookingUpPostcode && currentAddressIndex === index ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Search className="h-4 w-4 md:mr-1" />
                                        <span className="hidden md:inline">Find</span>
                                      </>
                                    )}
                                  </Button>
                                </div>
                                <FormMessage className="text-destructive text-xs" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`addressHistory.${index}.address`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-comic text-sm md:text-base text-black">Full Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    onChange={(e) => {
                                      field.onChange(e);
                                    }}
                                    className="font-body text-base md:text-base p-3 md:p-4 border-2 border-black w-full"
                                    placeholder="123 Main Street, London"
                                  />
                                </FormControl>
                                <FormMessage className="text-destructive text-xs" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`addressHistory.${index}.yearsAtAddress`}
                            render={({ field, fieldState }) => (
                              <FormItem>
                                <FormLabel className="font-comic text-sm md:text-base text-black">Years at Address *</FormLabel>
                                <Select
                                  value={field.value}
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    setAddressTouched(true);
                                  }}
                                >
                                  <FormControl>
                                    <SelectTrigger className="font-body text-base md:text-base p-3 md:p-4 border-2 border-black">
                                      <SelectValue placeholder="Select years" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="0">Less than 1 year</SelectItem>
                                    <SelectItem value="1">1 year</SelectItem>
                                    <SelectItem value="2">2 years</SelectItem>
                                    <SelectItem value="3">3 years</SelectItem>
                                    <SelectItem value="4">4 years</SelectItem>
                                    <SelectItem value="5">5+ years</SelectItem>
                                  </SelectContent>
                                </Select>
                                {fieldState.error && <FormMessage className="text-destructive text-xs" />}
                              </FormItem>
                            )}
                          />

                          {form.watch(`addressHistory.${index}.yearsAtAddress`) === "0" && (
                            <FormField
                              control={form.control}
                              name={`addressHistory.${index}.monthsAtAddress`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Months *</FormLabel>
                                  <Select
                                    value={field.value}
                                    onValueChange={(value) => field.onChange(value)}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select months" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {[...Array(11)].map((_, i) => (
                                        <SelectItem key={i + 1} value={String(i + 1)}>
                                          {i + 1} month{i + 1 > 1 ? "s" : ""}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>
                      ))}

                      {getTotalAddressYears() < 3 && (
                        <Button
                          type="button"
                          onClick={addNewAddress}
                          variant="outline"
                          className="w-full font-comic text-base md:text-lg py-6 border-2 md:border-4 border-black hover:bg-primary/10"
                        >
                          <Plus className="h-5 w-5 mr-2" />
                          Add Previous Address
                        </Button>
                      )}

                      {addressTouched && getTotalAddressYears() < 3 && (
                        <p className="text-sm text-destructive text-center font-body font-semibold">
                          ⚠️ You need {remainingAddress.years} year(s) and {remainingAddress.months} month(s) of address history
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 12: Name Details */}
                {currentStep === 12 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">POW!</span> What's your name?
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        Let's get to know you better
                      </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto px-2 md:px-0">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-comic text-sm md:text-lg text-black">Title *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="font-body text-base md:text-lg p-3 md:p-6 border-2 md:border-4 border-black">
                                  <SelectValue placeholder="Select title" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Mr">Mr</SelectItem>
                                <SelectItem value="Mrs">Mrs</SelectItem>
                                <SelectItem value="Miss">Miss</SelectItem>
                                <SelectItem value="Ms">Ms</SelectItem>
                                <SelectItem value="Dr">Dr</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-destructive text-sm" />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-comic text-sm md:text-lg text-black">First Name *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="font-body text-base md:text-lg p-3 md:p-6 border-2 md:border-4 border-black w-full"
                                  placeholder="John"
                                />
                              </FormControl>
                              <FormMessage className="text-destructive text-sm font-semibold" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="middleName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-comic text-sm md:text-lg text-black">Middle Name (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="font-body text-base md:text-lg p-3 md:p-6 border-2 md:border-4 border-black w-full"
                                  placeholder="Robert"
                                />
                              </FormControl>
                              <FormMessage className="text-destructive text-sm font-semibold" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-comic text-sm md:text-lg text-black">Last Name *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="font-body text-base md:text-lg p-3 md:p-6 border-2 md:border-4 border-black w-full"
                                placeholder="Doe"
                              />
                            </FormControl>
                            <FormMessage className="text-destructive text-sm font-semibold" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Step 13: Marital Status */}
                {currentStep === 13 && (
                  <div className="space-y-4 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">KAPOW!</span> Marital status
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        What is your current marital status?
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto px-2 md:px-0">
                      {[
                        "Single",
                        "Married",
                        "Civil Partnership",
                        "Divorced",
                        "Widowed",
                        "Separated",
                      ].map((status) => (
                        <Card
                          key={status}
                          onClick={() => handleOptionSelect("maritalStatus", status)}
                          className={`p-3 md:p-6 cursor-pointer text-center font-comic text-sm md:text-lg transition-all hover:scale-105 border-2 md:border-4 border-black shadow-comic ${
                            form.watch("maritalStatus") === status
                              ? "bg-primary text-white scale-105"
                              : "bg-white hover:bg-primary/10"
                          }`}
                        >
                          {status}
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 14: Contact Details & Submit */}
                {currentStep === 14 && (
                  <div className="space-y-6 md:space-y-10">
                    <div className="text-center">
                      <h1 className="font-comic text-2xl md:text-4xl lg:text-5xl text-black mb-3 md:mb-6">
                        <span className="text-primary">FINAL STEP!</span> Contact & Submit
                      </h1>
                      <p className="font-body text-sm md:text-xl text-black/80">
                        Enter your contact details and submit your application
                      </p>
                    </div>

                    <div className="space-y-6 max-w-2xl mx-auto">

                      {/* EMAIL */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-comic text-sm md:text-lg text-black">
                              Email Address *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="font-body text-base md:text-lg p-3 md:p-6 border-2 md:border-4 border-black"
                                placeholder="john.doe@example.com"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* PHONE */}
                      <FormField
                        control={form.control}
                        name="employerPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-comic text-sm md:text-lg text-black">
                              Contact Number *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="tel"
                                className="font-body text-base md:text-lg p-3 md:p-6 border-2 md:border-4 border-black"
                                placeholder="020 1234 5678"
                              />
                            </FormControl>
                            <FormMessage className="text-destructive text-sm font-semibold" />
                          </FormItem>
                        )}
                      />

                      {/* WHAT HAPPENS NEXT */}
                      <div className="p-4 md:p-6 bg-muted/30 border-2 border-black rounded-lg space-y-3">
                        <h3 className="font-comic text-lg md:text-xl text-black">
                          What happens next?
                        </h3>
                        <p className="font-body text-sm text-black/80 leading-relaxed">
                          To find you the best possible vehicle finance, we work with our trusted fulfillment partner, Concierge Motor Finance. When you submit this form, we will securely pass your details to their team, who will contact you on our behalf to finalize your quote and guide you through the next steps.
                        </p>
                      </div>

                      {/* CONSENT CHECKBOXES */}
                      <div className="space-y-4 border-2 border-black p-4 md:p-6 rounded-lg bg-white">

                        <FormField
                          control={form.control}
                          name="partnerConsent"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <FormLabel className="text-sm font-body leading-relaxed mt-0">
                                I understand and consent to <strong>Whoosh Car Finance </strong>
                                securely transferring my application details to our fulfillment
                                partner, <strong>Concierge Motor Finance</strong>. I agree to be
                                contacted by them via phone or email to discuss my vehicle finance options.
                              </FormLabel>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="creditConsent"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <FormLabel className="text-sm font-body leading-relaxed mt-0">
                                I consent to a soft credit search being conducted to check my eligibility.
                                This will not impact my credit score. If I choose to proceed with a lender,
                                the lender may carry out a hard credit search as part of their application process.
                              </FormLabel>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="termsConsent"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <FormLabel className="text-sm font-body leading-relaxed mt-0">
                                By submitting this application, I confirm that the information provided
                                is accurate and I agree to Whoosh Car Finance's{" "}
                                <a href="/terms-conditions" target="_blank" className="text-primary underline">
                                  Terms and Conditions
                                </a>,{" "}
                                <a href="/terms-of-business" target="_blank" className="text-primary underline">
                                  Terms of Business
                                </a>{" "}
                                and{" "}
                                <a href="/privacy-policy" target="_blank" className="text-primary underline">
                                  Privacy Policy
                                </a>.
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-6 md:mt-12 pt-4 md:pt-8 border-t-2 md:border-t-4 border-black">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    size="lg"
                    disabled={currentStep === 1}
                    className="font-comic text-sm md:text-lg px-3 md:px-6 py-2 md:py-3 border-2 border-black"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1 md:mr-2" />
                    Back
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      onClick={handleNext}
                      size="lg"
                      className="font-comic text-sm md:text-lg px-3 md:px-6 py-2 md:py-3"
                      disabled={!isStepValid()}
                      // disabled={false}
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-1 md:ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={form.handleSubmit(
                        onSubmit,
                        (errors) => {
                          console.log("❌ Zod validation errors:", JSON.stringify(errors, null, 2));

                          toast({
                            title: "Please check your details",
                            description: "Some required fields are missing or invalid.",
                            variant: "destructive",
                          });
                        }
                      )}
                      size="lg"
                      className="font-comic text-sm md:text-lg bg-primary hover:bg-primary/90 px-3 md:px-6 py-2 md:py-3"
                      disabled={!isStepValid() || isSubmitting} // ✅ important
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="w-4 h-4 ml-1 md:ml-2" />
                        </>
                      )}
                    </Button>
                  )}
                </div>

                <p className="text-center text-[11px] sm:text-xs text-muted-foreground font-body mt-3 opacity-80">
                  10.9% Rep. APR (From 9.9%) Credit broker, not a lender
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-body leading-relaxed mt-6">
                  Representative example: Borrowing £23000 over 60 months at a representative APR of 10.9%, an annual interest rate of 10.87% (fixed), and a deposit of £0.00 would be 60 monthly payments of £493.16. Total amount payable: £28,589.60. Total cost of credit: £6,589.60. This is an example only; all finance subject to status. Lender fees may apply.
                </p>
              </div>
            </Form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Apply;