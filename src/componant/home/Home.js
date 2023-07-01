import React from 'react';
import Banner from './Banner/Banner';
import Testimonials from './Testimonials/Testimonials';
import Poster from './Poster/Poster';
import Service from './Service/Service';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Service></Service>
            <Poster></Poster>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;