import React, { useEffect, useState } from 'react';

import Product from './Product';
import Footer from '../shared/Footer';



const Home = () => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredProducts(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <span class="loading s loading-ring loading-lg"></span>

    }

    const handleSearch = (e) => {


        const filtered = products.filter((product) =>
            product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.seller.toLowerCase().includes(searchQuery.toLowerCase())


        );
        setFilteredProducts(filtered)
        setSearchQuery('')

    };



    return (
        <div>
            <div className='flex mb-5 justify-center items-center '>
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} name='search' type="text" placeholder="search here" class="input input-bordered input-info w-full max-w-xs " />
                <button onClick={() => handleSearch()} className='btn btn-primary ms-4'>Search</button>
            </div>

           

            <div className='ms-7  grid gap-4 lg:grid-cols-3  grid-rows-3 sm:grid-cols-1'>



                {

                    filteredProducts.map(product => <Product
                        product={product} ></Product>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
