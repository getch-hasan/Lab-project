import React, { useState, } from 'react';
import { useNavigate } from 'react-router';

import { toast } from 'react-toastify';






const MyCart = ({ cart, buyProduct, setBuyProduct, refetch }) => {
    const { name, price, img, _id, } = cart;
    const navigate = useNavigate()


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if (proceed) {
            console.log('deleting id', id);
            const url = `http://localhost:8000/cart/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.deletedCount);
                    if (data.deletedCount > 0) {
                        toast.success(` the ${name} is deleted`);
                        refetch(id);
                    } else {
                        toast.error('not deleted');
                    }
                });
        }
    };

    const truncateName = (name, maxLength) => {
        if (name.length > maxLength) {
            return name.substring(0, maxLength) + '...';
        }
        return name;
    };
    const handelBuy = () => {


        setBuyProduct(cart)
        console.log(buyProduct)

        navigate('/buy')


    };



    return (
        <div>
            <div className='mx-auto'>
                <div className='ms-8 mb-2 py-8 px-8 max-w-xl mt-4 bg-white flex justify-between rounded-xl md:flex md:content-between lg:flex lg:content-between shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                    <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' src={img} alt='/' />
                    <div className='text-center space-y-2 sm:text-left'>
                        <div className='space-y-0.5'>
                            <p className='text-lg text-black font-semibold'>{truncateName(name, 15)}</p>

                        </div>
                        <p className='font-bold text-black'>price:  {price}</p>

                    </div>

                    <div>
                        <button onClick={() => handleDelete(_id)} className='text-warning'>
                            delete
                        </button>
                    </div>


                    <div>
                        <button className="btn btn-primary"

                            onClick={() => handelBuy()}>Buy Now
                        </button>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default MyCart;