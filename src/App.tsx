import Contact from './sections/Contact';
import { Hero } from './sections/Hero';
import { Nav } from './sections/Nav';
import { Products } from './sections/Products';
import Testimonial from './sections/Testimonial';
import WhyUs from './sections/WhyUs';

function App() {
  return (
    <div className="font-sans bg-insure-blue bg-gradient-to-b from-insure-blue via-black via-5% to-insure-blue  min-h-screen px-20 text-white max-w-[1440px] mx-auto">
      <Nav />
        <Hero />

        <Products />
        <Testimonial/>
        <WhyUs/>
        <Contact/>
    </div>
  );
}

export default App;
