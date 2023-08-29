import React from 'react';
import image from '../../../assets/images/s1.png'
import appointment from '../../../assets/images/appointment.png'
import { Link } from 'react-router-dom';


const Poster = () => {
    return (
        <section className='mt-28' style={{ background: `url(${appointment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={image} className="hidden md:block lg:w-1/2 rounded-lg" />
                    <div className='text-white'>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-lg text-justify">Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest. Find your doctor easily with a minimum of effort. We've kept everything organised for you. Visit the doctor, take the service based on your appointment. Get back to good health and happiness.</p>
                        <Link to='./appointment'><button className='btn bg-white border-none text-lg rounded-sm btn-md font-bold'>Appointment</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Poster;