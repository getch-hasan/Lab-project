
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/shared/Navbar';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/aboutUs/AboutUs';
import Login from './Components/Login/Login';
import SingUp from './Components/Login/SingUp';
import RequireAuth from './Components/Required/Requird';
import BuyProduct from './Components/Cart/BuyProduct';
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import AllUsers from './Components/Dashboard/AllUsers';
import AddProduct from './Components/Dashboard/AddProduct';
import MyOrder from './Components/MyOrder/MyOrder';
import Payment from './Components/MyOrder/Payment';



function App() {
  const [buyProduct, setBuyProduct] = useState(null)
  const [orders,setOrders]=useState(null)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/myOrder' element={<RequireAuth><MyOrder
        orders={orders}
        setOrders={setOrders}
        ></MyOrder></RequireAuth>} ></Route>
        <Route path='/payment' element={<RequireAuth><Payment
         orders={orders}
         setOrders={setOrders}
        ></Payment></RequireAuth>} ></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard> </RequireAuth>} >
          <Route index element={<AllUsers></AllUsers>} ></Route>
          <Route path='dashboard/addProduct' element={<AddProduct></AddProduct>} ></Route>
        </Route>

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
