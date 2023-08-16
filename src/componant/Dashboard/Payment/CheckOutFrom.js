import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutFrom = () => {
    const [cardError, setCardError] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

  
        if (error) {
            console.log(error);
            setCardError(error.message)
        } 
        
        // else {
        //     console.log('[PaymentMethod]', paymentMethod);
        // }
    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-sm btn-success my-3' disabled={!stripe}>
                Pay
            </button>
           <div className='text-red-500 font-semibold text-lg'>
           {cardError}
           </div>
        </form>
    );
};

export default CheckOutFrom;