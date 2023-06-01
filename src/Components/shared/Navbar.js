import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ms-5  justify-between" >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

        </div>
        <Link className="btn btn-ghost normal-case text-xl">Baby shop</Link>
      </div>
      <div className="navbar-center hidden lg:flex me-5">
        <ul className="menu menu-horizontal px-1">
          <li  ><Link to='/'>Home</Link></li>
          <li  ><Link to='/ratting'>  Ratting </Link></li>
          <li  ><Link to='/cart'>cart</Link></li>
          <li  ><Link to='/contact'>contact</Link></li>
          <li  ><Link to='/aboutUs'>about us</Link></li>
          <li  className='ms-5'><Link to='/login'>login</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;