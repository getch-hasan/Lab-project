import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Product = (props) => {
    const [user] = useAuthState(auth)

    const { _id, stock, name, img, price, seller, category } = props.product
    const email = user?.email
    const addToCart = () => {
        console.log('clicked')


        const cart = {
            _id: _id,
            name: name,
            price: price,
            img: img,
            stock: stock,
            email: email



        }

        fetch('http://localhost:8000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data,)
                if (data.success) {
                    toast(`added`)
                }
                else {
                    toast.error(`sorry`)
                }

            })


    }


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h1 className=" text-center">{name}</h1>
                <p>{category}</p>
                <p>{seller}</p>
                <p className='font-bold'>Price: ${price}</p>
                <p>stock :{stock}</p>

                <div className="card-actions justify-end">
                    <button onClick={() => addToCart()} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;