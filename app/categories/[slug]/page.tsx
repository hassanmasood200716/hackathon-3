import ProductsView from "@/app/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import React from "react";

async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories(); // Fetching categories

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          Collection
        </h1>

        {products.length > 0 ? (
          <ProductsView products={products} categories={categories} />
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No products in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
