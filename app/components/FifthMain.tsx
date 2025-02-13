import React from 'react'
import Link from "next/link";
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';
import { getAllCategories } from '@/sanity/lib/products/getAllCategories';
import ProductsView from './ProductView';





const FifthMain =async () => {
    const products = await getAllProducts();
    const categories = await getAllCategories();

    return (
        <>
            <ProductsView products={products} categories={categories} />

        </>
  )
}

export default FifthMain
