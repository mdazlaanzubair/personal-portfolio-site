import { createClient } from "contentful";

// initializing contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API,
});

export default client;

// fetch services content from contentful
export const fetchContent = async (table_name) => {
  try {
    const data = await client.getEntries({ content_type: table_name });
    return data.items;
  } catch (error) {
    console.error("Error while fetching from experience table:\n\n", error);
  }
};
