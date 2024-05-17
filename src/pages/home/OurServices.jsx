import React from 'react'


const servicesList = [
{ id:1 , title: "IOT - Internet of Things", des: "Innovate and connect with cutting-edge IoT solutions. Empowering smart technology for a connected world, unlocking potential, and building a smarter tomorrow. ", image: "/images/ui1.svg"},
{ id:1 , title: "Web Development", des: "Building stunning websites with cutting-edge technology, tailored to elevate your brand and enhance user experience. ", image: "/images/ui5.svg"},
{ id:1 , title: "Artifical Intelligence", des: "Unlock the potential of AI. Intelligent solutions for a smarter, more innovative, and efficient tomorrow. ", image: "/images/ui6.svg"},
{ id:1 , title: "Software Development", des: "Building innovative software solutions that drive success, streamline processes, and transform ideas into reality for a smarter future. ", image: "/images/ui7.svg"},
]
const  OurServices = () => {
  return (
    <div className='section-container '>
       <div className='flex flex-col md:flex-row items-center justify-between gap-12'>

          {/* text */}
      <div className='md:w-4/5'> 
      <div className='text-center'>
            <p className='color-light font-semibold text-xl text-purple'>Gear Up for Success :)</p>
            <h2 className='title'>Your Ultimate Preparation Hub! </h2>
            <p className='my-5 text-secondary  text-base-200 leading-[30px]'>Navigate Your Learning Adventure: Explore DSA, Master CS Concepts, Design Systems, Master Competitive Skills, and Ace Interviews Effortlessly 💻✨</p>

            <button className=' btn bg-purple border-none text-white px-8 py-3 rounded-full'>Explore</button>
         </div>
    </div>

        {/* Images */}
      <div className=' md:w-1/2 '> 
      <div className='grid sm:grid-cols-2  grid-cols-1 items-center gap-8'>
        {
            servicesList.map((service) => (
                <div key={service.id} className='shadow-lg rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:-translate-y-6 hover:border-indigo-600 transition-all duration-200 hover:border'>
                    <img src={service.image} alt="" className='mx-auto h-10 w-10' />
                    <h5 className='pt-3 font-semibold'>{service.title}</h5>
                    <p className='text-ase-200'> {service.des}</p>
                </div>
            ))
        }
      </div>
      </div>


    
    </div>
    </div>
  )
}

export default OurServices;