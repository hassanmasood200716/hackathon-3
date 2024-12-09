import React from 'react'
import Link from "next/link";



interface CardzProps {
    name: string;
    type: string;
    src: string;
    capicity: string;
    pplecap: string;
    price: string;
}


const Cardz = (props: CardzProps) => {

    return (
        <div className='w-full md:w-4/5 my-10 bg-[#FFFFFF] flex flex-col justify-center'>
            <div className='flex items-start justify-around p-4 '>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-xl'>{props.name}</h1>
                    <h2 className='text-[#90A3BF]'>{props.type}</h2>
                </div>
                <span>
                    <i className="ri-heart-line text-lg"></i>
                </span>
            </div>
            <div className='p-6 flex justify-center items-center h-[30vh]'>
                <img className="" src={props.src} alt='carimg' width={250} height={250} />
            </div>
            <div className='flex justify-center items-center gap-4'>
                <span className='flex gap-1 text-lg text-[#90A3BF]'>
                    <i className="ri-gas-station-line"></i>
                    {props.capicity}
                </span>
                <span className='flex gap-1 text-lg text-[#90A3BF]'>
                    <i className="ri-steering-line"></i>
                    manual
                </span>
                <span className='flex gap-1 text-lg text-[#90A3BF]'>
                    <i className="ri-user-line"></i>
                    <span>{props.pplecap}</span> people

                </span>
            </div>
            <div className='flex items-center justify-around py-6'>
                <div>
                    <span className='font-bold text-2xl '>$</span>< span className='font-bold text-2xl'>{props.price}</span><span>day</span>
                </div>
                <Link
        href={{
          pathname:  "/rentcar",  // The path to rentcar
          query: {  // Passing the query params to rentcar
            name: props.name,
            type: props.type,
            capacity: props.capicity,
            peopleCapacity: props.pplecap,
            price: props.price,
            src: props.src,
          },
        }} >
               <button  className="bg-[#3563E9] text-white rounded-lg p-4 py-2">Rent Now</button>
                </Link>
            </div>

        </div>
    )
}

const FifthMain = () => {
  return (
    <>
    <div className='flex lg:flex-col  items-start justify-center'> 
    <div className='grid grid-cols-1 justify-items-center lg:grid-cols-3 w-4/6 '>
                    <Cardz type="sports" name="Koenigsegg" src="/images/car1.png" capicity='90L' pplecap="2" price="99" />
                    <Cardz type="sports" name="Nissan GT-R" src="/images/car2.png" capicity='80L' pplecap="2" price="80" />
                    <Cardz type="sedan" name="Rolls - Royce" src="/images/car3.png" capicity='70L' pplecap="4" price="96" />
                    </div>
                    <div  className='hidden lg:grid grid-cols-3 w-4/6'>
                    <Cardz type="SUv" name="All New Rush" src="/images/car4.png" capicity='70L' pplecap="6" price="72" />
                    <Cardz type="SUV" name="CR - V" src="/images/car5.png" capicity='80L' pplecap="6" price="80" />
                    <Cardz type="SUV" name="All New Terios" src="/images/car6.png" capicity='90L' pplecap="6" price="74" />
                    </div>
                    
    </div>
    </>
  )
}

export default FifthMain
