import React from 'react';
import {  Product } from "@/sanity.types";
import Productgrid from './ProductGrid';

interface ProductsViewProps {
    products: Product[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
    return (
        <div className="flex flex-col">
            <div className="w-full sm:w-[200px]">
            </div>
            <div>
                <div className="flex-1">

                    <Productgrid products={products}/>

                    <hr className='w-1/2 sm:w-3/4'/>
                </div>
            </div>
        </div>
    );
};

export default ProductsView;
