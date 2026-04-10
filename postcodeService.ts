export interface PostcodeAddress {
  formatted_address: string;
  line_1: string;
  line_2: string;
  line_3: string;
  post_town: string;
  postcode: string;
}
export const lookupPostcode = async (
  postcode: string
): Promise<PostcodeAddress[]> => {
  try {
    const cleanPostcode = postcode.replace(/\s/g, "").toUpperCase();

    const response = await fetch(
      `https://api.ideal-postcodes.co.uk/v1/postcodes/${cleanPostcode}?api_key=ak_mdsk9skhW9BLTFf3ldw65I5DDWZf3`
    );

    if (!response.ok) {
      throw new Error("Postcode lookup failed");
    }

    const data = await response.json();

    console.log("Ideal response:", data);

    if (data.code === 2000 && Array.isArray(data.result)) {
      return data.result.map((addr: any) => ({
        formatted_address: [
          addr.line_1,
          addr.line_2,
          addr.line_3,
          addr.post_town,
          addr.postcode,
        ]
          .filter(Boolean)
          .join(", "),
        line_1: addr.line_1,
        line_2: addr.line_2,
        line_3: addr.line_3,
        post_town: addr.post_town,
        postcode: addr.postcode,
      }));
    }

    throw new Error("Invalid postcode");
  } catch (error) {
    console.error("Postcode lookup error:", error);
    throw error;
  }
};