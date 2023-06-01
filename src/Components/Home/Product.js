import React from 'react';

const Product = (props) => {
    const { name,img,price,seller,category } = props.product
   
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div class="card-body">
                <h1 class=" text-center">{name}</h1>
                <p>{category}</p>
                <p>{seller}</p>
                <p className='font-bold'>Price: ${price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;