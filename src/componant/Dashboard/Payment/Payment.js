import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <p className='text-2xl text-success font-semibold p-5'>Payment</p>
        </div>
    );
};

export default Payment;