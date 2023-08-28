import React from 'react';
import img1 from '../../../assets/images/cavity.png';
import img2 from '../../../assets/images/fluoride.png';
import img3 from '../../../assets/images/whitening.png';
import img4 from '../../../assets/images/child.png';
import img5 from '../../../assets/images/cos.png';
import img6 from '../../../assets/images/oral1.jpg';
import './Service.css'

const Service = () => {

  const services = [
    {
      "_id": 1,
      "name": "Teeth Orthodontics",
      'img': img1,
    },
    {
      "_id": 2,
      "name": "Cosmetic Dentistry",
      'img': img5,
    },
    {
      "_id": 3,
      "name": "Teeth Cleaning",
      'img': img2,
    },
    {
      "_id": 4,
      "name": "Cavity Protection",
      'img': img3,
    },
    {
      "_id": 5,
      "name": "Pediatric Dental",
      'img': img4,
    },
    {
      "_id": 6,
      "name": "Oral Surgery",
      'img': img6,
    }
  ]

  return (
    <div className='px-12 pt-12 pb-1'>
      <h2 className='text-center capitalize text-2xl font-serif text-blue-900 font-semibold'>services that you take</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-11 lg:px-40 px-16 my-16'>
        {
          services.map(service =>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className='service hero hero-content flex flex-col bg-gradient-to-tr from-green-200 to-gray-500 rounded-md p-8'>
              <img className='w-24 h-24 bg-white rounded-lg p-3' src={service?.img} alt="" />
              <h2 className='text-xl font-serif font-medium'>{service?.name}</h2>
            </div>

          )
        }
      </div>
    </div>
  );
};

export default Service;