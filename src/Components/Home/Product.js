import React from 'react';
import { toast } from 'react-toastify';

const Product = (props) => {
    const { _id,stock, name, img, price, seller, category } = props.product
    const addToCart = () => {
        console.log('clicked')


        const cart = {
            _id: _id,
            name: name,
            price: price,
            img: img,
            stock:stock,
           
            

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
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div class="card-body">
                <h1 class=" text-center">{name}</h1>
                <p>{category}</p>
                <p>{seller}</p>
                <p className='font-bold'>Price: ${price}</p>
                <p>stock :{stock}</p>

                <div class="card-actions justify-end">
                    <button onClick={() => addToCart()} class="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;