import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const getProductsByCategory = async (categoryslug: string) => {
    const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`

        *[_type == "product" && references(*[_type == "category" && slug.current == $categoryslug]._id)] | order(name asc)

        `);

try {
    const product = await sanityFetch({
        query: PRODUCT_BY_CATEGORY_QUERY,
        params:{
            categoryslug,
        }
    });
    return product.data || [];
} catch (error) {
    console.error('Error fetching by ID', error);
    return [];
}
}