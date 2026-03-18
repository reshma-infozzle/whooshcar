// AutoConvert API value mappers

/* =========================
EMPLOYMENT STATUS
========================= */

export const mapEmploymentStatus = (status?: string) => {
  const map: Record<string, string> = {
    "Full-time Employed": "Full-Time Employment",
    "Part-time Employed": "Part-Time Employment",
    "Self-employed": "Self-Employed",
    "Benefits": "Benefits",
    "Student": "Education",
    "Retired": "Retired",
    "Armed Forces": "Armed Services",
    "Homemaker": "Homemaker",
    "Carer": "Carer",
  };

  return map[status || ""] || "Other";
};


/* =========================
HOUSING STATUS
========================= */

export const mapHousingStatus = (status?: string) => {
  const map: Record<string, string> = {
    "Homeowner": "Homeowner",
    "Private Tenant": "Tenant - Private",
    "Council Tenant": "Tenant - Council",
    "Living with Family": "Living With Family",
    "Military Accommodation": "Military Accommodation",
    "Work Accommodation": "Work Accommodation",
    "Student Accommodation": "Student Accommodation",
    "Other": "Other",
  };

  return map[status || ""] || "Other";
};


/* =========================
DRIVING LICENCE
========================= */

export const mapLicenceType = (type?: string) => {
  const map: Record<string, string> = {
    "Full UK": "Full UK",
    "Provisional UK": "Provisional UK",
    "EU/EEA": "European",
    "International": "International",
    "No Licence": "None",
  };

  return map[type || ""] || "None";
};


/* =========================
VEHICLE TYPE
========================= */

export const mapVehicleType = (type?: string) => {
  const map: Record<string, string> = {
    "Car": "Car",
    "Van": "Van",
    "Motorbike": "Motorbike",
    "Leisure Vehicles": "Motorhome",
  };

  return map[type || ""] || "Car";
};


/* =========================
MARITAL STATUS
========================= */

export const mapMaritalStatus = (status?: string) => {
  const map: Record<string, string> = {
    "Single": "Single",
    "Married": "Married",
    "Civil Partnership": "Civil Partnership",
    "Divorced": "Divorced",
    "Widowed": "Widowed",
    "Separated": "Separated",
    "Cohabiting": "Cohabiting",
    "Engaged": "Engaged",
    "Dissolved Civil Partnership": "Dissolved Civil Partnership",
  };

  return map[status || ""] || "Single";
};


/* =========================
COUNTRY CODE
========================= */

export const getCountryCode = () => {
  return "GBR"; // AutoConvert requires ISO Alpha-3
};