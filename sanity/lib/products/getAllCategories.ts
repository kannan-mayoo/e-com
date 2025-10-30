import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

// Export the query at top-level so Sanity typegen can detect the projection
export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] { _id, title, slug } | order(title asc)
`);

// Function to get all categories
export const getAllCategories = async () => {
  try {
    // Use sanityFetch to send the query
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });

    // Return the list of categories, or an empty array if none are found
    return categories.data || [];
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
};




