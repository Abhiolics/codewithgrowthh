import React from 'react'


const  Testimonials = () => {
  return (
    <div className='section-container my-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
      <div className='md:w-1/2'> 
      <img src="/images/test1.png" alt=""  className='h-80 w-80  items-center'/></div>
      <div className='md:w-4/5'> 
      <div className='text-center'>
            <p className='text-purple font-bold text-md '>ONE STOP FOR</p>
            <h2 className='title'>Learner's | Designer's | Developer's</h2>
            <blockquote className='my-5 text-secondary text-base-200 leading-[30px]'>"Welcome to our digital hub, where coders, developers, and designers unite to shape the future of technology. Join us and unleash your creativity in our thriving community! 💻✨ #InnovateCollaborate "</blockquote>
         </div>
    </div>
    </div>
    </div>
  )
}

export default Testimonials;