import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Payment = ({ orders,setOrder}) => {
    //const {  name, price } = order
    const [user] = useAuthState(auth);
    console.log(user,orders)
    return (
        <div>
            <div class=" grid gap-8 grid-col-1 justify-center ">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p className='text-success'>Hello {user.displayName}</p>
                        <h2 class="card-title">Pay for {orders.name}</h2>


                        <h1 className='text-secondary'>Please Pay ${orders.totalPrice}</h1>

                    </div>
                </div>
                <div className='card w-96 bg-white shadow-xl'>
                    <div className='card card-body'>
                        {/* <Elements stripe={stripePromise} >
                            <CheckoutForm
                                appointment={appointment}
                            />
                        </Elements> */}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Payment;