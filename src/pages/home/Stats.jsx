import React, { useState } from 'react'
import { render } from 'react-dom';
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import { useCallback } from "react";
import { RiTeamLine } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { LuStickyNote } from "react-icons/lu";

function Stats() {

    const [counterOn, setCounterOn] = useState();


    
  return (

    
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    <div className='bg-white p-4  overflow-hidden '>
      <div className='flex gap-9 mt-3 justify-center p-9 grid sm:grid-cols-3'>
  <div className='bg-lpurple p-8 hover:shadow-lg hover:-translate-y-7 duration-300'> 
    <h2 className='text-3xl font-semibold' >{ counterOn && <CountUp
    className="account-balance"
    start={0}
    end={350}
    delay={0.2}
    duration={3} />
    
} +
  
  
</h2>
    <p className=''>Happy Students <RiTeamLine  size={22}/></p>
  </div>

  <div className='bg-lpurple  p-8 hover:shadow-lg hover:-translate-y-7 duration-300'>
  <h2 className='text-3xl font-semibold'> { counterOn && <CountUp
    className="account-balance text-3xl font-semibold"
    start={0}
    end={50}
    delay={0.2}
    duration={3} />
    
} +</h2>
    <p>Courses <GiBookshelf size={22}/></p>
  </div>

  <div className='bg-lpurple roun p-8 hover:shadow-lg hover:-translate-y-7 duration-300'>
  <h2 className='text-3xl font-semibold'> { counterOn && <CountUp
    className="text-3xl font-semibold"
    start={0}
    end={500}
    delay={0.2}
    duration={3} /> 
    
} +</h2>
    <p>Notes & Guides<LuStickyNote size={22} /></p>
  </div>
</div>
    </div>
    </ScrollTrigger>
  )
}

export default Stats
