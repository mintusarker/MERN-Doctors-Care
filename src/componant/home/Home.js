import React from 'react';
import Banner from './Banner/Banner';
import Testimonials from './Testimonials/Testimonials';
import Poster from './Poster/Poster';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Poster></Poster>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;