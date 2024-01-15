/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../assets/a.jpg';
import image1 from '../assets/Product-Flyer-1.jpg'

const About = () => {
    return (
        <div className='px-12 mx-12'>
            <div className='flex space-x-4 m-4'>
                <div className='flex-none w-1/2'>
                    <img src={image} alt="Me" className='w-4/6 h-auto mx-auto mt-16' />
                </div>
                <div className='flex flex-col flex-grow'>
                    <div>
                        <h3 className="text-5xl font-bold mb-4">Our Core</h3>
                        <p className="mb-4">Dzata Cement Ltd is the only 100% Ghanaian-owned cement company.
                            Our core business is the production and distribution of high-grade bagged and bulk cement.
                            We also aim ultimately to enter into the downstream market of ready-mixed concrete and other
                            cement derivative products and services required to power the country’s infrastructural drive and economic growth.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold mb-4">Our Vision</h3>
                        <p className="mb-4">Our vision is to shape the construction environment in Ghana through the consistent provision,
                            supply, and distribution of high-grade Portland cement and ultimately to become the number one cement manufacturer,
                            supplier, and distributor in Ghana by 2030. In accomplishing this goal, we operate by the following principles:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Teamwork: Marrying decision-making with strategies</li>
                            <li>Open-Mindedness: Developing a learning environment that engenders and encourages
                                openness to changes in the industry to develop indigenous strategies toward our end goal</li>
                            <li>Customer Focus: Establishing meaningful connections with customers to better meet their needs</li>
                            <li>Ethicality: Making ethical dealings the corporate norm to foster trust and future business opportunities</li>
                            <li>Responsibility: Creating an exemplary social working environment that ensures that employees at all levels
                                take responsibility for all business operations and are accountable for their successes and setbacks</li>
                            <li>Professionalism: Improving professionalism and collective performance in a manner that continually guarantees
                                product quality, supply, volume, safety, sound environmental practices, and cost-effectiveness,
                                while incentivizing employees to aim at peak performance</li>
                        </ul>
                    </div>
                </div>
            </div>
           <div className='flex justify-center'>
                <button className='px-4 py-2 bg-orange-400 text-white rounded-md my-4'>Read More</button>
           </div>

           <div className='mt-16 mb-28'>
                <img src={image1} alt="Me" className='w-full h-auto' />
           </div>
        </div>
    );
}

export default About;
