import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white h-[100vh] md:h-[50vh]'>
            <div className='flex flex-col md:flex-row items-center justify-around h-full'>
                <div className='md:w-1/3 md:px-10 lg:px-0 w-full '>
                    <h1 className='text-[#3563E9] text-3xl text-center md:text-left font-bold py-4'>
                        MORENT
                    </h1>
                    <p className='md:text-left text-center'>
                        Our vision is to provide convenience and help increase your sales business.
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3' >
                    <div>
                        <div className='font-bold py-5 px-7'>
                            About
                        </div>
                        <div className='py-3 px-7'>How it works</div>
                        <div className='py-3 px-7'>Featured</div>
                        <div className='py-3 px-7'>Partnership</div>
                        <div className='py-3 px-7'>Bussiness Relation</div>
                    </div>
                    <div>
                        <div className='font-bold py-3 px-7'>
                            Community
                        </div>
                        <div className='py-3 px-7'>Events</div>
                        <div className='py-3 px-7'>Blog</div>
                        <div className='py-3 px-7'>Podcast</div>
                        <div className='py-3 px-7'>Invite a friend</div>
                    </div>
                    <div className=''>
                        <div className='font-bold py-3 px-7'>
                            Socials
                        </div>
                        <div className='py-3 px-7'>Discord</div>
                        <div className='py-3 px-7'>Instagram</div>
                        <div className='py-3 px-7'>Twitter</div>
                        <div className='py-3 px-7'>Facebook</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='h-0.5 w-[80vw] bg-[#13131329] '>
                <div className=' flex justify-between items-center'>
                <p className='font-bold py-10'>
                ©2022 MORENT. All rights reserved
                </p> 
                <div className='font-bold py-10'>
                    <span>Privacy & Policy</span>
                    <span>Terms & Condition</span>
                </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
