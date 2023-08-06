import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const BuyProduct = ({ buyProduct }) => {
    const { name, img,  _id, price } = buyProduct
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
            email: user?.email,
            address: address,
            phone: phone,
            quantity: quantity


        }
        console.log(order)
       

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
            const url = `http://localhost:8000/cart/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.deletedCount);
                    if (data.deletedCount > 0) {
                        toast(` the ${name} is deleted`);
                        
                    } else {
                        toast('not deleted');
                    }
                });
         
            nevigate('/cart')




    }

    return (
        <div className=''>

            <div className="hero min-h-screen mt-2 mb-4  bg-base-200">
                <div className=" bg-base-100 rounded-lg ">
                    <img src={img} className="max-w-xs rounded-lg shadow-2xl" />

                    <h1 className="text-xl mt-2 font-bold">{name}</h1>
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
                    <p className="py-6 font-bold text-lg">Total Price :${price * quantity}</p>
                    <div className='flex justify-between items-center' ><h1 className='flex ms-2 font-bold text-center'> Quantity
                        <button onClick={minusButton} className='ms-3 font-bold'>
                            -
                        </button>
                        <p className='ms-3 font-bold text-lg text-secondary'>{quantity}</p>
                        <button onClick={plusButton} className='font-bold ms-4'>
                            +
                        </button>
                    </h1><button onClick={() => handelOrder()}
                     disabled={phone.length < 10 || address.length < 10}
                     className="btn btn-primary m-2"

                    >order</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default BuyProduct;