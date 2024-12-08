import React from 'react'
import 'remixicon/fonts/remixicon.css';

const SecondMain = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center bg-[#F6F7F9]'>
            <div className=' w-1/2.5 p-4 bg-white'>
                <div className=''>
                    <label className="flex items-center">
                        <input type="radio" name="option" value="pickup" className="form-radio text-blue-600 h-5 w-5" />
                        <span className="ml-2 text-gray-700 py-4 font-bold">Pickup</span>
                    </label>
                </div>
                <div className='flex '>
                    <div className='pr-6'>
                        <h2 className='font-bold p-2'>Loactions</h2>
                        <div className='flex gap-2'>
                            <p className='text-[#90A3BF]'>
                                Select your city
                            </p>
                            <span>
                                <i className="ri-arrow-down-s-line"></i>
                            </span>
                        </div>
                    </div>
                    <div className='pr-6'>
                        <h2 className='font-bold p-2'>Date</h2>
                        <div className='flex gap-2'>
                            <p className='text-[#90A3BF]'>
                                Select your date
                            </p>
                            <span>
                                <i className="ri-arrow-down-s-line"></i>
                            </span>
                        </div>
                    </div>
                    <div className='px-4'>
                        <h2 className='font-bold p-2'>Time</h2>
                        <div className='flex gap-2'>
                            <p className='text-[#90A3BF]'>
                                Select your time
                            </p>
                            <span>
                                <i className="ri-arrow-down-s-line"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div className='1/5'>
                <button className='bg-[#3563E9] p-4 px-8 text-2xl rounded-lg text-white '>

                    <i className="ri-arrow-up-down-line"></i>
                </button>
            </div>

            <div className='w-1/2.5 p-4 bg-white'>
                <div className=''>
                    <label className="flex items-center">
                        <input type="radio" name="option" value="pickup" className="form-radio text-blue-600 h-5 w-5" />
                        <span className="ml-2 font-bold text-gray-700 py-4">Drop-of</span>
                    </label>
                </div>
                <div className='flex '>
                    <div className='pr-6'>
                        <h2 className='font-bold p-2'>Loactions</h2>
                        <div className='flex gap-2'>
                            <p className='text-[#90A3BF]'>
                                Select your city
                            </p>
                            <span>
                                <i className="ri-arrow-down-s-line"></i>
                            </span>
                        </div>
                    </div>
                    <div className='pr-6'>
                        <h2 className='font-bold p-2'>Date</h2>
                        <div className='flex gap-2'>
                            <p className='text-[#90A3BF]'>
                                Select your date
                            </p>
                            <span>
                                <i className="ri-arrow-down-s-line"></i>
                            </span>
                        </div>
                    </div>
                    <div className='px-4'>
                        <h2 className='font-bold p-2'>Time</h2>
                        <div className='flex gap-2'>
                            <p className='text-[#90A3BF]'>
                                Select your time
                            </p>
                            <span>
                                <i className="ri-arrow-down-s-line"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

        </div>
    )
}

export default SecondMain
