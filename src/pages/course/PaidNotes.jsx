import React, { useState } from 'react'
import { GoHeart } from "react-icons/go";
import Stats from '../home/Stats';
import { RiQuestionAnswerLine } from 'react-icons/ri';

function PaidNotes() {

  // const [image, setImage] = useState("")

  // const submitImage = () => {
  //   const data = new FormData()
  //   data.append("file", image)
  //   data.append("upload_preset", "a2q8x0lw")
  //   data.append("cloud_name", "dd1rltu0d")

  //   fetch("https://api.cloudinary.com/v1_1/dd1rltu0d/image/upload",
  //   {
  //     method:"post",
  //     body:data
  // })
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((err) => {
  //  console.log(err)
  // })


  // }





  return (
    <div className='flex items-center justify-center overflow-hidden  '>
 <div className='text-center items-center pt-32 text-lg  '> Hey Coders <br /> Let's Note Something <span className='text-purple font-semibold'> IMPORTANT! </span>


<div className='flex   sm:flex-col grid lg:grid-cols-3 lg:justify-center justify-center items-center gap-10  mt-8'>
 <div className="card w-96 bg-lpurple shadow-xl">
  <figure><img src="https://media.talentbattle.in/Files/C4U_Images/C4U_COURSES_IMAGES/COURSE_IMAGE/180/DSA.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-black text-center">C++ Notes</h2>
    <p className=''>Complete handwritten notes of C++ for free.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary "><GoHeart size={19} /> Like</button>
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
</div>


<div className="card w-96 bg-lpurple shadow-xl">
  <figure><img src="https://th.bing.com/th/id/OIP.Tpz7c2O_NohjJ2KFXstVpAHaDt?rs=1&pid=ImgDetMain" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-black text-center">Java Notes</h2>
    <p className=''>Complete handwritten notes of Java for free.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary "><GoHeart size={19} /> Like</button>
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
</div>


<div className="card w-96 bg-lpurple shadow-xl">
  <figure><img src="https://th.bing.com/th/id/OIP.y6C4nSvy2Woe0m7bWEn4BAHaD4?rs=1&pid=ImgDetMain" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-black text-center">React Notes</h2>
    <p className=''>Complete  notes of React for free.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary "><GoHeart size={19} /> Like</button>
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-lpurple shadow-xl">
  <figure><img src="https://th.bing.com/th/id/OIP.K6Cf8Ghei8gUvlCsTLclBQAAAA?rs=1&pid=ImgDetMain" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-black text-center">IMP React Questions</h2>
    <p className=''>Top 50 questions answers of react for free.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary "><GoHeart size={19} /> Like</button>
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
</div>


<div className="card w-96 bg-lpurple shadow-xl">
  <figure><img className='w-full' src="https://th.bing.com/th/id/OIP.n4pu-sLiNpFzM_Sds1ODBAHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-black text-center">Web Dev Roadmap</h2>
    <p className=''>Web Development Roadmap for beginner's in 2024.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary "><GoHeart size={19} /> Like</button>
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
</div>


<div className="card w-96 bg-lpurple shadow-xl">
  <figure><img src="https://th.bing.com/th/id/OIP.Tpz7c2O_NohjJ2KFXstVpAHaDt?rs=1&pid=ImgDetMain" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-black text-center">Full Stack IMP Questions</h2>
    <p className=''>Must prepare full stack interview questions.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary "><GoHeart size={19} /> Like</button>
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
  

  
</div>

</div>

{/* <div className=''>
<Stats/>
</div> */}.

<div className=''>
  <h2 className=' text-xl  font-semibold mb- mt-8'> Upload your Notes</h2>
  <input type="file"  className='ml-12 mr bg-black text-white rounded-md mr-4'/>
  <button className='btn mt-3 btn-outline bg-purple w-[6rem] justify-center items-center h-[2rem] hover:bg-black hover:text-white rounded-full border-none text-white'>Submit</button>
  <h2>*This Feature is Coming SOON</h2> 
</div>
    </div>
    {/* <input type="file"  onChange={(e) => setImage(e.target.files)} />
    <button className='btn btn-primary' onClick={submitImage}> Submit</button> */}


   
    </div>
  )
}

export default PaidNotes
