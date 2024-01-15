/* eslint-disable no-unused-vars */
import React from 'react';
import About from './About';
import Metrics from './Metrics';
import Blog from './blog';
import Footer from './footer';
import Hero from './hero';
import Navbar from './navbar';

const Home = () => {

    return (
        <div className=''>
            {/* <Navbar  /> */}
            <Hero />
            <About />
            <Metrics />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
