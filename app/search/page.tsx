
import { searchProductsByName } from '@/sanity/lib/products/searchProductsByName';
import React from 'react'
import Productgrid from '../components/ProductGrid';

async function Searchpage({
    searchParams,
}:{
    searchParams: Promise<{
        query:string;
    }>;
}) {
    const {query} = await searchParams;
    const products = await searchProductsByName(query);

    if(!products.length) {
      return(
        <div className='flex flex-col items-center justify-top min-h-screen bg-gray-100'>
          <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-4xl'>
            <h1 className='text-3xl font-bold mb-6 text-center'>
              No products found for &quot;{query}&quot;
            </h1>
            <p className='text-gray-600 text-center'>
              Try searching for something else
              </p>
          </div>
        </div>
      )
    }
  return (
    <div className='flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4'>
       <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-6xl'>
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Search Results for &quot;{query}&quot;
        </h1>
        <Productgrid products={products}/>
       </div>
    </div>
  )
}

export default Searchpage
