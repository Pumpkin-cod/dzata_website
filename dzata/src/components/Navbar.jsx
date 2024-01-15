/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo-2@2x.png'

const Navbar = () => {
  return (
    <div className='bg-gray-100'>
          <div className='flex flex-row justify-between'>
              <div className=" flex w-full md:w-1/4 mb-4 md:mb-0">

                  <img src={logo} alt="Logo" className="px-28 w-40 h-40 object-contain" />
              </div>
              <div className='text-black space-y-2 py-8 pr-28'>
                  <a href='#' className="mr-6">Home</a>
                  <a href='#' className="mr-6">Products</a>
                  <a href='#' className="mr-6">Partner</a>
                  <a href='#' className="mr-6">Quality</a>
                  <a href='#' className="mr-6">Sustainability</a>
                  <a href='#' className="mr-6">Contact Us</a>
                  {/* <i className="fas fa-search fa-lg cursor-pointer mr-6"></i>
                  <i className="fas fa-bars fa-lg cursor-pointer mr-6"></i> */}
              </div>
          </div>
    </div>
  )
}

export default Navbar