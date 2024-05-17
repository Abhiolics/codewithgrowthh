import React from 'react'

const cardItems = [
  {id: 1, title: "DSA", des: "<Learn Data Structures & Algorithms>" , image : "/images/working.png"},
  {id: 2, title: "UI/UX", des: "<UI/UX Designs Fundamentals>" , image : "/images/laptop.png"},
  {id: 3, title: "Web Dev", des: "<HTML, CSS, JavaScript, React, Tailwind CSS, MERN Stack>" , image : "/images/png1.png"},
  {id: 4, title: "CS Fundamentals", des: "<Learn OOPS, DBMS, OS, & System Design>" , image : "/images/women.png"},
]

const Body = () => {
  return (
    <div>
      <div className='section-container py-16'>
        <div className='text-center'>
            <p className='text text-xl font-bold'>Developer's Club</p>
            <h2 className='title'>Courses Available </h2>
        </div>

        {/* Cards Section */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
          {
            cardItems.map((Item,i) => (
              <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer
               hover:-translate-y-4 duration-400 transition-all border-2 hover:border-purple  '>
                <div className='flex w-full mx-auto items-center justify-center'>
                  <img src={Item.image} alt="" className='bg-l-purple p-5 rounded-full  w-28 h-28'/>
                </div>
                <div className='mt-5 space-y-1'>
                    <h5>{Item.title}</h5>
                    <p>{Item.des}</p>
                </div>
                </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}


export default Body;