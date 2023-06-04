import Contact from './sections/Contact';
import { Hero } from './sections/Hero';
import { Nav } from './sections/Nav';
import { Products } from './sections/Products';
import Testimonial from './sections/Testimonial';
import WhyUs from './sections/WhyUs';

function App() {
  return (
    <div className='p-10 bg-insure-black max-w-[1440px]  mx-auto'>
      <div className="font-sans insure-gradient  min-h-screen px-20 text-white  rounded-3xl">
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
