import Contact from './sections/Contact';
import { Hero } from './sections/Hero';
import { Nav } from './sections/Nav';
import { Products } from './sections/Products';
import Testimonial from './sections/Testimonial';
import WhyUs from './sections/WhyUs';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

function App() {

  useLayoutEffect(() => {
    
    gsap.fromTo(
      '.asterisk',
      {
        rotate: 0,
        repeat: -1,
        duration: 1,
      },
      {
        rotate: 360,
        repeat: -1,
        duration: 3,
        ease:"linear"

        
      }
    );
  }, []);
  
  return (
    <div className='p-10 bg-insure-black max-w-[1440px] mx-auto rounded-[60px]'>
      <div className="font-sans insure-gradient  min-h-screen px-20 text-white  rounded-[60px]">
      <Nav />
        <Hero />

        <Products />
        <Testimonial/>
        <WhyUs/>
        <Contact/>
    </div>
    </div>
  );
}

export default App;
