import React from 'react';
import './Banner.css';
import img1 from '../../../assets/images/img70.avif';
import img2 from '../../../assets/images/img79.jpg';
import img3 from '../../../assets/images/medicc.jpg';
import { GrCheckmark } from "react-icons/gr";

const Banner = () => {
    return (
        <div className='lg:pb-5'>

            <div style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className='banner-banner flex justify-center items-center'>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className='text-center text-white bg-slate-700 bg-opacity-40 p-8 rounded'>
                        <h2 className='text-3xl mb-3 leading-8'>CARING FOR LIFE</h2>
                        <p className='text-lg'>Leading the way in Medical Excellence</p>
                    </div>
                </div>

            </div>

            <div className='my-16 pt-10 lg:mx-52 md:mx-52 sm:mx-12 w-auto gap-28 grid lg:grid-cols-2 md:grid-cols-1 justify-center items-center'>
                <div className=''>
                    <div className='w-[400px] relative'>
                        <img className='h-[350px] rounded-md' src={img1} alt="" />
                    </div>
                    <div className='absolute translate-x-[220px] -translate-y-48'>
                        <img className='w-64 h-60 rounded-md' src={img2} alt="" />
                    </div>
                </div>

                <div className='justify-center items-center '>
                    <div className='pb-9 text-3xl text-teal-900 font-bold capitalize'>
                        <i>We are committed to your health</i>
                    </div>
                    <div className='text-lg flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='text-lg flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='flex text-lg justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className=' text-lg flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;