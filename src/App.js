
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/shared/Navbar';
import Home from './Components/Home/Home';
import Rating from './Components/rating/Rating';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/aboutUs/AboutUs';
import Login from './Components/Login/Login';
import SingUp from './Components/Login/SingUp';
import RequireAuth from './Components/Required/Requird';
import BuyProduct from './Components/Cart/BuyProduct';
import { useState } from 'react';


function App() {
  const [buyProduct, setBuyProduct] = useState(null)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/review' element={<RequireAuth><Rating></Rating></RequireAuth>} ></Route>
        <Route path='/cart' element={<RequireAuth><Cart 
        setBuyProduct={setBuyProduct} 
        buyProduct={buyProduct} 
       ></Cart>
        </RequireAuth>} >

        </Route>

        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/about' element={<AboutUs></AboutUs>} ></Route>
        <Route path='/Login' element={<Login></Login>} ></Route>
        <Route path='/singUp' element={<SingUp></SingUp>} ></Route>
        <Route path='/buy' element={<BuyProduct 
        setBuyProduct={setBuyProduct} buyProduct={buyProduct}
        
        ></BuyProduct>} ></Route>
        
      </Routes>
      


    </div>
  );
}

export default App;
