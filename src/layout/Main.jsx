import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../App.css"
import Testimonials from '../pages/home/Testimonials';
import Footer from '../pages/home/Footer';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Authprovider';
import Loading from '../components/Loading';

 const Main = () => {
  const {loading} = useContext(AuthContext); 
  return (
    <div>
      {
        loading ? <Loading/> : <div>
          <Navbar/>
          <div className='min-h-screen'>
          <Outlet/>
          </div>
          
          <Footer/>
        </div>
 }
    </div>
      
  )
}
export default Main;