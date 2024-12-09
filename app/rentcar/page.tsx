// app/detailcar/rentcar.tsx
"use client";
import { useSearchParams } from "next/navigation"; // For getting query params
import ForthMain from "../components/ForthMain";
import FifthMain from "../components/FifthMain";
import { Suspense } from 'react';
import Link from "next/link";

const RentCar = () => {
  const searchParams = useSearchParams(); // Use this hook to access query params

  // Destructure the query parameters from searchParams
  const name = searchParams.get("name");
  const type = searchParams.get("type");
  const capacity = searchParams.get("capacity");
  const peopleCapacity = searchParams.get("peopleCapacity");
  const price = searchParams.get("price");
  const src = searchParams.get("src");


  const paymentQuery = new URLSearchParams({
    name: name || "",
    type: type || "",
    capacity: capacity || "",
    peopleCapacity: peopleCapacity || "",
    price: price || "",
    src: src || "",
  }).toString();


  return (
    <>
      <div className="flex flex-col md:flex-row">
        
        <div className="w-1/5 lg:block hidden h-[150vh]">
          <div className="flex flex-col gap-2 items-start p-10 gap-y-6">
            <p className="text-[#90A3BF]">TYPE</p>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>sport</span>
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>SUV</span>
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>MPV</span>
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>Sedan</span>
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>Coupe</span>
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>Hatchback</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start p-8 gap-y-3">
            <p className="text-[#90A3BF]">CAPACITY</p>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>2 persons</span>
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>4 persons</span>
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>6 persons</span>
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>{" "}
              <span>8 persons</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-10">
            <p className="py-5 text-[#90A3BF]">PRICE</p>
            <input type="range" className="w-[200px]" />
            <p className="text-[#90A3BF]">Max. $100.00</p>
          </div>
        </div>
        <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col gap-5 w-full md:w-4/5 lg:w-1/3" >
          <div className="relative">
            <div
              className="h-[50vh] absolute inset-0 -z-10 bg-cover bg-center"
              style={{ backgroundImage: 'url("/images/wallpaper1.png")' }}
            />
            <div className="relative z-10">
              <div className="h-[60vh] w-[90vw] md:[30vw] p-4 rounded-lg flex items-start justify-center flex-col text-white">
                <div className="text-3xl ">
                  Sports car with the best design and acceleration
                </div>
                <div className="text-lg w-[90vw] md:[20vw] pt-4">
                  Safety and comfort while driving a futuristic and elegant sports car
                </div>
                <div className="flex justify-center items-center">

                  <img src={src as string} alt="Car" width={300} height={300} />
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
      <img
        className="rounded-lg"
        src={src as string}
        alt="Car"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
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
        <div className="w-full lg:w-2/6  px-16 h-[55vh] bg-white">
          <div className="flex flex-col gap-y-6">
            <div>
              <h1 className="text-3xl font-bold">{name}</h1>
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
              <div className="flex w-1/2  gap-8">
                <span className="text-[#90A3BF]">TypeCar</span> <span className="text-[#596780]">{type}</span>
              </div>
              <div className="flex w-1/2  gap-8">
                <span className="text-[#90A3BF]">Capacity</span> <span className="text-[#596780]">{peopleCapacity}</span>
              </div>
              <div className="flex w-1/2  gap-8">
                <span className="text-[#90A3BF]">Steering </span> <span className="text-[#596780]">Manual</span>
              </div>
              <div className="flex w-1/2  gap-8">
                <span className="text-[#90A3BF]">Gasoline</span> <span className="text-[#596780]">{capacity}</span>
              </div>
            </div>
          </div>
          <div className="py-10 flex items-center justify-around">
            <div className="">
            <span className='font-bold text-2xl '>$</span>< span className='font-bold text-2xl'>{price}</span><span>day</span>
            </div>
            <div>
            <Link href={`/payment?${paymentQuery}`}>
            <button   onClick={() => console.log("Button Clicked!")} className="bg-[#3563E9] cursor-pointer text-white rounded-lg p-4 py-2">Pay Now</button>
            </Link>
            </div>
          </div>
        </div>
        </div>
          <ForthMain />
          <FifthMain />
        </div>
        </div>

    </>
  );
};
const RentCarWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RentCar />
  </Suspense>
);

export default RentCarWithSuspense;
