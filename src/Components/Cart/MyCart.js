
import React, {  useState } from 'react';


const MyCart = (props,refetch) => {
    const { name, price, img ,_id} = props.cart
    const [quantity, setQuantity] = useState(1);

    const plusButton = () => {
        setQuantity(quantity => quantity + 1);


    }
    const minuseButton = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1);
        }

    }
    const handleDelete = (id) => {
        const proceed = window.confirm('are you want to delete this product?')
        if (proceed) {
            console.log('deleing id', id)
            const url = `http://localhost:8000/cart/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {   
                        console.log('deleted')
                       
                    }
                       refetch();
                })
        }
    }


    return (
        <div >
            <div className='w-3/5'>
                <div class="ms-8 mb-2 py-8 px-8 max-w-lg mt-4 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={img} alt="/" />
                    <div class="text-center space-y-2 sm:text-left">
                        <div class="space-y-0.5">
                            <p class="text-lg text-black font-semibold">
                                {name}
                            </p>

                        </div>
                        <p className='font-bold  text-black'>price :${quantity * price}</p>
                    </div>
                    <h1 className='flex font-bold'> <button onClick={() => plusButton()} className='font-bold ms-4'>+</button> <p className='ms-3 font-bold text-black'>{quantity}</p> <button onClick={() => minuseButton()} className='ms-3 font-bold'>-</button></h1>
                    <button onClick={() => handleDelete(_id)} className='text-warning'>delete</button>

                </div>
                <div>


                </div>


            </div>
        </div>
    );
};

export default MyCart;