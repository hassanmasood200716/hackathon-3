import FifthMain from "@/app/components/FifthMain";
import ForthMain from "@/app/components/ForthMain";
import { imageUrl } from "@/sanity/lib/image";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export const dynamic = "force-static"
export const revalidate= 60;

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product){
        return notFound();
    }
    return(
        <>
       

<div className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col gap-5 w-full md:w-4/5 lg:w-2/3" >
          <div className="relative">
            <div
              className="h-[50vh] absolute inset-0 -z-10 bg-cover bg-center"
              style={{ backgroundImage: 'url("/images/wallpaper1.png")' }}
            />
            <div className="relative z-10">
              <div className="h-[60vh] w-[90vw] md:w-[30vw] p-4 rounded-lg flex items-start justify-center flex-col text-white">
                <div className="text-3xl ">
                  Sports car with the best design and acceleration
                </div>
                <div className="text-lg w-[90vw] md:w-[20vw] pt-4">
                  Safety and comfort while driving a futuristic and elegant sports car
                </div>
<div className="flex justify-center items-center w-full h-[180px] bg-gray-100">
    {product.image && (
        <img 
            src={imageUrl(product.image).url()} 
            alt={product.name || "Product Image"} 
            width={250} 
            height={250} 
            className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
    )}
</div>
              </div>
            </div>
          </div>



          <div className="flex items-center justify-center space-x-4">
  {/* First Image with Background */}
  <div className="relative lg:block hidden h-[15vh] w-[15vw]">
    <div
      className="absolute inset-0 rounded-lg bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/wallpaper2.jpg")' }}
    />
<div className="relative z-10 h-full w-full flex items-center justify-center">
    {product.image && (
        <img
            className="rounded-lg w-full h-full object-cover"
            src={imageUrl(product.image).url()}
            alt={product.name || "Product Image"}
        />
    )}
</div>


  </div>

  {/* Second Image */}
  <div className="h-[15vh] w-[15vw] lg:block hidden">
    <img
      className="rounded-lg h-full w-full object-cover"
      src="/images/interior.png"
      alt="Car"
    />
  </div>

  {/* Third Image */}
  <div className="h-[15vh] w-[15vw] lg:block hidden">
    <img
      className="rounded-lg h-full w-full object-cover"
      src="/images/interior2.png"
      alt="Car"
    />
  </div>
</div>


        </div>
        <div className="w-full lg:w-3/6  px-16 h-[55vh] bg-white">
          <div className="flex flex-col gap-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
            </div >
            <div className="flex gap-y-6  gap-3">
              <span>⭐⭐⭐⭐</span><span className="text-[#596780]">440+ Reviewer</span>
            </div>
            <div>
              <p className="text-[#596780]">
                NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the "race track".
              </p>
            </div>
            <div className="flex gap-y-8 w-full flex-wrap">
              <div className="flex w-1/2  gap-3 md:gap-8">
                <span className="text-[#90A3BF]">TypeCar</span> <span className="text-[#596780]">{product.name}</span>
              </div>
              <div className="flex w-1/2  gap-3 md:gap-8">
                <span className="text-[#90A3BF]">Capacity</span> <span className="text-[#596780]">{product.peoplecapicity}</span>
              </div>
              <div className="flex w-1/2 m-0  gap-3 md:gap-8">
                <span className="text-[#90A3BF]">Steering </span> <span className="text-[#596780]">Manual</span>
              </div>
              <div className="flex w-1/2  gap-3 md:gap-8">
                <span className="text-[#90A3BF]">Gasoline</span> <span className="text-[#596780]">{product.tankcapicity}</span>
              </div>
            </div>
          </div>
          <div className="py-10 flex items-center justify-around">
            <div className="">
            <span className='font-bold text-2xl '>$</span>< span className='font-bold text-2xl'>{product.price}</span><span>day</span>
            </div>
            <div>
            <Link href={`/payment/${product.slug?.current}`}>
            <button    className="bg-[#3563E9] cursor-pointer text-white rounded-lg p-4 m-10 z-100 py-2">Pay Now</button>
            </Link>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-20 md:mt-0">
          <ForthMain />
          </div>
          <div>
          <FifthMain />
          </div>
        </div>
        </>
    )
}

export default ProductPage;
