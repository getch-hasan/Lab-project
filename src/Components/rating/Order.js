import React from 'react';

const Order = (props) => {
    const { name, img, totalPrice, quantity, address, phone } = props.order


    return (
        <div class="card card-side max-w-md bg-base-200 mb-5 shadow-xl">
            <div className='max-w-[50%] flex items-center'>
                <figure><img src={img} alt="Movie"  className='rounded-full' /></figure>
            </div>
            <div class="card-body">
                <h2 class="">{name}</h2>

                <h1 className=''>Location: <span>{address}</span></h1>
                <p></p>
                <p>Quantity :{quantity}</p>
                <p>Total Price : <span className='font-bold'>${totalPrice}</span> </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-warning">cencel</button>
                </div>
            </div>
        </div>
    );
};

export default Order;