import React from 'react'
import Banner from '../../components/Banner';
import Body from './Body';
import Testimonials from './Testimonials';
import OurServices from './OurServices';
import Stats from './Stats';
// import Section from './Section';


 const Home = () => {
  return (
    <div>
      <Banner/>
      <Body/> 
      {/* <Section/> */}
      <Testimonials/>
      <OurServices/>
      <Stats/>
    </div>
  )
}

export default Home;