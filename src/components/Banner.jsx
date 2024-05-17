import React from 'react'



const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4
     bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% '>
      <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>

         {/* Image */}
         <div className='md:w-1/2'>
            <img src="/images/logocwg.png" alt="" />
            
            <div className='flex flex-col md:flex-row items-center justify-around gap-4'>
                <div className='flex bg-white py-3 px-6 rounded-2xl items-center gap-3 shadow-lg w-64'>
                    <img src="/images/png1.png" alt="" className='rounded-2xl h-20 w-30 viewBox=0 0 24 24' />
                    <div className='space-y-1'>
                    <h5 className='font-medium mb-1'>Coder's Community</h5>
                    <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600"  readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
</div>
<p className='text-red color-red'>$0.00</p>
                </div>
            </div>
            <div className='flex bg-white py-3 px-6 rounded-2xl items-center gap-3 shadow-lg w-64'>
                    <img src="/images/png1.png" alt="" className='rounded-2xl h-20 w-30 viewBox=0 0 24 24' />
                    <div className='space-y-1'>
                    <h5 className='font-medium mb-1'>1:1 Mentorship</h5>
                    <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p className='text-red color-red'>$0.00</p>
                </div>
            </div>
            </div>
      </div>
        {/* texts */}
        <div className='md:w-1/2  space-y-7 px-4'>
            <h2 className='md:text-4xl text-4xl font-bold md:leading-snug leading-snug '>Let's Learn <span className='text-purple'> Design & Develop </span></h2>
            <p className='text-xl text-[#4A4A4A'>Hey Coder's do you wanna code something adventures let's join us to build a learner's designer's & developer's community.</p>
            <button className='btn   px-8 py-3  bg-purple rounded-full border-none text-white '>Let's Started</button>
        </div>

       
    </div>
    </div>
  )
}
export default  Banner;