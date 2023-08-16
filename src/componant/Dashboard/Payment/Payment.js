import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    console.log(stripePromise);

    return (
        <div className='p-5'>
            <p className='text-2xl text-success font-semibold mb-2'>Payment for {data.treatment}</p>
            <p className='text-black'>Please pay <strong>{data?.price}$</strong> for your appointment on {data?.appointmentDate} at {data?.slot} </p>
        </div>
    );
};

export default Payment;