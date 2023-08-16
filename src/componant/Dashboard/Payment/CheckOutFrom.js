import { CardElement, useCartElement, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOutFrom = () => {
    const stripe = useStripe();
    const elements = useCartElement();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    if (!stripe || !elements) {
        return;
    };

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }


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
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutFrom;