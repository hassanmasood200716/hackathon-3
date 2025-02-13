import React from 'react'
import ProductsView from './ProductView';
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';
import { getAllCategories } from '@/sanity/lib/products/getAllCategories';



const Thirdmain = async () => {
    const products = await getAllProducts();
    const categories = await getAllCategories();

    return (
        <>
            <ProductsView products={products} categories={categories} />

        </>
    )
}

export default Thirdmain
