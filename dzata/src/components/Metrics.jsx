/* eslint-disable no-unused-vars */
import React from 'react'
import image2 from '../assets/mn-03.jpg'
import image3 from '../assets/mn-02-15.png'
import image4 from '../assets/logo@2x-04.jpg'
import image5 from '../assets/logo@2x-05.png'
import image6 from '../assets/3-1170x660.jpg'

const Metrics = () => {
  return (
    <div className='px-12 mx-12'>
      <div>
        <div>
            <div className='text-center'>
                      <h5 className='text-xl font-bold text-gray-400'>WE ARE RELIABLE</h5>
            </div>
                  <div className='text-center'>
                      <h3 className='text-2xl font-bold text-gray-800 mb-8'>Our Number Metrics</h3>
                  </div>  
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-row w-2/3'>
         <div className='flex flex-col'>
                      <img src={image2} alt='image' className='w-50 h-auto' />
                      <img src={image4} alt='image' className='w-50 h-auto' />
         </div>
                  <div className='flex flex-col mt-3'>
                      <img src={image3} alt='image' className='w-50 h-auto' />
                      <img src={image5} alt='image' className='w-50 h-auto' />
                  </div>
            </div>
                  <div>
                  <div className="max-w-md mx-auto my-12 bg-white rounded-md overflow-hidden shadow-md">
                      <img className="w-full h-40 object-cover" src={image6} alt="Card Image" />

                      <div className="p-12 text-center">
                          <h1 className="text-2xl font-bold text-gray-800 mb-2">We Are The Best At What We Do</h1>
                          <p className="text-gray-600">The Cement Grade produced by the plant is Ordinary Portland Cement. 
                          The plant is equipped to bag an average of 120 bags per minute from its production lines.</p>
                      </div>
                  </div>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics
