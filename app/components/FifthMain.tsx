import React from 'react'
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';
import ProductsView from './ProductView';





const FifthMain =async () => {
    const products = await getAllProducts();

    return (
        <>
            <ProductsView products={products}  />

        </>
  )
}

export default FifthMain
