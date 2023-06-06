import React, { useState } from 'react';
import { toast } from 'react-toastify';


const MyCart = ({ cart, setBuy, refetch }) => {
    const { name, price, img, _id } = cart;
    const [quantity, setQuantity] = useState(1);

    const plusButton = () => {
        setQuantity((quantity) => quantity + 1);
    };

    const minusButton = () => {
        if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
        }
    };

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
                    console.log(data.deletedCount)
                    if (data.deletedCount >0) {
                        toast(` the ${name} is deleted`);
                        refetch(); // Use props.refetch instead of refetch()
                    } else {
                        toast('not deleted');
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

    return (
        <div>
            <div className='mx-auto'>
                <div className='ms-8 mb-2 py-8 px-8 max-w-xl mt-4 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                    <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' src={img} alt='/' />
                    <div className='text-center space-y-2 sm:text-left'>
                        <div className='space-y-0.5'>
                            <p className='text-lg text-black font-semibold'>{truncateName(name, 12)}</p>
                        </div>
                        <p className='font-bold text-black'>price: ${quantity * price}</p>
                    </div>
                    <h1 className='flex font-bold'>

                        <button onClick={minusButton} className='ms-3 font-bold'>
                            -
                        </button>
                        <p className='ms-3 font-bold text-black'>{quantity}</p>
                        <button onClick={plusButton} className='font-bold ms-4'>
                            +
                        </button>
                    </h1>
                    <button onClick={() => handleDelete(_id)} className='text-warning'>
                        delete
                    </button>


                    <button html="my-modal" class="btn btn-primary" onClick={() => setBuy(cart)}>Buy Now</button>


                </div>
            </div>
        </div>
    );
};

export default MyCart;