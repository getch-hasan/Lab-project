import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const BuyProduct = ({ buyProduct }) => {
    const { name, img, stock, seller, category, _id, price } = buyProduct
    console.log(buyProduct)
    const [quantity, setQuantity] = useState(1);
    const [user] = useAuthState(auth)
    const nevigate = useNavigate()







    const plusButton = () => {
        setQuantity((quantity) => quantity + 1);
    };

    const minusButton = () => {
        if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
        }
    };
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handelOrder = () => {
        const order = {
            orderId: _id,
            name: name,
            totalPrice: quantity * price,
            img: img,
            email: user.email,
            address: address,
            phone: phone,
            quantity:quantity



        }
        console.log(order)
        nevigate('/cart')

        fetch('http://localhost:8000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast()
                }
                else {
                    toast.error(`sorry`)
                }


            })




    }

    return (
        <div className='mt-2'>

            <div class="hero min-h-screen  bg-base-200">
                <div class=" bg-base-100 rounded-lg ">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />

                    <h1 class="text-xl mt-2 font-bold">{name}</h1>
                    <input
                        type="text"
                        required
                        placeholder="Phone"
                        className="input bg-base-200 mt-2 input-bordered"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                    <div>
                        <textarea
                            className="bg-base-200 rounded-lg mt-2"
                            type="text"
                            name="address"
                            placeholder="Enter your address"
                            value={address}
                            onChange={handleAddressChange}
                            cols="30"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <p class="py-6 font-bold text-lg">Total Price :${price * quantity}</p>
                    <div className='flex justify-between items-center' ><h1 className='flex ms-2 font-bold text-center'> Quantity
                        <button onClick={minusButton} className='ms-3 font-bold'>
                            -
                        </button>
                        <p className='ms-3 font-bold text-lg text-secondary'>{quantity}</p>
                        <button onClick={plusButton} className='font-bold ms-4'>
                            +
                        </button>
                    </h1><button onClick={() => handelOrder()} class="btn btn-primary m-2"

                    >order</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default BuyProduct;