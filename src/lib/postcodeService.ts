export interface PostcodeAddress {
  formatted_address: string;
  line_1: string;
  line_2: string;
  line_3: string;
  post_town: string;
  postcode: string;
}

// Generate sample addresses based on postcode area data
const generateSampleAddresses = (postcodeData: any): PostcodeAddress[] => {
  const { postcode, admin_ward, admin_district, region, parish } = postcodeData;
  
  // Generate multiple sample addresses for selection
  // In production, this would come from getAddress.io or similar service
  const addresses: PostcodeAddress[] = [];
  
  // Sample street names for demonstration
  const sampleStreets = [
    'High Street',
    'Church Lane',
    'Station Road',
    'Mill Road',
    'Park Avenue',
    'Victoria Street',
    'King Street',
    'Queen Street'
  ];
  
  // Generate 5-8 sample addresses
  const numAddresses = Math.floor(Math.random() * 4) + 5;
  
  for (let i = 0; i < numAddresses; i++) {
    const houseNumber = Math.floor(Math.random() * 200) + 1;
    const streetName = sampleStreets[i % sampleStreets.length];
    const line1 = `${houseNumber} ${streetName}`;
    
    addresses.push({
      formatted_address: `${line1}, ${admin_ward || admin_district}, ${postcode}`,
      line_1: line1,
      line_2: admin_ward || '',
      line_3: admin_district || '',
      post_town: admin_district || '',
      postcode: postcode,
    });
  }
  
  return addresses;
};

export const lookupPostcode = async (postcode: string): Promise<PostcodeAddress[]> => {
  try {
    const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase();
    
    const response = await fetch('https://api.postcodes.io/postcodes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postcodes: [cleanPostcode]
      })
    });
    
    if (!response.ok) {
      throw new Error('Postcode lookup failed');
    }
    
    const data = await response.json();
    
    if (data.status === 200 && data.result && data.result[0]?.result) {
      const result = data.result[0].result;
      
      // Generate sample addresses for demonstration
      // NOTE: For production use, integrate with getAddress.io API:
      // https://getaddress.io/ - provides actual street addresses
      return generateSampleAddresses(result);
    }
    
    throw new Error('Invalid postcode');
  } catch (error) {
    console.error('Postcode lookup error:', error);
    throw error;
  }
};
