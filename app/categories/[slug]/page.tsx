// @ts-nocheck
import ProductsView from "@/app/components/ProductView";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import React from "react";

export default async function CategoryPage({ params }) {
  const { slug } = params; // No need to await params
  const products = await getProductsByCategory(slug);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {slug.replace("-", " ").toUpperCase()} Collection
        </h1>

        {products.length > 0 ? (
          <ProductsView products={products} />
        ) : (
          <p className="text-center text-gray-500 text-lg">No products in this category.</p>
        )}
      </div>
    </div>
  );
}
