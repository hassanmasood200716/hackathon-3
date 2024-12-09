import React from 'react'
import 'remixicon/fonts/remixicon.css';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className='w-1/4.1 my-10 bg-[#FFFFFF] flex flex-col justify-center'>
            <div className='flex items-start justify-around p-4 '>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-2xl'>{props.name}</h1>
                    <h2 className='text-[#90A3BF]'>{props.type}</h2>
                </div>
                <span>
                    <i className="ri-heart-line text-lg"></i>
                </span>
            </div>
            <div className='p-6 flex justify-center items-center h-[30vh]'>
                <Image className="" src={props.src} alt='carimg' width={250} height={250} />
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
                        pathname: "/rentcar",  // The path to rentcar
                        query: {  // Passing the query params to rentcar
                            name: props.name,
                            type: props.type,
                            capacity: props.capicity,
                            peopleCapacity: props.pplecap,
                            price: props.price,
                            src: props.src,
                        },
                    }}
                >
                    <button className='bg-[#3563E9] text-white rounded-lg p-4 py-2'>Rent Now</button>
                </Link>
            </div>

        </div>
    )
}


const Thirdmain = () => {
    return (
        <>
            <div className='bg-[#F6F7F9]'>
                <div className='flex w-[80vw] h-[5vh] items-center justify-between mx-auto py-10'>
                    <h2>Popular Car</h2>
                    <h2 className='text-[#3563E9]'>View All</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
                    <div>
                    <Cardz type="sports" name="Koenigsegg" src="/images/car1.png" capicity='90L' pplecap="2" price="99" />
                    </div>
                    <div className='hidden md:block'> 
                    <Cardz type="sports" name="Nissan GT-R" src="/images/car2.png" capicity='80L' pplecap="2" price="80" />
                    </div>
                    <div  className='hidden md:block'>
                    <Cardz type="sedan" name="Rolls - Royce" src="/images/car3.png" capicity='70L' pplecap="4" price="96" />
                    </div>
                    <div  className='hidden md:block'>
                    <Cardz type="sports" name="Koenigsegg" src="/images/car2.png" capicity='80L' pplecap="2" price="80" />
                    </div>
                </div>
                <div className='flex w-[80vw] h-[5vh] items-center justify-between mx-auto py-10'>
                    <h2>Recomendation Car</h2>
                </div>
                {/* <div className='flex items-center justify-around mx-10 flex-wrap'> */}
                <div className='grid-cols-1 grid lg:grid-cols-2 xl:grid-cols-4'>
                    <Cardz type="SUv" name="All New Rush" src="/images/car4.png" capicity='70L' pplecap="6" price="72" />
                    <Cardz type="SUV" name="CR - V" src="/images/car5.png" capicity='80L' pplecap="6" price="80" />
                    <Cardz type="SUV" name="All New Terios" src="/images/car6.png" capicity='90L' pplecap="6" price="74" />
                    <Cardz type="SUV" name="CR - V" src="/images/car7.png" capicity='80L' pplecap="6" price="80" />
                    </div>
                    <div className='hidden xl:grid grid-cols-4'>
                    <Cardz type="sports" name="MG ZX Exclusice" src="/images/car8.png" capicity='90L' pplecap="2" price="99" />
                    <Cardz type="SUV" name="New MG ZS" src="/images/car9.png" capicity='80L' pplecap="6" price="80" />
                    <Cardz type="sedan" name="MG ZX Exclusice" src="/images/car8.png" capicity='90L' pplecap="2" price="99" />
                    <Cardz type="SUV" name="New MG ZS" src="/images/car9.png" capicity='80L' pplecap="6" price="80" />
                </div>
                <div className='flex justify-center items-center py-10'>
                    <button className='bg-[#3563E9] text-white rounded-lg p-4 py-2'>show more cars</button>
                </div>
            </div>
        </>
    )
}

export default Thirdmain
