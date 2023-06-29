import React from 'react';
import './Banner.css';
import img1 from '../../../assets/images/test1.jpg';
import img2 from '../../../assets/images/test3.jpeg';
import { GrCheckmark } from "react-icons/gr";

const Banner = () => {
    return (

        // <div className='h-96 banner-banner'>
        //     {/* <div className='banner-img'>
        //     <img  className='img-travel' src={travel} alt="" />
        // </div> */}
        //     <div className='absolute top-60 flex justify-center transform -translate-y-1/2 w-full mx-auto'>
        //         <p className='text-center font-serif text-2xl'>Anyone can traveling for leisure, business, sports, family reasons, <br />romance, shopping, or recreation purposes. But in true sense, <br /> the whole World is a classic hotspot of tourism with <br /> diverse beauty and natural wonders.</p>
        //     </div>
        // </div>
        <div className='pb-36'>
            <div className='banner-banner h-96 flex justify-center items-center w-full'>
                <p>A new way to learning</p>
            </div>

            <div className='my-16 pt-10 mx-52 w-auto flex'>
                <div className='w-1/2'>
                    <div className='w-[400px] relative top-0'>
                        <img className='h-[350px]' src={img1} alt="" />
                    </div>
                    <div className='absolute translate-x-[250px] -translate-y-44'>
                        <img className='w-64 h-60' src={img2} alt="" />
                    </div>
                </div>

                <div className='w-1/2 flex flex-wrap justify-center items-center'>
                    <div className='pb-9 text-xl font-semibold'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;