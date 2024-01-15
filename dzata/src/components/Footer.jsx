/* eslint-disable no-unused-vars */
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../assets/logo-2@2x.png'

const Footer = () => {
    return (
        <footer className="bg-slate-100 text-black py-8 h-full flex justify-between ">
            <div className=" flex justify-between mx-auto flex-wrap px-28">
                
                <div className=" flex flex-col  md:w-1/4 mb-4 md:mb-0">
                
                    <img src={logo} alt="Logo" className="object-contain" />
                </div>

              
                <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0 pl-40">
                    <h1 className='font-bold text-xl'>Quick Links</h1>
                    <ul className="flex flex-wrap flex-col">
                        <li className="w-full md:w-1/2 mb-2 md:mb-0"><a href="#">Home</a></li>
                        <li className="w-full md:w-1/2 mb-2 md:mb-0"><a href="#">The Company</a></li>
                        <li className="w-full md:w-1/2 mb-2 md:mb-0"><a href="#">Insights and Publications</a></li>
                        <li className="w-full md:w-1/2 mb-2 md:mb-0"><a href="#">Sustainability</a></li>
                        <li className="w-full"><a href="#">Contact Us</a></li>
                    </ul>
                </div>

               
                <div className="flex flex-col w-full md:w-1/4">
                    <div>
                        <h1 className='font-bold text-xl'>Office</h1>
                    </div>
                    <div>
                        <h4>Tema Harbour Enclave</h4>
                        <h4>Opposite APM Terminal</h4>
                        <h4>Tema. Ghana</h4>
                    </div>
                    <div className='flex'>
                        <ul className="flex justify-end space-x-4">
                            <li><a href="#" className="text-black"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#" className="text-black"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="text-black"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
