import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="card shadow-xl">
            <div className="card-body">
                <p><cite><q>{userReview}</q></cite></p>
                <div className="flex items-center mt-6 gap-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;