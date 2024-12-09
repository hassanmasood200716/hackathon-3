"use client"
import React from 'react'

import { useSearchParams } from 'next/navigation';

const payment = () => {


    const searchParams = useSearchParams();

    const name = searchParams.get("name");
    const type = searchParams.get("type");
    const capacity = searchParams.get("capacity");
    const peopleCapacity = searchParams.get("peopleCapacity");
    const price = searchParams.get("price");
    const src = searchParams.get("src");

    return (
        <div className=' bg-[#ebedf0] flex flex-col-reverse lg:flex-row  justify-center'>
            <div className='p-0 lg:p-10'>
                <div className=' bg-white w-full lg:w-[40vw] rounded-lg p-10' >
                    <div>
                        <h1 className='font-bold '>Billing Info</h1>
                        <p className='text-[#90A3BF]'>Please enter your billing info</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 p-6 gap-5'>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Name</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Your name' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Address</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Address' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Phone Number</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Phone Number' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Town/city</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Town or city' />
                        </div>
                    </div>
                </div>


                <div className=' bg-white w-full lg:w-[40vw] rounded-lg p-10' >
                    <div>
                        <label className="flex items-center">
                            <input type="radio" name="option" value="pickup" className="form-radio text-blue-600 h-5 w-5" />
                            <span className="ml-2 text-gray-700 py-4 font-bold">Pick Up</span>
                        </label>
                        <p className='text-[#90A3BF]'>Please select your rental date</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 p-6 gap-5'>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Location</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Select your City' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Date</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Select Your Date' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Time</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Select your time' />
                        </div>
                    </div>
                </div>

                <div className=' bg-white w-full lg:w-[40vw] rounded-lg p-10' >
                    <div>
                        <label className="flex items-center">
                            <input type="radio" name="option" value="pickup" className="form-radio text-blue-600 h-5 w-5" />
                            <span className="ml-2 text-gray-700 py-4 font-bold">Drop-OFF</span>
                        </label>
                        <p className='text-[#90A3BF]'>Please select your rental date</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 p-6 gap-5'>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Location</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Select your City' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Date</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Select Your Date' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Time</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Select your time' />
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full  lg:w-[40vw] rounded-lg p-10' >
                    <div>
                        <label className="flex items-center">
                            <input type="radio" name="option" value="pickup" className="form-radio text-blue-600 h-5 w-5" />
                            <span className="ml-2 text-gray-700 py-4 font-bold">Credit Card</span>
                        </label>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 p-6 gap-5'>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Card Number</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Card number' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Expration Date</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='DD / MM / YY' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>Card Holder</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='Card Holder' />
                        </div>
                        <div className='py-4'>
                            <span>
                                <h1 className='py-2 font-bold'>CVC</h1>
                            </span>
                            <input className='bg-[#dee0e4] placeholder-black  rounded-lg px-4' type="text" placeholder='CVC' />
                        </div>
                        <button className="bg-[#3563E9] text-white rounded-lg p-4 py-2">Rent Now</button>
                    </div>
                </div>



            </div>
            <div className='w-full lg:w-[35vw] h-[75vh]  bg-white m-0 lg:m-10 rounded-xl'>
                <div>
                    <div className='p-6' >
                        <h1 className='font-bold text-xl '>
                            Rental Summary
                        </h1>
                        <p className='py-2'>
                            Prices change depending on the length of the rental and the price of your rental car.
                        </p>
                    </div>
                    <div className='flex'>
                        <div className='p-6 '>
                            <div className="relative  block  h-[15vh] w-[30vw] lg:w-[15vw]">
                                <div
                                    className="absolute inset-0 rounded-lg bg-cover bg-center"
                                    style={{ backgroundImage: 'url("/images/wallpaper2.jpg")' }}
                                />
                                <div className="relative z-10 h-full w-full flex items-center justify-center">
                                    <img
                                        className="rounded-lg "
                                        src={src || ""}
                                        alt="car"
                                        style={{ width: "80%", height: "80%", objectFit: "contain" }}

                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-6'>
                            <h1 className='font-bold text-2xl underline-offset-5'>{name}</h1>
                            <p>
                                ⭐⭐⭐⭐ 440+ reviews
                            </p>
                        </div>
                    </div>
                    <div className='h-0.5 bg-[#7e828666] w-[95%]'></div>
                    <div className='flex justify-around font-bold text-xl py-4'>
                        <span>
                            Sub Total
                        </span>
                        <span>
                            ${price}
                        </span>
                    </div>
                    <div className='flex justify-around font-bold text-xl py-2'>
                        <span>
                            Tax
                        </span>
                        <span>
                            $0
                        </span>
                    </div>
                    <div className='flex justify-center items-center py-4'>
                        <input type="text " placeholder='Apply promo code' className='py-2 text-black px-16 bg-[#dee0e4] rounded-lg' />
                    </div>
                    <div className='flex justify-around lg:justify-between items-center'>
                        <div className='flex flex-col'>
                            <span className='font-bold text-2xl '>Total Rental Price</span>
                            <span>Overall price and includes rental discount</span>
                        </div>
                        <div className='font-bold text-3xl'>
                            ${price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default payment
