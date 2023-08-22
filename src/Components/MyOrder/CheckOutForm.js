import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckOutForm = ({ aloneData }) => {
    const { _id, totalPrice, email } = aloneData
    const stripe = useStripe()
    const elements = useElements()
    const [user] = useAuthState(auth)
    const [cardEror, setCardEror] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState('');
    const [transectionId, setTransectionId] = useState('')

    useEffect(() => {

        fetch('http://localhost:8000/create-payment-intent', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ totalPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)

                }
            });
    }, [totalPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }



        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardEror(error?.message || '');
        setSuccess('')
        setProcessing(true)

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardEror(intentError.message)
            setSuccess('')
            setProcessing(false)

        }
        else {
            setCardEror('')
            setSuccess("Congratulations , Your payment is successful")
            setTransectionId(paymentIntent.id)
            console.log(paymentIntent, success)
            //
             const payment = {
                 order: _id,
                 transectionId: paymentIntent.id
             }
             fetch(`http://localhost:8000/order/${_id}`, {
                 method: 'PATCH',
                 headers: {
                     "Content-Type": "application/json",
                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                 },
                 body: JSON.stringify(payment)
             }).then(res => res.json()).then(data => {
                 setProcessing(false)
             })

        }

    }

    return (
        <div>
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
                <button className='mt-8 btn btn-primary' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

        </div>
    );
};

export default CheckOutForm;