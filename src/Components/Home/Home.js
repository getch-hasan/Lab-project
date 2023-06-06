import React, { useEffect, useState } from 'react';

import Product from './Product';
import Footer from '../shared/Footer';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>

            <div className='ms-7  grid gap-4 lg:grid-cols-3  grid-rows-3 sm:grid-cols-1'>

                {
                    products.map(product => <Product
                        product={product} ></Product>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
