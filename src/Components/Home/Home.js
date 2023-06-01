import React, { useEffect, useState } from 'react';

import Product from './Product';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>

            <div className='ms-7 grid gap-4 grid-cols-3 grid-rows-3'>

                {
                    products.map(product => <Product
                        product={product} ></Product>)
                }
            </div>
        </div>
    );
};

export default Home;
