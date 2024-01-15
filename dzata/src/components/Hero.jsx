/* eslint-disable no-unused-vars */
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import logo2 from '../assets/logo2-@2x.png'

const Hero = () => {
    return (
        <div className='bg-gray-600'>
            <div className='flex flex-row justify-between bg-gray-700 py-4'>
                <div>
                    <p className='text-white px-28'>+233 55 155 6888 | +233 55 155 7888 | +233 55 155 9888</p>
                </div>

                <div className='flex pr-36 '>
                    <ul className="flex justify-end space-x-4">
                        <li><a href="#" className="text-white pr-4 mt-2"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#" className="text-white pr-4 mt-2"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="text-white pr-4 mt-2"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                <div className=" flex w-full md:w-1/4 mb-4 md:mb-0">

                    <img src={logo2} alt="Logo" className="px-28 w-50 h-50 object-contain" />
                </div>
                <div className='text-white space-y-2 py-8 pr-28'>
                    <a href='#' className="mr-6">Home</a>
                    <a href='#' className="mr-6">Products</a>
                    <a href='#' className="mr-6">Partner</a>
                    <a href='#' className="mr-6">Quality</a>
                    <a href='#' className="mr-6">Sustainability</a>
                    <a href='#' className="mr-6">Contact Us</a>
                    <i className="fas fa-search fa-lg cursor-pointer mr-6"></i>
                    <i className="fas fa-bars fa-lg cursor-pointer mr-6"></i>
                </div>
            </div>
<hr className='h-5 mx-28'></hr>

            <div className='text-center text-white my-32 pb-40'>
                <h1 className='font-bold text-6xl '>BUILDING FOR</h1>
                <h1 className='font-bold text-6xl '>GENERATIONS</h1>
            </div>
        </div>
    )
}

export default Hero
