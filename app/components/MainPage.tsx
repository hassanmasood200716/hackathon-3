import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MainPage = () => {
    return (
        <div className='flex h-[60vh] lg:h-[50vh] xl:h-[60vh]  bg-[#F6F7F9]'>
            <div className="relative w-full lg:w-1/2 m-8 mr-8">
                <div className="h-[50vh] lg:h-[40vh] xl:h-[50vh] w-full rounded-xl bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/wallpaper.jpeg')" }}>
                </div>
                <div className="absolute top-0 left-0 w-full h-full md:flex">
                    <div className=' flex justify-start items-start flex-col p-5 md:p-10'>
                        <h1 className="text-white text-2xl font-bold py-2">
                            The Best Platform for Car Rental
                        </h1>
                        <p className='py-4 text-white'>
                            Ease of doing a car rental safely and reliably. Of course at a low price.
                        </p>
                        <Link href={"/detailcar"}>
                        <button  className='bg-[#3563E9] text-white rounded-lg p-4 py-2'>Rental Car</button>
                        </Link>
                    </div>
                        <div className='flex justify-end md:items-center xl:items-end md:h-[50vh]'>
                            <Image src="/images/car1.png" alt='carimage' width={700} height={700} />
                        </div>
                </div>
            </div>
            <div className="relative hidden lg:block w-1/2 m-8 mr-8">
                <div className="h-[50vh] lg:h-[40vh] xl:h-[50vh]  w-full rounded-xl bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/wallpaper1.png')" }}>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className=' flex justify-start items-start flex-col p-10'>
                        <h1 className="text-white text-2xl font-bold py-2">
                            The Best Platform for Car Rental
                        </h1>
                        <p className='py-4 text-white'>
                            Ease of doing a car rental safely and reliably. Of course at a low price.
                        </p>
                        <Link href={"/detailcar"}>
                        <button className='bg-[#3563E9] text-white rounded-lg p-4 py-2'>Rental Car</button>
                        </Link>
                    </div>
                        <div className='flex justify-center md:items-center xl:items-end h-[55vh]'>
                            <Image className='' src="/images/car2.png" alt='carimage' width={600} height={400} />
                        </div>
                </div>
            </div>

        </div>
    )
}

export default MainPage
