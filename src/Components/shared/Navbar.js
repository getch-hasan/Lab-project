import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const menuItems = <>

    <li className='ms-3'><Link to='/'>Home        </Link></li>
    <li className='ms-3'><Link to='/cart'>Cart</Link></li>
    <li className='ms-3'><Link to='/myOrder'>My Order    </Link></li>
    <li className='ms-3'><Link to='/contact'>Contact Us </Link></li>
    <li className='ms-3'><Link to='/about'>About      </Link></li>
    {
      user ? <li>
        <div class="dropdown">
          <div tabindex="0" class="avatar btn btn-ghost">
            <div class="w-12  rounded-full">
              <img src={user?.img} />
            </div>
          </div>
          <div tabindex="0" class="dropdown-content z-[1] mt-48  card  w-40  shadow bg-primary text-primary-content">
            <div class=" me-32 ">
              <ul>
                <h1>{user?.displayName}</h1>
                <li className='text-xl'>Setting</li>
                <li className='text-xl'>Profile</li>
                <li>
                  <button onClick={async () => {
                    const success = await signOut();
                    if (success) {
                      alert('You are sign out');
                      localStorage.removeItem('accessToken')
                    }
                  }} className='btn btn-ghost text-center pt-4'>SingOut</button>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </li> : <li><div className='ms-3'><Link to='/login'>Login </Link></div></li>
    }

  </>

  return (
    <div className="navbar  mb-5 bg-base-200">
      <div className="navbar-start flex">
        <div className="dropdown  ms-10">

          <div><ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            {menuItems}
          </ul>
          </div>
        </div>
        <div><Link to='/' className="btn btn-ghost normal-case text-xl">Smart Shop</Link></div>
      </div>
      <div className="navbar-end me-12 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">


          {menuItems}
        </ul>
      </div>
      <div className='nav-end'>
        <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeilnecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>

      </div>

    </div>
  );
};

export default Navbar;