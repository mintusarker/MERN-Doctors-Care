import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom';

const Payment = () => {
    const data = useLoaderData();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    console.log(stripePromise);

    return (
        <div className='p-5'>
            <p className='text-2xl text-success font-semibold mb-2'>Payment for {data.treatment}</p>
            <p className='text-black'>Please pay <strong>{data?.price}$</strong>
                for your appointment on {data?.appointmentDate} at {data?.slot} </p>


            <div className='w-96 mt-5'>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;