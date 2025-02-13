import React from 'react'
import ProductsView from './ProductView';
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';



const Thirdmain = async () => {
    const products = await getAllProducts();

    return (
        <>
            <ProductsView products={products} />

        </>
    )
}

export default Thirdmain
