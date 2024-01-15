/* eslint-disable no-unused-vars */
import React from 'react';
import image7 from '../assets/Ibrahim-Mahama-636x424-1.jpeg';
import image8 from '../assets/Dzata-Cement-2-754x424-1.jpeg';
import image9 from '../assets/Apeatse-explosion-6-636x424-1.jpeg';

const Blog = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h3>BLOG</h3>
                <h2 className='text-blue-700'>Latest News</h2>
            </div>
        <div className='flex justify-between mx-12  px-12 space-x-4'>
            <div className='w-1/3 pe-4 pb-8'>
                <div className="max-w-md mx-auto my-12 pb-6 bg-white rounded-md overflow-hidden shadow-md">
                    <div className='relative'>
                        <a href="https://www.dzatacement.com/?p=2683">
                            <img className="w-full h-80 object-cover" src={image7} alt="Card Image" />
                        </a>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                        <a href="https://www.dzatacement.com/?p=2683" className="block absolute top-30 left-0 right-0 bottom-0 p-4 text-start">
                            <h3 className="text-2xl font-bold text-white mb-2 hover:underline">DZATA Cement wins big at 2022 Ghana Business Standard Awards</h3>
                        </a>
                       
                    </div>
                   
                    <div className="p-5 text-start">
                        <p className="text-gray-600">Dzata Cement, an only and wholly-owned Ghanaian cement manufacturing business, wins big at the 2022 Ghana-West Africa Business Excellence Awards as the Cement Brand of The Year. The 2022 Ghana...</p>
                    </div>
                    <div>
                            <a href="https://www.dzatacement.com/?p=2683" className='px-4 ms-4 mb-4 py-2 bg-white text-black rounded-md border'>Read More</a>
                    </div>
                </div>
            </div>

            <div className='w-1/3 pe-4'>
                <div className="max-w-md mx-auto my-12 pb-6 bg-white rounded-md overflow-hidden shadow-md">
                    <div className='relative'>
                            <a href="https://www.dzatacement.com/?p=2686">
                            <img className="w-full h-80 object-cover" src={image8} alt="Card Image" />
                        </a>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                            <a href="https://www.dzatacement.com/?p=2686" className="block absolute top-30 left-0 right-0 bottom-0 p-4 text-start">
                                <h3 className="text-2xl font-bold text-white mb-2 hover:underline">The leadership of Parliament pays a familiarisation visit to Dzata Cement</h3>
                        </a>
                    </div>

                    <div className="p-5 text-start">
                            <p className="text-gray-600">The Majority Leader in Parliament, Osei Kyei Mensah-Bonsu together with the Minority Leader on Thursday, June 23 led members of the Select Committees on Trade and Industry and Works and Housing...
                            </p>
                    </div>
                    <div>
                            <a href="https://www.dzatacement.com/?p=2686" className='px-4 ms-4 mb-4 py-2 bg-white text-black rounded-md border'>Read More</a>
                    </div>
                </div>
            </div>

            <div className='w-1/3 pe-4'>
                <div className="max-w-md mx-auto my-12 pb-6 bg-white rounded-md overflow-hidden shadow-md">
                    <div className='relative'>
                            <a href="https://www.dzatacement.com/?p=2671">
                            <img className="w-full h-80 object-cover" src={image9} alt="Card Image" />
                        </a>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                            <a href="https://www.dzatacement.com/?p=2671" className="block absolute top-30 left-0 right-0 bottom-0 p-4 text-start">
                                <h3 className="text-2xl font-bold text-white mb-2 hover:underline">Apeatse explosion: Ibrahim Mahama pledges support to rebuild community</h3>
                        </a>
                    </div>

                    <div className="p-5 text-start">
                            <p className="text-gray-600">The Bogoso Community on Monday received various food items from Business magnate Ibrahim Mahama following the Apeatse explosion that left the town devastated.
                             Mr Mahama has also pledged to help...</p>
                    </div>
                    <div>
                            <a href="https://www.dzatacement.com/?p=2671" className='px-4 ms-4 mb-4 py-2 bg-white text-black rounded-md border'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Blog;
