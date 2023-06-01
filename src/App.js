
import {  Routes ,Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/shared/Footer';
import Navbar from './Components/shared/Navbar';
import Home from './Components/Home/Home';
import Rating from './Components/rating/Rating';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/aboutUs/AboutUs';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/rating' element={<Rating></Rating>} ></Route>
        <Route path='/cart' element={<Cart></Cart>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/aboutUs' element={<AboutUs></AboutUs>} ></Route>
        <Route path='/Login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
