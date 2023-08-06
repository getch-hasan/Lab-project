import React from 'react';

const Order = (props) => {
    const { name, img, totalPrice, quantity, address } = props.order
   


    return (
        <div className="card card-side max-w-md bg-base-200 mb-5 shadow-xl">
            <div className='max-w-[50%] flex items-center'>
                <figure><img src={img} alt="Movie" className='rounded-full' /></figure>
            </div>
            <div className="card-body">
                <h2 className="">{name}</h2>

                <h1 className=''>Location: <span>{address}</span></h1>
                <p></p>
                <p>Quantity :{quantity}</p>
                <p>Total Price : <span className='font-bold'>${totalPrice}</span> </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">cencel</button>
                </div>
            </div>
        </div>
    );
};

export default Order;