import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import axios from 'axios';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51NaP9YIRxjIz7EfmkiYkxM8ok02r3sC53xfpBGZEriEFlW7QGdqG7Awy0G3OrXmpcYP57isPxKp7HwoZlnIHAxps00XUQ814a4')
    // const {  name, totalPrice } = orders
    const [user] = useAuthState(auth);
    const { id } = useParams();
    /*  const { data: aloneData, isLoading, refetch } = useQuery(['orders'], () =>
     fetch(`http://localhost:8000/order${id}`).then((res) => res.json())
   ); */
    const [aloneData, setAlonData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/order/${id}`)
            .then(response => {
                // Handle the response data
                setAlonData(response.data);
            })
            .catch(error => {
                // Handle any errors
                console.error('Error:', error);
            });
    }, [id]);
    console.log(id, aloneData)
    return (
        <div>

            <div class=" grid gap-8 grid-col-1 justify-center ">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body grid justify-center">
                        <p className='text-success'>Hello, {user.displayName}</p>
                        <h2 class="card-title text-center">Pay for <span className='text-sm text-cyan-400'>{aloneData.name}</span></h2>


                        <h1 className='text-secondary'>Please Pay <strong className='text-info'>${aloneData.totalPrice}</strong></h1>

                    </div>
                </div>
                <div className='card w-96 bg-white shadow-xl'>
                    <div className='card card-body'>
                        <Elements stripe={stripePromise} >
                            <CheckOutForm
                                aloneData={aloneData}
                            />
                        </Elements>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Payment;