"use client"
import React from 'react'
import 'remixicon/fonts/remixicon.css';
import Link from 'next/link';
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Form from "next/form";
import {  SearchIcon } from "@sanity/icons";

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className='flex items-center justify-between p-5'>
      <Link href={"/"}>
        <button className='text-[#3563E9] text-3xl font-bold '>MORENT</button>
      </Link>
      <Form
  action="/search"
  className="w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0 flex items-center"
>
  <input
    type="text"
    name="query"
    placeholder="Search For Products"
    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
  />
  <button
    type="submit"
    className="bg-blue-500 text-white px-3 py-2 rounded-lg ml-2 flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    aria-label="Search"
  >
    <SearchIcon className="w-6 h-6" />
  </button>
</Form>
        <div className='md:flex items-center justify-center gap-5 hidden'>
        <i  className="ri-heart-line text-lg rounded-full border border-[#C3D4E966] p-1"></i>
        <i  className="ri-notification-line text-lg rounded-full border border-[#C3D4E966] p-1"></i>
        <i  className="ri-settings-2-line text-lg rounded-full border border-[#C3D4E966] p-1"></i>

   
          <ClerkLoaded>

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="font-bold">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

          </ClerkLoaded>
        </div>
    </nav>
  )
}

export default Navbar
