import React, { useContext, useEffect, useState } from 'react'
import "./navbar.css"
import { VscAccount } from "react-icons/vsc";
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/Authprovider';
import Profile from './Profile';
import CartPage from '../pages/course/CartPage';
import { GoFlame } from 'react-icons/go';

 const Navbar = () => {
  const[isSticky, setSticky ]= useState(false);

const {user} = useContext(AuthContext);
console.log(user);

  //handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if(offset > 0){
        setSticky(true)
      } else {
        setSticky(false)
      }
    };
     window.addEventListener("scroll", handleScroll);

     return () => {
      window.addEventListener("scroll", handleScroll);
     }
  },[])
    const navitems = <>
    <li><a href='/'>Home</a></li>
    <li><a href='/paidnotes'>Paid Notes</a></li>
        <li>
          <a>Services</a>
          <ul className="p-2">
            <li><a href='/menu'>Explore</a></li>
            <li><a href='/notes'>Notes</a></li>
            <li><a href='/api'>API</a></li>
          </ul>
        </li>
        <li><a href='/aboutme'>About Me</a></li>
    </>
  return (
    <header className='max-w-screen-2x1 container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
 <div className={`navbar x1:px-24 ${isSticky ? "shadow-md bg-base-30 transition-all duration-300 ease-in-out" : ""}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navitems}
      </ul>
    </div>
    <a href='/' className=' flex items-center gap-1 text-purple font-bold  ml-3 lg:px-8'>CodewithGrowth <GoFlame size={2}/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-purple' href="/">Home</a></li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 text bg-white">
          <li><a href='/menu'>Explore</a></li>
          <li><a href='/paidnotes'>Paid Notes</a></li>
            <li><a href='/notes'>Notes</a></li>
            <li><a href='/api'>API</a></li>
            <li><a>Join Us</a></li>
          </ul>
        </details>
      </li>
      <li><a href='/aboutme'>About Me</a></li>
    </ul>
  </div>

  {/* cart items */}

{/* <Link to="cart-page">
<label
            tabIndex={0}
            className="btn btn-ghost btn-circle  lg:flex items-center justify-center mr-3"
          >
  <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">0</span>
        </div>
      </div>
      </label>
</Link> */}


  
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle  lg:flex">
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}

    </button>
   
    {/* login page */}
{
  user? <Profile user={user}/> :  <button
  onClick={()=>document.getElementById('my_modal_5').showModal()}
   className="btn bg-purple rounded-full px-4 text-white flex items-center gap-2 border-none"><VscAccount/>
  Login
  </button>
}
   
   <Modal/>
  </div>
</div>
    </header>
  )
}
export default Navbar;