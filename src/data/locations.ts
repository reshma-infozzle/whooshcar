// Comprehensive location data for all UK cities where we provide car finance
export interface LocationData {
  city: string;
  region: string;
  description: string;
  slug: string;
  hasDetailedData?: boolean;
  // Additional data for cities with detailed information
  benefits?: string[];
  localInfo?: string;
  eligibility?: string[];
  process?: string[];
  cityHistory?: string;
  whooshLocalInfo?: string;
  localEconomy?: string;
  employmentData?: string;
  transportLinks?: string;
  popularVehicles?: string[];
  areaSpecificInfo?: string[];
  creditConsiderations?: string;
  marketTrends?: string;
}

// Comprehensive list of all locations
export const locations: LocationData[] = [
  // High priority cities with detailed data
  {
    city: "London",
    slug: "london",
    description: "England's capital city and one of the world's most iconic destinations. From the bustling financial district to the vibrant cultural scene, London offers endless opportunities.",
    region: "Greater London",
    hasDetailedData: true
  },
  {
    city: "Manchester",
    slug: "manchester", 
    description: "The creative heartbeat of the UK! From its rich musical heritage featuring The Stone Roses, Oasis, and the legendary Hacienda to its thriving business scene.",
    region: "Greater Manchester",
    hasDetailedData: true
  },
  {
    city: "Birmingham",
    slug: "birmingham",
    description: "Britain's famous 'second city' and industrial hub. From the modern Bull Ring and Grand Central to Shakespeare's nearby birthplace in Warwickshire.",
    region: "West Midlands",
    hasDetailedData: true
  },
  {
    city: "Glasgow",
    slug: "glasgow",
    description: "Scotland's most populous city with incredible entertainment, events and culture. When it comes to great days out, you don't have to look far in Glasgow!",
    region: "Scotland",
    hasDetailedData: true
  },
  {
    city: "Leeds",
    slug: "leeds",
    description: "Yorkshire's principal city buzzing with musical, sporting, and leisure attractions. The redeveloped Call Lane area is famed for bars and live music venues.",
    region: "Yorkshire",
    hasDetailedData: true
  },
  {
    city: "Liverpool",
    slug: "liverpool",
    description: "The cultural heartbeat of the UK with rich musical heritage. From The Beatles and the Cavern Club to its current pulsating nightlife and creative scene.",
    region: "Merseyside",
    hasDetailedData: true
  },
  {
    city: "Sheffield",
    slug: "sheffield",
    description: "Named after the River Sheaf, Sheffield has grown from industrial roots to become a thriving epicenter for university life, learning, and leisure.",
    region: "Yorkshire",
    hasDetailedData: true
  },
  {
    city: "Bristol",
    slug: "bristol",
    description: "The eighth largest urban area connecting England with Wales. A historic starting place for early voyages of exploration to the New World.",
    region: "South West",
    hasDetailedData: true
  },
  {
    city: "Edinburgh",
    slug: "edinburgh",
    description: "Scotland's capital city and world-renowned center of history and culture. Famous for its castle, annual fringe festival, and Royal Mile attractions.",
    region: "Scotland",
    hasDetailedData: true
  },
  {
    city: "Cardiff",
    slug: "cardiff",
    description: "The capital of Wales and UK's eleventh largest city. As Wales' chief commercial center, it's home to national cultural institutions and The Senedd.",
    region: "Wales",
    hasDetailedData: true
  },
  {
    city: "Newcastle",
    slug: "newcastle",
    description: "The cultural capital of North East England, famous for its nightlife, friendly locals, and iconic Tyne Bridge spanning the River Tyne.",
    region: "North East",
    hasDetailedData: true
  },
  {
    city: "Nottingham",
    slug: "nottingham",
    description: "Steeped in history and legend with tales of Robin Hood and the Sheriff. This East Midlands city has so much more to offer than folklore!",
    region: "East Midlands",
    hasDetailedData: true
  },
  // Additional cities with basic data
  {
    city: "Aberdeen",
    slug: "aberdeen",
    description: "Scotland's granite city and major oil capital, combining rich maritime heritage with modern energy industry. Known for its stunning architecture and coastal beauty.",
    region: "Scotland"
  },
  {
    city: "Abergavenny",
    slug: "abergavenny",
    description: "The 'Gateway to Wales' nestled in the beautiful Brecon Beacons. This market town offers stunning scenery and rich Welsh heritage.",
    region: "Wales"
  },
  {
    city: "Belfast",
    slug: "belfast",
    description: "Northern Ireland's capital city with a rich maritime heritage, vibrant cultural scene, and stunning architecture including the iconic Titanic Quarter.",
    region: "Northern Ireland"
  },
  {
    city: "Brighton",
    slug: "brighton",
    description: "The seaside city famous for its pier, vibrant arts scene, and inclusive community. A creative hub where London meets the English Channel.",
    region: "South East"
  },
  {
    city: "Coventry",
    slug: "coventry",
    description: "Historic city on the River Sherbourne, one of the most important and largest cities in the United Kingdom with rich industrial heritage.",
    region: "West Midlands"
  },
  {
    city: "Derby",
    slug: "derby",
    description: "The Roman, Saxon and Viking settlement on the River Derwent, sitting close to the picturesque Peak District national park.",
    region: "East Midlands"
  },
  {
    city: "Hull",
    slug: "hull",
    description: "The vibrant port city where the River Hull meets the Humber Estuary. With a thriving student community featuring modern cafes, bars and nightspots.",
    region: "Yorkshire"
  },
  {
    city: "Leicester",
    slug: "leicester",
    description: "The thriving East Midlands city making headlines with Richard III's discovery and Leicester City's odds-defying Premier League triumph!",
    region: "East Midlands"
  },
  {
    city: "Lincoln",
    slug: "lincoln",
    description: "Cathedral city with stunning Gothic architecture, steep medieval streets, and rich Roman heritage including the famous Lincoln Castle.",
    region: "Lincolnshire"
  },
  {
    city: "Luton",
    slug: "luton",
    description: "One of the UK's most populous areas without city status. A vibrant, diverse Bedfordshire community on the outskirts of London.",
    region: "Bedfordshire"
  },
  {
    city: "Milton Keynes",
    slug: "milton-keynes",
    description: "The planned new town famous for its grid road system, modern architecture, and being home to the headquarters of many major companies.",
    region: "Buckinghamshire"
  },
  {
    city: "Norwich",
    slug: "norwich",
    description: "Historic cathedral city and former Anglo-Saxon settlement, known for its medieval streets, vibrant market, and rich cultural heritage.",
    region: "Norfolk"
  },
  {
    city: "Plymouth",
    slug: "plymouth",
    description: "Historic maritime city where the Mayflower departed for America. A waterfront city combining naval heritage with modern university life.",
    region: "South West"
  },
  {
    city: "Preston",
    slug: "preston",
    description: "Historic Lancashire city on the River Ribble, mentioned in the Domesday Book and claiming to be the boomtown of the industrial revolution.",
    region: "Lancashire"
  },
  {
    city: "Reading",
    slug: "reading",
    description: "Home to the famous late summer music festival and a major commercial center for information technology, insurance, and entertainment.",
    region: "Berkshire"
  },
  {
    city: "Southampton",
    slug: "southampton",
    description: "Major port city with maritime heritage, home to the Titanic's departure. A gateway city combining history with modern commerce.",
    region: "South East"
  },
  {
    city: "Stoke-on-Trent",
    slug: "stoke-on-trent",
    description: "Famous for industrial-scale pottery manufacturing since the 17th century. Home to Royal Doulton, Wedgwood, Spode, and Minton ceramics heritage.",
    region: "Staffordshire"
  },
  {
    city: "Swansea",
    slug: "swansea",
    description: "Where a vibrant, bustling city meets the sea with stunning Welsh scenery as backdrop to a thriving community of arts, industry and lifestyle.",
    region: "Wales"
  },
  {
    city: "Warwick",
    slug: "warwick",
    description: "Historic market town famous for its medieval castle, university, and charming streets filled with Tudor and Georgian architecture.",
    region: "Warwickshire"
  }
];

// Helper function to get location by slug
export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return locations.find(location => location.slug === slug);
};

// Get all locations with detailed data
export const getLocationsWithDetailedData = (): LocationData[] => {
  return locations.filter(location => location.hasDetailedData);
};

// Default data for cities without detailed information
export const getDefaultLocationData = (location: LocationData) => ({
  benefits: [
    "Competitive rates from 15.9% APR",
    "Quick approval in 60 seconds",
    "No early repayment charges",
    "Flexible repayment terms up to 7 years",
    "Cover for new and used cars",
    "No deposit required options available"
  ],
  localInfo: `With our network of approved dealers across ${location.region}, we make car finance accessible throughout ${location.city}. Our trusted dealer network ensures you get the best car finance deals in ${location.city}.`,
  eligibility: [
    "Must be 18 or over",
    "UK resident for at least 3 years", 
    "Regular monthly income of £1,000+",
    "Valid UK driving licence",
    "Good, fair, or poor credit considered"
  ],
  process: [
    "Complete our 2-minute online application",
    "Get instant decision in 60 seconds",
    "Choose your car from approved dealers",
    "Complete paperwork and collect your keys"
  ],
  cityHistory: `${location.city} in ${location.region} has a rich history and continues to be a vibrant community. The area has evolved from its traditional roots into a modern, diverse location that attracts residents from all walks of life.`,
  whooshLocalInfo: `Whoosh Car Finance is proud to serve the ${location.city} community. We understand that car ownership is essential for work, family, and lifestyle in ${location.city}. Our mission is to make car finance accessible, transparent, and fair for everyone in ${location.region}. Whether you're a first-time buyer, upgrading your family car, or need reliable transport for work, we're here to help with competitive rates, clear terms, and dedicated support throughout your finance journey.`,
  localEconomy: `${location.city} offers diverse employment opportunities across various sectors, making it an attractive location for car finance customers.`,
  employmentData: `Strong employment levels in ${location.city} support a healthy car finance market with good approval rates.`,
  transportLinks: `${location.city} benefits from excellent transport connections, making car ownership both practical and desirable.`,
  popularVehicles: [
    "Ford Focus & Fiesta",
    "Vauxhall Corsa & Astra", 
    "Volkswagen Golf & Polo",
    "BMW 3 Series",
    "Audi A3 & A4"
  ],
  areaSpecificInfo: [
    `Popular car finance destination in ${location.region}`,
    "Quick local dealer network access",
    "Competitive local market rates",
    "Strong customer satisfaction ratings"
  ],
  creditConsiderations: `We work with customers across the credit spectrum in ${location.city}, offering solutions for good, fair, and poor credit applications.`,
  marketTrends: `Growing car finance market in ${location.city} with increasing demand for both new and used vehicles. Average loan amount varies by local economic conditions.`
});