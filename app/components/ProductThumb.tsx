"use client"; 

import { Product } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

function ProductThumb({ product }: { product: Product }) {
    const isOutOfStock = product.stock != null && product.stock <= 0;
    return (
        <Link
            href={`/product/${product.slug?.current}`}
            className={`group flex flex-col w-72 h-[420px] bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
        >
            <div className="flex flex-col h-full">
                {/* Product Header */}
                <div className="flex items-center justify-between p-4">
                    <div>
                        <h1 className="font-bold text-lg">{product.name}</h1>
                        <h2 className="text-[#90A3BF] text-sm"></h2>
                    </div>
                    <span>
                        <i className="ri-heart-line text-xl text-gray-500 hover:text-red-500"></i>
                    </span>
                </div>

                {/* Product Image */}
                <div className="relative w-full h-[180px] flex justify-center items-center bg-gray-100">
                    {product.image && (
                        <Image
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                            src={imageUrl(product.image).url()}
                            alt={product.name || "Product Image"}
                            layout="fill"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    )}
                </div>

                {/* Product Features */}
                <div className="flex justify-center items-center gap-4 p-4 text-gray-600 text-sm">
                    <span className="flex gap-1 items-center">
                        <i className="ri-gas-station-line"></i> {product.tankcapicity}
                    </span>
                    <span className="flex gap-1 items-center">
                        <i className="ri-steering-line"></i> Manual
                    </span>
                    <span className="flex gap-1 items-center">
                        <i className="ri-user-line"></i> {product.peoplecapicity} people
                    </span>
                </div>

                {/* Pricing & Rent Button */}
                <div className="flex justify-between items-center p-4 border-t">
                    <div className="text-lg font-semibold text-gray-800">
                        ${product.price} <span className="text-sm text-gray-500">/day</span>
                    </div>
                    <button className="bg-[#3563E9] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                        Rent Now
                    </button>
                    
                </div>
            </div>
        </Link>
    );
}

export default ProductThumb;
