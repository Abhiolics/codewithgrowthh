import React from 'react'
import { RiComputerLine } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { PiLinkSimple } from "react-icons/pi";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";


function AboutMe() {
  return (
    <div>
                  <div className='text-center items-center pt-20 text-lg  '>  <br />  <span className='text-purple text-4xl font-semibold'> Designed & Developed <span className='text-black'> by </span> </span>
<div className=''> 

{/* <h1 className='text-xl font-semibold '>Our Makers</h1> */}
<div className='flex justify-center mt-8'>
<div className='card hover:translate-x-6 duration-300 ml-4 mr-4 bg-white shadow-xl hover:border-2 hover:border-purple  h-96 w-96 flex  justify-center items-center'>
  <div className='flex justify-center '>
    <img className='rounded-full ' src="https://media.licdn.com/dms/image/D5603AQG_mg-dckzWmg/profile-displayphoto-shrink_100_100/0/1715540118019?e=1721260800&v=beta&t=jx2BxN3MJ4BsqqIZPyGfbwnTwokOL_nc3TskEr4ePFw" alt="" />
  </div> <h2 className='text-xl font-semibold'>Abhay Pratap Singh</h2>
  <p className='text-md font-semibo'>Frontend Developer || UI/UX Designer</p>
  <div className='mt-4'>
    <p className='text-sm flex  items-center flex-col  font-semibold'> Frontend Developer  <span className='flex gap-2 items-center underline cursor-pointer font-bold text-light'>@Papaya Coders <RiComputerLine size={28} /></span>
    <br />
    Content Writer <span className='flex gap-2 items-center underline cursor-pointer font-bold text-light'>@GeeksforGeeks <HiOutlinePencilSquare size={28} /></span></p>
  </div>
<div className='flex justify-center gap-5 mt-6  '>
<img className='object-cover  h-46 w-32' src="https://papayacoders.in/wp-content/uploads/2023/06/papayacoders-logo-e1686920327207-1024x365.png" alt="" />
<img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="" />
</div>
</div>
</div>
  

<div className='mt-7 mb-7'>
<div className="stack">
  <div className="card shadow-md bg-white text-primary-content">
    <div className="card-body">
      <h2 className="font-semibold text-xl text text-center">#CodewithGrowth</h2> 
      <p >We're still cooking something for you.
        <br /> <span className='font-semibold'>
        #StayTuned
        </span>
      </p>
    </div>
  </div> 
  <div className="card shadow bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Notification 2</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div> 
  <div className="card shadow-sm bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Notification 3</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>
</div>
<div className='p-9'>
<div className='flex gap-2    items-center justify-center font-semibold text-xl'>
Connect with me  <PiLinkSimple />
</div>
<div className='flex gap-4 justify-center items-center mt-5 text-purple'>
   <a href="https://www.linkedin.com/in/abhay-pratap-singh-b73297249/"><BsLinkedin  size={40}/></a> 
   <a href="https://leetcode.com/u/Abhiolics/"><SiLeetcode  size={40}/></a>
   <a href="https://github.com/abhiolics"><FaGithub  size={40}/></a>
   <a href="https://www.behance.net/abhaypsingh27"><FaBehanceSquare size={47}/></a>

</div>

</div>


</div>
</div>
</div>
  )
}

export default AboutMe
