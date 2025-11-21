import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Car, Clock, Shield, Star, Users, CheckCircle, ArrowRight, Phone, Mail, Building, TrendingUp, Briefcase, Navigation } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Helmet } from "react-helmet-async";
import { getLocationBySlug, getDefaultLocationData } from "@/data/locations";

// Detailed location data for cities with comprehensive information
const detailedLocationData: Record<string, {
  benefits: string[];
  localInfo: string;
  eligibility: string[];
  process: string[];
  specialOffers?: string;
  cityHistory: string;
  whooshLocalInfo: string;
  localEconomy: string;
  employmentData: string;
  transportLinks: string;
  popularVehicles: string[];
  areaSpecificInfo: string[];
  creditConsiderations: string;
  marketTrends: string;
}> = {
  london: {
    benefits: [
      "Competitive rates from 15.9% APR",
      "Quick approval in 60 seconds",
      "No early repayment charges",
      "Flexible repayment terms up to 7 years",
      "Cover for new and used cars",
      "No deposit required options available"
    ],
    localInfo: "With over 200 approved dealers across Greater London, we make car finance accessible from Central London to the outer boroughs. Whether you're in the City, Canary Wharf, or anywhere across the capital, our network of trusted dealers ensures you get the best car finance deals.",
    eligibility: [
      "Must be 18 or over",
      "UK resident for at least 3 years",
      "Regular monthly income of £1,000+",
      "Valid UK driving licence",
      "Good, fair, or poor credit considered"
    ],
    process: [
      "Complete our 2-minute online application",
      "Get instant decision and quote",
      "Choose your car from our dealer network",
      "Finalize paperwork and drive away",
      "All completed within 24 hours"
    ],
    specialOffers: "London residents: Get 0.5% APR discount on all finance agreements over £15,000",
    cityHistory: "London's automotive story begins in the early 1900s when it became one of the first cities to embrace motor vehicles. From the iconic black cabs that have served Londoners since 1897 to the introduction of the congestion charge in 2003, London has always been at the forefront of urban transport evolution. Today, with the Ultra Low Emission Zone (ULEZ) and growing emphasis on sustainable transport, the capital continues to shape the future of British motoring. The city's diverse boroughs - from historic Westminster to modern Canary Wharf - each have unique transport needs, making flexible car finance solutions essential for London's nine million residents.",
    whooshLocalInfo: "Whoosh Car Finance is proud to serve London and the Greater London area. We understand that in a city as diverse and dynamic as London, reliable transport is crucial whether you're commuting to the City, running a business, or simply need the freedom to explore beyond the Underground network. Our mission is to make quality car finance accessible to all Londoners, regardless of credit history. We work with you to find affordable solutions that fit your lifestyle and budget. From first-time buyers in outer boroughs to professionals upgrading in Central London, we're committed to transparent, fair, and fast finance that gets you mobile. With ULEZ requirements and parking challenges, we help you navigate London's unique automotive landscape with expert advice and competitive rates tailored to metropolitan living.",
    localEconomy: "London's economy is valued at £487 billion, making it the largest urban economy in Europe. With major financial services, technology, and creative industries, average household income is £52,000 annually.",
    employmentData: "London employment rate stands at 75.8% with over 5.7 million jobs. Major employers include financial services (22%), professional services (18%), and technology sector (12%). Average salary £41,000.",
    transportLinks: "Exceptional transport connectivity with 5 international airports, 270 Underground stations, 700+ bus routes, and major rail terminals. Congestion charge zone may influence vehicle choice.",
    popularVehicles: [
      "BMW 3 Series - Popular with professionals",
      "Mercedes A-Class - City driving favorite",
      "Volkswagen Golf - Reliable urban choice",
      "Audi A3 - Premium compact option",
      "Tesla Model 3 - Growing EV adoption",
      "Mini Cooper - London icon"
    ],
    areaSpecificInfo: [
      "ULEZ compliance required for most areas",
      "Congestion charge considerations for Zone 1",
      "Limited parking availability increases PCP popularity",
      "High insurance premiums due to theft/accident rates",
      "Electric vehicle infrastructure rapidly expanding",
      "Car clubs popular, reducing ownership needs"
    ],
    creditConsiderations: "London's high living costs mean debt-to-income ratios are carefully assessed. Property prices affect affordability calculations. Professional employment history viewed favorably by lenders.",
    marketTrends: "Strong demand for electric and hybrid vehicles due to ULEZ. Premium German brands dominate. Average loan amount £28,500. Lease deals increasingly popular over purchase."
  },
  manchester: {
    benefits: [
      "Rates from 15.9% APR representative",
      "Same day approval available",
      "No arrangement fees",
      "Part exchange welcomed",
      "Cover for cars up to 10 years old",
      "Bad credit specialists available"
    ],
    localInfo: "Serving all areas of Greater Manchester including Manchester city center, Salford, Stockport, Oldham, Bolton, and Wigan. Our Manchester team understands the local market and works with over 150 dealers across the region.",
    eligibility: [
      "Minimum age 18 years",
      "UK resident with 3+ years address history",
      "Monthly income from £800",
      "Full UK driving licence",
      "All credit histories welcomed"
    ],
    process: [
      "Online application takes just 3 minutes",
      "Soft credit check with instant decision",
      "Browse cars at approved dealers",
      "Complete finance agreement",
      "Drive away same day possible"
    ],
    cityHistory: "Manchester's relationship with the automobile began during the Industrial Revolution, when the city's engineering prowess made it a natural hub for automotive innovation. The city witnessed the birth of Rolls-Royce in nearby Crewe and has been home to numerous motor manufacturers over the decades. From the Hacienda nightclub's legendary car park to today's modern MediaCityUK, Manchester's transport needs have evolved alongside its cultural renaissance. The city's music heritage - from Joy Division to Oasis - mirrors its industrial transformation, with workers once building car parts now coding software for electric vehicles. Today, Manchester is embracing green transport initiatives while maintaining its reputation as a city where creativity and commerce drive progress together.",
    whooshLocalInfo: "Whoosh Car Finance is delighted to serve Greater Manchester and its surrounding communities. We understand that whether you're commuting from Stockport to the city center, running a business in Salford Quays, or need reliable transport across the sprawling Greater Manchester area, having the right vehicle is essential. Our team knows the unique challenges facing Mancunians - from congestion around Old Trafford on match days to navigating the expanding Clean Air Zone. We're committed to providing transparent, affordable car finance that reflects Manchester's values of hard work and fair dealing. From first-time buyers in Wigan to families upgrading in Altrincham, we offer flexible terms, competitive rates, and genuine support. We believe everyone deserves access to quality transport, and we work tirelessly to make that happen for our Manchester customers, regardless of their credit history.",
    localEconomy: "Greater Manchester economy worth £68.8 billion annually. Major growth in digital, creative, and manufacturing sectors. MediaCity UK and extensive regeneration driving economic expansion.",
    employmentData: "Employment rate 73.2% across Greater Manchester. Major employers include NHS (8.2%), retail (11.3%), and manufacturing (9.1%). Average salary £26,500, below national average.",
    transportLinks: "Manchester Airport - UK's third busiest. Excellent rail connections via Manchester Piccadilly. Metrolink tram system. M60 orbital motorway provides good road access across region.",
    popularVehicles: [
      "Ford Focus - Practical family choice",
      "Vauxhall Corsa - Popular first car",
      "Nissan Qashqai - Crossover favorite",
      "BMW 1 Series - Affordable premium",
      "Volkswagen Polo - Reliable compact",
      "Seat Leon - Sporty alternative"
    ],
    areaSpecificInfo: [
      "Northern Powerhouse investment benefits",
      "Clean Air Zone planning considerations",
      "Strong manufacturing heritage influences preferences",
      "University city - student finance options",
      "Music industry connections boost creative sector",
      "Growing tech sector increases EV adoption"
    ],
    creditConsiderations: "Lower average incomes mean careful affordability assessment. Strong employment in public sector viewed positively. Student populations require specialized products.",
    marketTrends: "Growing demand for crossovers and SUVs. Strong used car market due to affordability focus. Average loan £18,500. Hire purchase remains popular over PCP."
  },
  birmingham: {
    benefits: [
      "APR from 15.9% for excellent credit",
      "Guaranteed car finance available",
      "No deposit options",
      "Flexible monthly payments",
      "New and used car coverage",
      "Free insurance quotes included"
    ],
    localInfo: "Covering Birmingham and the wider West Midlands including Coventry, Wolverhampton, Walsall, and Dudley. With the Midlands being a major automotive hub, we've built strong relationships with dealers throughout the region.",
    eligibility: [
      "Age 18-75 years",
      "3 years UK residency",
      "Minimum income £900 per month",
      "Valid driving licence",
      "Homeowners and renters accepted"
    ],
    process: [
      "Quick online form completion",
      "Instant soft credit search",
      "Personalized quote provided",
      "Visit approved dealer",
      "Same day collection available"
    ],
    cityHistory: "Birmingham's automotive heritage runs deep as the heart of Britain's motor industry since the early 1900s. The city has been home to legendary car manufacturers including Austin, Morris, and Rover, with the famous Longbridge plant once employing tens of thousands. The city that powered Britain during the Industrial Revolution transformed itself into 'Motor City', producing everything from the humble Austin Seven to luxury Jaguars. Though the landscape has changed, Birmingham remains intrinsically linked to automotive excellence - Jaguar Land Rover continues operations nearby, and the city's engineering DNA persists in modern manufacturing. The Bull Ring's transformation from Victorian market to shopping destination mirrors Birmingham's own renaissance, as the UK's second city looks confidently to the future while honoring its industrial past.",
    whooshLocalInfo: "Whoosh Car Finance is proud to serve Birmingham and the wider West Midlands community. As a region with such rich automotive heritage, we understand that car ownership isn't just practical - it's part of the local identity. Whether you're in Sutton Coldfield, Solihull, or the city center, we know that Birmingham's spread-out geography makes reliable transport essential for work and family life. We're committed to making car finance accessible to everyone in the Midlands, offering solutions that work for your circumstances. From supporting families in Erdington to helping young professionals in the Jewellery Quarter, we provide clear, honest finance with rates that reflect our respect for Birmingham's hardworking communities. With the Clean Air Zone and changing transport needs, we'll help you navigate your options with expert advice and genuine care for your financial wellbeing.",
    localEconomy: "West Midlands economy valued at £121 billion. Major automotive manufacturing hub with Jaguar Land Rover, BMW, and Aston Martin. Growing financial services sector.",
    employmentData: "Employment rate 70.1% with 1.3 million jobs in region. Major sectors: manufacturing (12.4%), retail (10.8%), health (11.2%). Average salary £25,800.",
    transportLinks: "Birmingham Airport - international gateway. New Street Station - major rail hub. Extensive motorway network (M6, M5, M40, M42). HS2 terminus planned.",
    popularVehicles: [
      "Jaguar XE - Local manufacturing pride",
      "BMW 3 Series - Premium choice",
      "Ford Fiesta - Popular city car",
      "Land Rover Discovery Sport - SUV favorite",
      "Audi A4 - Executive preference",
      "Volkswagen Golf - Reliable choice"
    ],
    areaSpecificInfo: [
      "Major automotive manufacturing center",
      "Commonwealth Games 2022 legacy benefits",
      "HS2 development changing property values",
      "Industrial heritage influences car preferences",
      "Strong engineering skills base",
      "Growing green technology sector"
    ],
    creditConsiderations: "Industrial employment history viewed favorably. Manufacturing sector experience positive for applications. Property regeneration areas offer growth potential.",
    marketTrends: "Strong preference for British-built vehicles. SUV market growing rapidly. Average loan amount £21,000. Local manufacturing discounts influence purchases."
  },
  glasgow: {
    benefits: [
      "Scottish residents special rates from 15.9% APR",
      "No Scottish Government restrictions",
      "Flexible terms 1-7 years",
      "Part exchange valuations",
      "All credit types considered",
      "Local Scottish dealer network"
    ],
    localInfo: "Serving all of Glasgow and surrounding areas including East Renfrewshire, South Lanarkshire, and West Dunbartonshire. Our Scottish operations ensure compliance with all local regulations while providing competitive finance options.",
    eligibility: [
      "18+ years old",
      "Scottish resident for 2+ years",
      "Monthly income £750+",
      "UK driving licence",
      "Good, fair, or poor credit welcome"
    ],
    process: [
      "Complete application online",
      "Scottish credit assessment",
      "Browse Scottish dealer network",
      "Finalize agreement locally",
      "Quick collection arranged"
    ],
    cityHistory: "Glasgow's automotive story is woven into its industrial fabric. Once known as the 'Second City of the Empire', Glasgow's engineering prowess extended from shipbuilding on the Clyde to motor manufacturing. The city produced commercial vehicles and buses that served not just Scotland but the entire British Empire. From the iconic Glasgow trams to today's modern Subway (affectionately known as the 'Clockwork Orange'), transport has always been vital to this working-class city. The post-industrial transformation has seen former shipyards become cultural venues like the Hydro and SSE, but Glasgow's spirit remains - hard-working, proud, and forward-looking. As Scotland's largest city embraces COP26's green legacy, Glaswegians are leading the charge towards sustainable transport while maintaining their characteristic practicality and humor.",
    whooshLocalInfo: "Whoosh Car Finance is delighted to serve Glasgow and the wider central belt of Scotland. We know that in a city built on honest graft and community spirit, trust matters. Whether you're in the East End, West End, or anywhere across the Greater Glasgow area, we understand that reliable transport is crucial for work, family, and living your best Scottish life. From nurses at the Queen Elizabeth Hospital to creative professionals in the Merchant City, we help Glaswegians from all walks of life get mobile. We're committed to fair, transparent finance that respects your circumstances. Bad credit? Don't worry. We know everyone deserves a second chance. Our mission is simple: provide affordable, honest car finance with the kind of straight-talking service Glasgow is famous for. No fancy tricks, just good deals and genuine support to help you get behind the wheel.",
    localEconomy: "Glasgow city region economy worth £59 billion. Major sectors include financial services, engineering, and creative industries. Ongoing regeneration drives growth.",
    employmentData: "Employment rate 72.3% with major employers including NHS Scotland, Glasgow City Council, and Strathclyde University. Average salary £24,200.",
    transportLinks: "Glasgow Airport serves 120+ destinations. Central Station - major rail hub. M8 motorway corridor. Subway system unique in Scotland. Ferry connections to islands.",
    popularVehicles: [
      "Ford Focus - Practical Scottish choice",
      "Vauxhall Corsa - Popular small car",
      "BMW 1 Series - Affordable premium",
      "Nissan Micra - City driving favorite",
      "Skoda Octavia - Family practicality",
      "Mercedes A-Class - Growing popularity"
    ],
    areaSpecificInfo: [
      "COP26 legacy promoting green vehicles",
      "Scottish Government EV incentives",
      "Rural driving needs influence SUV sales",
      "Cultural events boost tourism industry",
      "Shipbuilding heritage still influences economy",
      "Growing renewable energy sector"
    ],
    creditConsiderations: "Scottish banking regulations apply. Property values lower than UK average affect secured lending. Public sector employment common and viewed positively.",
    marketTrends: "Increasing electric vehicle adoption due to government incentives. Compact cars popular for city driving. Average loan £17,800. Scottish independence considerations affect long-term planning."
  },
  leeds: {
    benefits: [
      "Yorkshire rates from 15.9% APR",
      "Fast track approval service",
      "No hidden charges",
      "Competitive part exchange",
      "Extended warranties available",
      "Local Yorkshire service"
    ],
    localInfo: "Covering Leeds and the wider Yorkshire region including Bradford, Wakefield, and Harrogate. Our Yorkshire team provides personalized service with deep knowledge of the local automotive market.",
    eligibility: [
      "Minimum age 18",
      "UK resident 3+ years",
      "Income from £850 monthly",
      "Full driving licence",
      "All backgrounds considered"
    ],
    process: [
      "Online application in minutes",
      "Yorkshire-based credit check",
      "Local dealer recommendations",
      "Complete paperwork locally",
      "Drive away today options"
    ],
    cityHistory: "Leeds, named after the Kingdom of Elmet, has transformed from a medieval wool town into Yorkshire's financial and commercial powerhouse. The city's Victorian arcades and mills tell stories of textile wealth, while its modern glass towers house major banks and law firms. Leeds witnessed the rise of Montague Burton's tailoring empire and Joshua Tetley's brewing dynasty, industries that once moved thousands of workers across the city daily. The city's love affair with cars deepened post-war, with ring roads carved through former industrial areas. Today, Leeds combines its Yorkshire heritage with metropolitan ambition - Call Lane's bars buzz where factories once stood, while the financial district rivals Manchester. As Yorkshire's largest city balances tradition with progress, reliable transport remains essential for connecting communities from Headingley to Harehills.",
    whooshLocalInfo: "Whoosh Car Finance is proud to serve Leeds and Yorkshire's vibrant communities. We understand that in a city sprawling from Roundhay to Morley, where parking is gold dust and transport links are everything, having your own wheels makes all the difference. Whether you're a solicitor in the financial district, a nurse at St James's, or a student at one of our three universities, we're here to help. We know Yorkshire folk value straight talk and fair dealing - that's exactly what we offer. No hidden fees, no fancy London speak, just honest car finance that works for your budget. From first-time buyers in Bramley to families upgrading in Harrogate, we treat every customer with the respect they deserve. Our mission is making car ownership accessible and affordable for all Yorkshire people, because we believe reliable transport shouldn't be a luxury - it's a necessity.",
    localEconomy: "Leeds City Region economy worth £73.6 billion. Major financial services center outside London. Growing digital and creative sectors. Strong manufacturing base.",
    employmentData: "Employment rate 74.8% with major employers including NHS, Leeds City Council, and universities. Financial services sector provides 85,000 jobs. Average salary £27,300.",
    transportLinks: "Leeds Bradford Airport for regional flights. Leeds Station - major rail junction. M1, M62, A1(M) motorway access. Growing cycling infrastructure affects transport choices.",
    popularVehicles: [
      "Audi A3 - Popular with professionals",
      "BMW 1 Series - Premium compact choice",
      "Ford Focus - Reliable family car",
      "Volkswagen Golf - German quality favorite",
      "Nissan Qashqai - Crossover preference",
      "MINI Cooper - Style conscious choice"
    ],
    areaSpecificInfo: [
      "Major financial services hub outside London",
      "Three universities drive young professional market",
      "Strong legal sector influences car choices",
      "Growing tech sector increasing EV adoption",
      "Rugby League heritage builds community loyalty",
      "Regeneration projects improving city center"
    ],
    creditConsiderations: "Strong financial services sector employment viewed positively. University presence means graduate finance products popular. Property market growth supports secured lending.",
    marketTrends: "Premium German brands increasingly popular. Strong used car market due to student population. Average loan £22,400. Business car schemes popular with financial sector."
  },
  liverpool: {
    benefits: [
      "Merseyside special rates from 15.9% APR",
      "Quick decision service",
      "No upfront fees",
      "Bad credit specialists",
      "Cars from £2,000-£50,000",
      "Local Merseyside focus"
    ],
    localInfo: "Serving Liverpool and all Merseyside areas including Wirral, St Helens, and Southport. Our Merseyside team understands the local community and provides tailored finance solutions.",
    eligibility: [
      "18 years or older",
      "Merseyside resident preferred",
      "Monthly income £800+",
      "UK driving licence required",
      "Poor credit applications welcome"
    ],
    process: [
      "Quick online form",
      "Instant preliminary approval",
      "Visit local approved dealers",
      "Finalize finance agreement",
      "Same day collection possible"
    ],
    cityHistory: "Liverpool's automotive journey mirrors its maritime history - a city built on global connections and working-class determination. From the docks where goods arrived from across the Empire to the streets where Ford Transit vans delivered them, Liverpool has always been a city in motion. The Mersey Tunnel, opened in 1934, was an engineering marvel that transformed how Liverpudlians moved around their city. Post-war Liverpool saw massive car ownership growth as dock workers and factory employees gained mobility and freedom. The city that gave the world The Beatles also witnessed Britain's shift from public to private transport. While the docks quieted, the roads bustled. Today, Liverpool's renaissance - from Albert Dock's warehouses-turned-museums to the Liverpool ONE shopping district - reflects a city reimagining its future while staying true to its Scouse soul. Transport remains the lifeblood connecting communities across Merseyside.",
    whooshLocalInfo: "Whoosh Car Finance is made up to serve Liverpool and proud Merseyside. We know that Scousers value loyalty, honesty, and having people who'll go the extra mile - that's exactly who we are. Whether you're in Anfield, the Wirral, or anywhere across Merseyside, we understand that a car isn't just transport - it's freedom. Freedom to get to work at the Royal, visit family in St Helens, or escape to Southport beach. We're committed to providing car finance that's fair, transparent, and accessible to all Liverpudlians, regardless of credit history. From taxi drivers needing reliable wheels to young families in Speke looking to upgrade, we treat everyone with respect and honesty. Our mission is simple: help Merseyside folk get mobile with finance solutions that work for real people with real lives. No corporate nonsense, just sound deals from people who understand Liverpool's spirit.",
    localEconomy: "Liverpool City Region economy valued at £33.6 billion. Major growth in digital, creative, and maritime sectors. UNESCO World Heritage status boosts tourism.",
    employmentData: "Employment rate 68.9% with major employers including NHS, Liverpool City Council, and universities. Creative industries employ 35,000 people. Average salary £23,100.",
    transportLinks: "Liverpool John Lennon Airport - Beatles themed. Lime Street Station - major rail hub. Mersey Ferry services. M62, M57, M58 motorway access. Growing Merseyrail network.",
    popularVehicles: [
      "Ford Fiesta - Popular first car choice",
      "Vauxhall Corsa - Reliable city driving",
      "BMW 1 Series - Aspirational compact",
      "Nissan Micra - Easy parking favorite",
      "SEAT Ibiza - Stylish Spanish choice",
      "Volkswagen Polo - German reliability"
    ],
    areaSpecificInfo: [
      "Major cruise ship destination affects tourism jobs",
      "Creative industries influence lifestyle choices",
      "Strong maritime heritage and port activities",
      "Four universities create large student population",
      "Liverpool FC and Everton FC community pride",
      "European Capital of Culture legacy continues"
    ],
    creditConsiderations: "Lower average incomes require careful affordability assessment. Public sector employment stable. Student population needs specialized products. Tourism industry seasonal considerations.",
    marketTrends: "Compact cars dominate due to narrow streets. Growing interest in electric vehicles. Average loan £16,900. Strong cultural identity influences brand loyalty."
  },
  sheffield: {
    benefits: [
      "Sheffield rates from 15.9% APR",
      "Student-friendly options",
      "No guarantor required",
      "Flexible payment terms",
      "Local dealer network",
      "Steel City special offers"
    ],
    localInfo: "Covering Sheffield and South Yorkshire including Rotherham, Doncaster, and Barnsley. We understand the unique needs of Sheffield's diverse community including students and young professionals.",
    eligibility: [
      "Age 18+ accepted",
      "Yorkshire residency preferred",
      "Income from £700 monthly",
      "Provisional or full licence",
      "Students and graduates welcome"
    ],
    process: [
      "Student-friendly application",
      "Soft credit assessment",
      "Sheffield dealer network",
      "Simplified paperwork",
      "Quick approval process"
    ],
    cityHistory: "Sheffield's name comes from the River Sheaf, but its identity was forged in steel. For over 700 years, Sheffield craftsmen have shaped metal - from medieval cutlery to Victorian steel that built the world. The city's steelworks once lit the night sky orange, employing over 100,000 workers who walked, cycled, then drove to their shifts. The decline of heavy industry in the 1980s devastated Sheffield, but the city's resilience shone through. Former foundries became universities where two generations now study engineering. Don Valleys sports facilities rose from steelworks. Meadowhall shopping center transformed what was Europe's largest steelworks. Today, Sheffield balances its industrial heritage with green credentials - it's England's greenest city with more trees per person than any European city. The students who now fill trams to Ecclesall Road represent Sheffield's transformation from steel city to knowledge economy.",
    whooshLocalInfo: "Whoosh Car Finance is right proud to serve Sheffield and South Yorkshire. We understand that in the UK's greenest city, set where urban meets Peak District, transport needs are unique. Whether you're a student at Hallam or Sheffield Uni, a nurse at the Northern General, or running a business in Kelham Island, we're here to help. Sheffield folk don't do fancy or pretentious - neither do we. We offer straightforward, honest car finance with terms you can understand and prices you can afford. From Woodhouse to Dore, from first-time buyers to families needing bigger vehicles, we treat every customer with Yorkshire honesty and respect. Our mission is making car finance accessible to all South Yorkshire people, because we know that whether you're commuting or escaping to the Peaks, reliable wheels make life better. We work with your circumstances, not against them, to get you mobile.",
    localEconomy: "Sheffield City Region economy worth £21.3 billion. Major transformation from steel to advanced manufacturing, digital industries, and healthcare technologies.",
    employmentData: "Employment rate 71.4% with major employers including NHS, Sheffield City Council, and universities. Advanced manufacturing provides 45,000 jobs. Average salary £24,800.",
    transportLinks: "Sheffield Midland Station - cross-country rail hub. M1 motorway access. Supertram network unique in region. Sheffield Airport (Robin Hood) nearby. Peak District accessibility.",
    popularVehicles: [
      "Ford Focus - Practical student choice",
      "Vauxhall Corsa - Affordable reliability",
      "Skoda Fabia - Value for money favorite",
      "Volkswagen Golf - Graduate progression car",
      "Nissan Micra - Easy city parking",
      "SEAT Leon - Sporty appeal"
    ],
    areaSpecificInfo: [
      "Two major universities create large student market",
      "Steel heritage influences engineering preferences",
      "Peak District proximity affects 4WD popularity",
      "Advanced manufacturing revival drives economy",
      "Strong sporting culture with Sheffield United/Wednesday",
      "Green credentials with extensive parks system"
    ],
    creditConsiderations: "Large student population requires specialized products. Manufacturing employment history viewed positively. Graduate retention programs affect young professional market.",
    marketTrends: "Growing graduate retention improves car finance market. Student car sharing popular. Average loan £18,200. Environmental consciousness drives hybrid/EV interest."
  },
  bristol: {
    benefits: [
      "South West rates from 15.9% APR",
      "Green car finance options",
      "No early settlement fees",
      "Part exchange guaranteed",
      "Eco-friendly vehicle focus",
      "Bristol city center dealers"
    ],
    localInfo: "Serving Bristol and the wider South West including Bath, Gloucester, and Newport. Our South West team specializes in eco-friendly vehicle finance and sustainable transport solutions.",
    eligibility: [
      "18+ years old",
      "South West resident",
      "Monthly income £900+",
      "UK driving licence",
      "Eco-conscious drivers welcome"
    ],
    process: [
      "Green finance application",
      "Environmental impact assessment",
      "Eco-dealer recommendations",
      "Sustainable finance options",
      "Carbon-neutral delivery"
    ],
    cityHistory: "Bristol's story begins at the meeting of the Rivers Avon and Frome, where Saxon traders recognized a perfect port location. By the 18th century, Bristol was England's second city, its wealth built on trade (including the shameful slave trade it later repented). The city launched Isambard Kingdom Brunel's SS Great Britain and pioneered aviation at Filton where Concorde was built. Post-war, Bristol embraced the car age while preserving its Georgian splendor - a delicate balance. The city's creative spirit, from Banksy's street art to Aardman's Wallace and Gromit, reflects an independent streak that extends to transport choices. Named European Green Capital in 2015, Bristol now leads Britain's environmental movement, with residents passionate about sustainable living. The city's transformation from slave port to eco-pioneer shows how communities can reshape their identity while honoring complex histories.",
    whooshLocalInfo: "Whoosh Car Finance is excited to serve Bristol and the beautiful South West. We understand that Bristolians are passionate about sustainability, creativity, and community - values we share completely. Whether you're in Clifton, Stokes Croft, or anywhere across Bristol and Bath, we know that navigating this hilly, vibrant city requires the right vehicle. From environmental engineers at the aerospace sector to artists in the creative quarter, we help people from all backgrounds access affordable transport. We're committed to supporting Bristol's green ambitions by offering competitive finance for hybrid and electric vehicles alongside traditional options. Our mission is providing transparent, ethical car finance that respects both your budget and your values. We believe everyone deserves quality transport, and we work flexibly to make that happen - whether you're a student, self-employed, or have imperfect credit. Bristol's independent spirit inspires our approach: honest, innovative, and always putting customers first.",
    localEconomy: "Bristol and Bath area economy worth £44.2 billion. Major aerospace, defence, creative media, and financial services hub. Strong environmental technology sector.",
    employmentData: "Employment rate 76.2% with major employers including Airbus, Rolls-Royce, and BBC. Creative industries employ 60,000 people. Average salary £29,400.",
    transportLinks: "Bristol Airport - growing international routes. Temple Meads Station - major rail junction. M4, M5 motorway intersection. Severn Bridge connections to Wales.",
    popularVehicles: [
      "Tesla Model 3 - Environmental leader choice",
      "BMW i3 - Electric city car",
      "Nissan Leaf - EV pioneer favorite",
      "Toyota Prius - Hybrid reliability",
      "Audi A3 e-tron - Premium hybrid",
      "Volkswagen e-Golf - Electric Golf"
    ],
    areaSpecificInfo: [
      "European Green Capital 2015 legacy continues",
      "Strong environmental consciousness drives EV adoption",
      "Aerospace industry influences technology preferences",
      "Creative industries attract young professionals",
      "Bath World Heritage status boosts premium market",
      "Clean Air Zone affects vehicle choice"
    ],
    creditConsiderations: "Higher average incomes support premium vehicle finance. Environmental sector employment viewed positively. Property values rising due to lifestyle attractiveness.",
    marketTrends: "Leading UK city for electric vehicle adoption. Premium eco-friendly brands popular. Average loan £26,800. Environmental considerations influence all purchases."
  },
  edinburgh: {
    benefits: [
      "Capital city rates from 15.9% APR",
      "Festival season specials",
      "No Scottish restrictions",
      "Tourism industry friendly",
      "Historic city delivery",
      "Royal Mile office location"
    ],
    localInfo: "Serving Edinburgh and the Lothians including West Lothian, Midlothian, and East Lothian. Our Edinburgh office provides premium service befitting Scotland's capital city.",
    eligibility: [
      "18+ years of age",
      "Edinburgh/Lothians resident",
      "Income from £1,000 monthly",
      "Full UK driving licence",
      "Tourism workers welcome"
    ],
    process: [
      "Capital city application",
      "Premium credit assessment",
      "Edinburgh dealer network",
      "Royal Mile consultation",
      "Historic city delivery"
    ],
    cityHistory: "Edinburgh's story spans millennia from volcanic rock fortress to modern capital. The Castle, perched on Arthur's Seat, has witnessed Roman legions, medieval sieges, and the birth of the Scottish Enlightenment. The Old Town's closes and wynds once housed everyone from David Hume to Robert Burns, while the Georgian New Town brought order and elegance. Edinburgh's Festival, starting in 1947, transformed a dignified capital into a global cultural powerhouse. The city's financial district emerged in the 1980s, bringing prosperity and corporate towers. Yet Edinburgh retains its character - the Royal Mile still leads from castle to palace, locals still take August holidays to escape the Festival crowds, and the traditional 'Ne'er Day' celebrations continue. As Scotland's capital navigates devolution, Brexit, and climate change, transport infrastructure connecting historic core to modern suburbs becomes ever more vital.",
    whooshLocalInfo: "Whoosh Car Finance is delighted to serve Edinburgh and the Lothians. We understand that in Scotland's capital, where cobbled streets meet corporate headquarters, transport needs vary wildly. Whether you're navigating the New Town's Georgian streets, commuting from East Lothian, or need a car for work in the financial district, we're here to help. Edinburgh's high living costs and premium property prices mean affordability matters. We provide honest, transparent car finance tailored to Scottish circumstances - whether you're in financial services, tourism, education, or any sector. Our mission is making quality vehicles accessible to all Edinburgh residents, regardless of credit history. From Festival workers needing seasonal flexibility to bankers wanting premium German brands, we treat everyone fairly. We understand Edinburgh's unique character - professional yet unpretentious, successful yet grounded - and our service reflects those values with competitive rates and genuine Scottish hospitality.",
    localEconomy: "Edinburgh economy worth £31 billion annually. Major financial services center with Royal Bank of Scotland, Standard Life. Strong tourism, education, and government sectors.",
    employmentData: "Employment rate 77.8% - highest in Scotland. Major employers include NHS Lothian, Edinburgh Council, universities. Financial services employ 90,000. Average salary £32,100.",
    transportLinks: "Edinburgh Airport - Scotland's busiest. Waverley Station - scenic rail hub. A1, M8, M9 motorway access. Tram line to airport. Ferry connections to islands.",
    popularVehicles: [
      "BMW 3 Series - Executive preference",
      "Audi A4 - Professional choice",
      "Mercedes C-Class - Premium option",
      "Range Rover Evoque - Luxury SUV",
      "MINI Countryman - Stylish crossover",
      "Volvo XC40 - Safety conscious choice"
    ],
    areaSpecificInfo: [
      "Edinburgh Festival creates seasonal employment",
      "Financial services district demands premium vehicles",
      "Tourism industry affects city center access",
      "Historic city center affects vehicle size preferences",
      "Scottish Parliament presence boosts government sector",
      "High property values support premium finance"
    ],
    creditConsiderations: "Strong financial services employment viewed very positively. Higher average incomes support premium lending. Property values highest in Scotland affect secured options.",
    marketTrends: "Premium German brands dominate market. Executive cars popular with financial sector. Average loan £31,200. Scottish Government green initiatives influence EV adoption."
  },
  cardiff: {
    benefits: [
      "Welsh capital rates from 15.9% APR",
      "Bilingual service available",
      "No Welsh Government fees",
      "Rugby season specials",
      "Cardiff Bay delivery",
      "Welsh-speaking staff"
    ],
    localInfo: "Serving Cardiff and South Wales including Newport, Swansea, and the Welsh Valleys. Our Cardiff team provides bilingual service and understands Welsh automotive market needs.",
    eligibility: [
      "18+ oed/years old",
      "Welsh resident preferred",
      "Income £800+ monthly",
      "UK/Welsh driving licence",
      "Welsh speakers welcome"
    ],
    process: [
      "Bilingual application",
      "Welsh credit assessment",
      "Cardiff dealer network",
      "Senedd area service",
      "Welsh language support"
    ],
    cityHistory: "Cardiff's evolution from Roman fort 'Caerdydd' to Welsh capital is remarkable. For centuries, it was a modest market town until the Bute family's docks transformed it into the world's greatest coal port by 1913. Cardiff built Victorian prosperity shipping 'black gold' worldwide - wealth visible in ornate civic buildings. The coal's decline could have destroyed Cardiff, but resilience prevailed. Devolution in 1999 brought the Senedd (Welsh Parliament) home, catalyzing regeneration. Cardiff Bay's transformation from derelict docklands to vibrant waterfront shows Welsh ambition. The Principality Stadium's roof closing for rugby matches creates a cathedral atmosphere where national pride roars. Today's Cardiff balances Welsh identity with metropolitan swagger - you'll hear conversations in Cymraeg at coffee shops while international businesses thrive. As Wales's young capital finds its voice, connecting valleys communities to city opportunities requires reliable, affordable transport for all.",
    whooshLocalInfo: "Whoosh Car Finance is proud to serve Cardiff and South Wales, including bilingual support for Welsh speakers. We understand that whether you're in Cardiff Bay, the Valleys, or anywhere across South Wales, reliable transport connects communities and opportunities. From Senedd workers to Valleys families, nurses at the Heath Hospital to students at Cardiff Met, we help Welsh people get mobile. We recognize Wales's unique identity and values - community, fairness, and looking after your own. That's our approach too. We provide honest car finance with competitive rates, clear terms, and genuine support in English or Cymraeg. Our mission is making car ownership accessible across Wales, because we know that from Penarth to Pontypridd, having your own wheels means independence, opportunity, and freedom. Whether you're a rugby fan heading to the stadium or a worker commuting from the Valleys, we're here to help with finance solutions that respect your circumstances and budget.",
    localEconomy: "Cardiff Capital Region economy worth £48.7 billion. Major sectors include public administration, financial services, and creative industries. Welsh Government headquarters.",
    employmentData: "Employment rate 73.9% with major employers including Welsh Government, NHS Wales, and Cardiff University. Public sector provides 28% of jobs. Average salary £26,800.",
    transportLinks: "Cardiff Airport - Wales' national airport. Central Station - rail hub for Wales. M4 motorway corridor. Severn Bridge to England. Cardiff Bay regeneration area.",
    popularVehicles: [
      "Ford Focus - Popular Welsh family choice",
      "Vauxhall Corsa - Reliable compact car",
      "Nissan Qashqai - Crossover favorite",
      "BMW 1 Series - Affordable premium",
      "Skoda Octavia - Value and space",
      "Peugeot 308 - French alternative"
    ],
    areaSpecificInfo: [
      "Welsh Government employment provides stability",
      "Rugby World Cup and major events boost economy",
      "Cardiff Bay regeneration affects vehicle choices",
      "Strong Welsh language culture influences service",
      "University city creates young professional market",
      "Growing technology sector in Cardiff Bay"
    ],
    creditConsiderations: "Public sector employment viewed favorably for stability. Welsh Government employee schemes available. Property regeneration affects lending decisions.",
    marketTrends: "Growing preference for crossovers and SUVs. Strong used car market due to value consciousness. Average loan £19,400. Welsh pride influences brand loyalty."
  },
  newcastle: {
    benefits: [
      "Geordie rates from 15.9% APR",
      "Tyne & Wear coverage",
      "No arrangement charges",
      "Friendly local service",
      "Night shift worker friendly",
      "Tyneside dealer network"
    ],
    localInfo: "Serving Newcastle and the North East including Sunderland, Gateshead, and Middlesbrough. Our Newcastle team provides the friendly, straightforward service the North East is famous for.",
    eligibility: [
      "18+ years old like",
      "North East resident",
      "Monthly income £750+",
      "UK driving licence",
      "Shift workers welcome"
    ],
    process: [
      "Canny simple application",
      "Local credit assessment",
      "Tyneside dealer network",
      "Straightforward paperwork",
      "Friendly local service"
    ],
    cityHistory: "Newcastle, named for the 'New Castle' built by Robert Curthose in 1080, has been the North East's beating heart for nearly a millennium. The city's fortune was built on coal - 'taking coals to Newcastle' became proverbial because the black gold flowed from Tyneside worldwide. The iconic Tyne Bridge, opened in 1928, symbolized industrial might and connected communities separated by the river. Geordies built ships, mined coal, and crafted glass, their labor powering Britain's empire. When heavy industry collapsed in the 1980s, Newcastle could have died. Instead, it reinvented itself through determination and that famous Geordie spirit. The Baltic Flour Mill became an art gallery, the Quayside transformed into nightlife heaven, and the Sage brought culture to Gateshead. Today's Newcastle - consistently voted UK's friendliest city - shows how working-class pride and humor can overcome anything. Transport connects Tyneside communities from South Shields to Durham.",
    whooshLocalInfo: "Whoosh Car Finance is made up to serve Newcastle and the canny folk of the North East. We understand that Geordies value straight talking, fair dealing, and people who don't get above themselves - that's exactly what we offer, like. Whether you're in Byker, Gateshead, or anywhere across Tyne and Wear, we know reliable transport means everything for work, family, and enjoying the best nightlife in Britain. From shift workers at Nissan Sunderland to nurses at the RVI, bar staff on the Quayside to professionals in the business parks, we help all North East people get mobile. We're committed to honest, affordable car finance that works for real people with real lives. Bad credit? Don't worry, man. Everyone deserves a chance. Our mission is simple: provide quality car finance with the friendly, no-nonsense service the North East is famous for. We're not corporate suits - we're real people helping real people get where they need to go.",
    localEconomy: "North East economy valued at £56.3 billion. Major sectors include manufacturing, energy, digital, and healthcare. Nissan Sunderland major automotive employer.",
    employmentData: "Employment rate 69.8% with major employers including NHS Foundation Trust, Nissan, and local councils. Manufacturing employs 11.2%. Average salary £23,600.",
    transportLinks: "Newcastle Airport - regional gateway. Central Station - East Coast mainline. A1(M) Great North Road. Tyne and Wear Metro. North Sea ferry connections.",
    popularVehicles: [
      "Nissan Qashqai - Local manufacturing pride",
      "Ford Focus - Reliable family choice",
      "Vauxhall Corsa - Popular first car",
      "BMW 1 Series - Affordable premium",
      "Volkswagen Golf - German reliability",
      "SEAT Leon - Sporty alternative"
    ],
    areaSpecificInfo: [
      "Strong manufacturing heritage influences choices",
      "Nissan Sunderland creates local automotive pride",
      "Night economy affects shift worker needs",
      "Maritime heritage influences lifestyle",
      "Strong community spirit supports local businesses",
      "Growing digital sector in city center"
    ],
    creditConsiderations: "Manufacturing employment history viewed positively. Shift work patterns accommodated in applications. Lower average incomes require careful assessment.",
    marketTrends: "Strong loyalty to locally manufactured Nissan vehicles. Practical family cars dominate. Average loan £17,300. Community recommendations influence purchases."
  },
  nottingham: {
    benefits: [
      "Sheriff's rates from 15.9% APR",
      "Robin Hood referral rewards",
      "No Sheriff fees",
      "Sherwood coverage area",
      "Student-friendly terms",
      "Nottingham Forest specials"
    ],
    localInfo: "Serving Nottingham and Nottinghamshire including Mansfield, Newark, and surrounding areas. Our Nottingham team serves the legendary city with modern finance solutions.",
    eligibility: [
      "18+ years old",
      "East Midlands resident",
      "Income from £800 monthly",
      "UK driving licence",
      "Students and locals welcome"
    ],
    process: [
      "Legendary quick application",
      "Sherwood credit check",
      "Local dealer network",
      "Modern paperwork",
      "Robin Hood quick service"
    ],
    cityHistory: "Nottingham's legend begins with Robin Hood in Sherwood Forest, but its real story is industry and innovation. The city that produced lace for Victorian ballgowns also built Raleigh bicycles that took working people to factories. John Player's tobacco empire and Boots pharmaceuticals made Nottingham wealthy and gave thousands steady employment. The caves beneath the city - carved from soft sandstone over centuries - stored beer from numerous breweries. Post-war, Nottingham saw massive council housing development creating estates like Clifton and Bilborough. The university expansion turned it into a major student city, changing character from industrial to educational. Robin Hood's legacy persists - not in sheriffs and outlaws but in community pride and that East Midlands determination. Today's Nottingham balances heritage tourism with pharmaceutical excellence, lace markets with tram systems, and football rivalry between Forest and County with civic pride in being a thoroughly modern midlands city.",
    whooshLocalInfo: "Whoosh Car Finance is delighted to serve Nottingham and Nottinghamshire. We understand that whether you're a student at Trent or Nottingham Uni, working in pharmaceuticals at Boots, or living in the surrounding Sherwood towns, reliable transport makes all the difference. Nottingham folks are down-to-earth, friendly, and appreciate honest dealing - that's exactly our style. We offer straightforward car finance with competitive rates and terms you can actually understand. No sheriff's taxes or hidden Robin Hood fees here! From first-time buyers in Beeston to families in West Bridgford, we treat everyone with respect regardless of credit history. Our mission is making car ownership accessible to all Nottinghamshire people, because we believe having your own wheels shouldn't depend on perfect credit scores. Whether you're navigating the city's tram system or commuting from Mansfield, we're here to help with finance solutions that work for real people with real budgets. Legendary service, modern solutions.",
    localEconomy: "Greater Nottingham economy worth £20.4 billion. Major sectors include life sciences, digital technology, and advanced manufacturing. Strong pharmaceutical presence.",
    employmentData: "Employment rate 72.1% with major employers including NHS, Nottingham City Council, and universities. Life sciences employ 15,000. Average salary £25,100.",
    transportLinks: "East Midlands Airport nearby. Nottingham Station - cross-country rail. M1 junction 25-26. NET tram system. Robin Hood Airport Doncaster accessible.",
    popularVehicles: [
      "Ford Focus - Popular family choice",
      "Vauxhall Corsa - Student favorite",
      "Nissan Qashqai - Crossover appeal",
      "BMW 1 Series - Graduate progression",
      "Skoda Fabia - Value conscious choice",
      "Volkswagen Polo - Reliable compact"
    ],
    areaSpecificInfo: [
      "Two major universities create student market",
      "Robin Hood legend creates tourism industry",
      "Strong pharmaceutical industry employment",
      "Nottingham Forest and County create sports loyalty",
      "Lace making heritage influences creative sector",
      "Growing digital and gaming industry presence"
    ],
    creditConsiderations: "Student population requires flexible products. Pharmaceutical industry employment stable. University staff programs available. Graduate retention initiatives.",
    marketTrends: "Student car sharing affects ownership patterns. Growing graduate market for premium vehicles. Average loan £19,600. Local heritage creates brand loyalty patterns."
  }
};

export default function LocationDetail() {
  const { city } = useParams<{ city: string }>();
  
  if (!city) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <ScrollToTop />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-comic text-foreground mb-4">Location Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find information for this location.</p>
            <Button variant="cta" asChild>
              <a href="/locations">Back to Locations</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const location = getLocationBySlug(city);
  
  if (!location) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <ScrollToTop />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-comic text-foreground mb-4">Location Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find information for this location.</p>
            <Button variant="cta" asChild>
              <a href="/locations">Back to Locations</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get detailed data if available, otherwise use default
  const locationDetails = detailedLocationData[city] || getDefaultLocationData(location);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Car Finance in {location.city} | WHOOSH! Finance - Quick Approval</title>
        <meta name="description" content={`Get car finance in ${location.city}, ${location.region}. Quick approval, competitive rates from 15.9% APR, no broker fees. Apply now for instant decision!`} />
        <meta name="keywords" content={`car finance ${location.city}, ${location.city} car loans, vehicle finance ${location.region}, bad credit car finance ${location.city}`} />
        <link rel="canonical" href={`https://whooshfinance.co.uk/locations/${city}`} />
      </Helmet>
      
      <Header />
      <ScrollToTop />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-comic font-black text-foreground mb-6">
                <span className="text-primary">WHOOSH!</span> Car Finance in
                <span className="block text-3xl md:text-4xl text-secondary mt-2">{location.city}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="cta" className="font-comic text-xl px-8 py-6">
                  <Car className="h-6 w-6 mr-3" />
                  Get Finance Now!
                </Button>
                <Button size="lg" variant="outline" className="font-comic text-xl px-8 py-6 border-2 border-primary">
                  <Phone className="h-6 w-6 mr-3" />
                  Call Us Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Market Information */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-comic text-center mb-6">
                  <span className="text-primary">POW!</span> Local Market Insights
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-comic text-foreground mb-2">Economy</h3>
                  <p className="text-sm text-muted-foreground font-body">{locationDetails.localEconomy}</p>
                </div>
                <div className="text-center">
                  <Briefcase className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-comic text-foreground mb-2">Employment</h3>
                  <p className="text-sm text-muted-foreground font-body">{locationDetails.employmentData}</p>
                </div>
                <div className="text-center">
                  <Navigation className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-comic text-foreground mb-2">Transport</h3>
                  <p className="text-sm text-muted-foreground font-body">{locationDetails.transportLinks}</p>
                </div>
                <div className="text-center">
                  <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-comic text-foreground mb-2">Market Trends</h3>
                  <p className="text-sm text-muted-foreground font-body">{locationDetails.marketTrends}</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-12">
              {locationDetails.localInfo}
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(locationDetails.benefits || []).map((benefit, index) => (
                <Card key={index} className="comic-panel bg-white/95 border-4 border-black hover:shadow-comic-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-body">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Vehicles & Area Info */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Popular Vehicles */}
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                <h3 className="text-3xl font-comic text-center mb-6">
                  <span className="text-primary">ZOOM!</span> Popular Cars
                </h3>
                <ul className="space-y-3">
                  {(locationDetails.popularVehicles || []).map((vehicle, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground font-body">{vehicle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Area Specific Info */}
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                <h3 className="text-3xl font-comic text-center mb-6">
                  <span className="text-secondary">BAM!</span> Local Insights
                </h3>
                <ul className="space-y-3">
                  {(locationDetails.areaSpecificInfo || []).map((info, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground font-body">{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* City History & Whoosh Info */}
            <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg mb-12">
              <h3 className="text-3xl font-comic text-center mb-8">
                <span className="text-primary">WHOOSH!</span> {location.city} & Car Finance
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-comic text-secondary mb-4">The {location.city} Story</h4>
                  <p className="text-muted-foreground font-body leading-relaxed text-justify">
                    {locationDetails.cityHistory}
                  </p>
                </div>
                
                <div className="comic-panel bg-gradient-to-br from-primary/10 to-secondary/10 p-6 border-2 border-black">
                  <h4 className="text-2xl font-comic text-primary mb-4">How Whoosh Helps {location.city}</h4>
                  <p className="text-black/80 font-body leading-relaxed text-justify">
                    {locationDetails.whooshLocalInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Process Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Eligibility */}
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                <h3 className="text-3xl font-comic text-center mb-6">
                  <span className="text-primary">BAM!</span> Am I Eligible?
                </h3>
                <ul className="space-y-4">
                  {(locationDetails.eligibility || []).map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-body">{requirement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-secondary/10 border-2 border-secondary rounded-lg">
                  <h4 className="font-comic text-lg text-secondary mb-2">Credit Considerations</h4>
                  <p className="text-sm text-muted-foreground font-body">{locationDetails.creditConsiderations}</p>
                </div>
              </div>

              {/* Process */}
              <div className="comic-panel bg-white/95 p-8 border-4 border-black shadow-comic-lg">
                <h3 className="text-3xl font-comic text-center mb-6">
                  <span className="text-secondary">POW!</span> How It Works
                </h3>
                <ol className="space-y-4">
                  {(locationDetails.process || []).map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="comic-panel bg-primary/20 p-2 border-2 border-black text-sm font-comic font-bold text-primary flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground font-body">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-comic text-white mb-6">
                Ready for Car Finance in {location.city}?
              </h2>
              <p className="text-xl text-white/90 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of satisfied customers in {location.region} who chose WHOOSH! Finance for their car finance needs. Get started today!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <span className="text-white font-body">Compare 18+ Lenders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-white" />
                  <span className="text-white font-body">60 Second Approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-white" />
                  <span className="text-white font-body">No Impact on Credit Score</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button 
                    size="lg" 
                    className="font-comic text-xl px-8 md:px-12 py-6 bg-white text-primary hover:bg-gray-100 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                  >
                    <Car className="h-6 w-6 mr-3" />
                    Apply Now - {location.city}
                  </Button>
                </Link>
                <Link to="/apply">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="font-comic text-xl px-8 md:px-12 py-6 bg-transparent text-white border-4 border-white hover:bg-white hover:text-primary"
                  >
                    <Mail className="h-6 w-6 mr-3" />
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Local Contact Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-comic text-foreground mb-8">
                Need Help with Car Finance in <span className="text-primary">{location.city}</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our local {location.region} team is here to help. Get in touch for personalized car finance advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-foreground font-body text-lg">0800 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-foreground font-body text-lg">hello@whooshcarfinance.co.uk</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
