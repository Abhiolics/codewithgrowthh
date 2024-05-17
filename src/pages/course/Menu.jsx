import React, { useContext, useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import {} from "react-router-dom"
import { AuthContext } from '../../contexts/Authprovider';

const Menu = () => {
  

  
   

return(

    <div className='text-center items-center pt-40 text-lg  overflow-hidden  '> Hey Community <br /> Here are the some <span className='text-purple font-semibold'> Youtube Channels </span>

    <div className=' section-container flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 pt-20 pb-20 border'>

        
        <div className=" hover:border-indigo-600 transition-all duration-200 hover:border card w-96 bg-base-100 shadow-xl bg-white">
  <figure className="px-10 pt-10">
    <img src="https://yt3.googleusercontent.com/ytc/AIdro_kr-4bwS4yJJ31kVME_Lu3IZLFhSMh7TjIV37D3=s176-c-k-c0x00ffffff-no-rj" alt="Love" className="rounded-xl" />
  </figure>
  <div className="  card-body items-center text-center">
    <h2 className="card-title">C++ by Love Babbar</h2>
    <p>Beautiful Course of C++ with Complete DSA by Love.</p>
    <div className="card-actions">
      
      <a href="https://www.youtube.com/watch?v=sgvW00BMgHQ&list=PLlW1xskDb97LUSanCCOObbt9Mmw8eoabr&index=4&t=3634s" className='btn btn-primary text-white '>Let's Start</a>
    </div>
  </div>
</div>
<div className="  hover:border-indigo-600 transition-all duration-200 hover:border bg-white card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://yt3.ggpht.com/NOSx1LAKxaiTIBDjoFRm9xvT7Ytp_KjZTrxyci6QMc-2kpKJeDqqCaDl4KbGqoB-PLH4063mnQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="Kunal" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center " id='1'>
    <h2 className="card-title">Java + DSA by Kunal</h2>
    <p>Kunal kushwaha teaches DSA with java in absouletely awesome manner, this is especially for Beginners.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button id='myButton'  className="btn btn-primary">Add to Fav</button>
    </div>
  </div>
</div>
<div className=" hover:border-indigo-600 transition-all duration-200 hover:border  bg-white card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center" id='2'>
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button id='myButton'  className="btn btn-primary">Add to Fav</button>
    </div>
  </div>
</div>
<div className=" hover:border-indigo-600 transition-all duration-200 hover:border  bg-white card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button id='myButton'  className="btn btn-primary">Add to Fav</button>
    </div>
  </div>
</div>
<div className="  hover:border-indigo-600 transition-all duration-200 hover:border bg-white card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button id='myButton'  className="btn btn-primary">Add to Fav</button>
    </div>
  </div>
</div>
<div className="  hover:border-indigo-600 transition-all duration-200 hover:border bg-white card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button id='myButton'  className="btn btn-primary">Add to Fav</button>
    </div>
  </div>
</div>
<div className="  hover:border-indigo-600 transition-all duration-200 hover:border bg-white card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button id='myButton'  className="btn btn-primary">Add to Fav</button>
    </div>
  </div>
</div>
<div className="  hover:border-indigo-600 transition-all duration-200 hover:border bg-white card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button id='myButton'  className="btn btn-primary">Add to Fav</button>
    </div>
  </div>
</div>
<div className=" hover:border-indigo-600 transition-all duration-200 hover:border  bg-white card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
      <button id='myButton' onClick={() => handleAddtoCart(item)}  className="btn btn-primary">Add to Fav</button>
    </div>
  </div>
</div>
</div>
</div>
   
)



}


export default Menu;
