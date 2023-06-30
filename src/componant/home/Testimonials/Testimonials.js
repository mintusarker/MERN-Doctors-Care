import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testimonial from './Testimonial';


const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'Everyone was very nice, and it is nice to be treated well since you are the patient in need of help. Caring, smiling and laughing is good atmosphere for patients. I will continue to come here when my family doctor is not available. I was very well taken care of.',
            location: 'Dhaka, Bangladesh',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'Thank you very much! Everyone is so friendly and I am very thankful you are in this area to care for us when we need you. The Doctors, nurses & staff are professional and very thorough. I loved visiting and if I need their service again I know I will be welcomed.',
            location: 'California, USA',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'Felt that I got the best possible treatment and owe my life to the Doctor and Staff! I might not be alive if Doctor didn’t listen and insist I go to the Hospital and follow his diagnosis and recommended treatment! Very caring and concerned!',
            location: 'kolkata, India',
            img: people3
        },
    ]
    return (
        <section className='py-16 px-12'>
            <div className='mt-10 mb-3'>
                <div className='text-center'>
                    <h4 className="text-xl text-success">Testimonial</h4>
                    <h2 className='text-3xl font-serif'>Happy Customers</h2>
                </div>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-36'>
                {
                    reviews.map(review => <Testimonial
                        key={review._id}
                        review={review}
                    ></Testimonial>)
                }
            </div>

        </section>
    );
};

export default Testimonials;