import React from 'react'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-5'>
        <div className='text-[#3563E9] text-3xl font-bold '>MORENT</div>
        <div className="relative inline-block w-full max-w-sm">
            <input
                type="text"
                placeholder="Search something here"
                className="w-full px-16 py-2 border border-[#C3D4E966] rounded-full text-base outline-none"
            />

            <i className="ri-search-line absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>

            <i className="ri-clapperboard-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>
        </div>
        <div className='md:flex items-center justify-center gap-5 hidden'>
        <i  className="ri-heart-line text-lg rounded-full border border-[#C3D4E966] p-1"></i>
        <i  className="ri-notification-line text-lg rounded-full border border-[#C3D4E966] p-1"></i>
        <i  className="ri-settings-2-line text-lg rounded-full border border-[#C3D4E966] p-1"></i>
        <Image className='rounded-full' src="/images/person.png" alt="" width={35} height={35}/>
        </div>
    </nav>
  )
}

export default Navbar
