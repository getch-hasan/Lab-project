import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Order = ({ order, refetch }) => {

    const { name, img, totalPrice, quantity, address, _id, paid } = order




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
                    <button className="btn btn-pill btn-warning">cencel</button>
                    {
                        paid==='true'?  <p>paid</p>:<Link to={`/payment/${_id}`}><button className='btn btn-info'>pay</button></Link>

                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Order;