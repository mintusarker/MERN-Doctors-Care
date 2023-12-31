import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom';

const Payment = () => {
    const booking = useLoaderData();

    const navigation = useNavigation();

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

    if (navigation.state === 'loading'){
        return  <span className="loading loading-bars loading-xs"></span>
        
    }

        return (
            <div className='p-5'>
                <p className='text-2xl text-success font-semibold mb-2'>Payment for {booking.treatment}</p>
                <p className='text-black'>Please pay <strong>{booking?.price}$</strong>
                    for your appointment on {booking?.appointmentDate} at {booking?.slot} </p>


                <div className='w-96 mt-5'>
                    <Elements stripe={stripePromise}>
                        <CheckOutFrom
                            booking={booking}
                        ></CheckOutFrom>
                    </Elements>
                </div>

            </div>
        );
};

export default Payment;