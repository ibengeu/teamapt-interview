import { Asterisk } from 'lucide-react';
import Portrait from '../assets/images/portrait.jpg';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Testimonial() {
  let roleRef = useRef(null);
  let nameRef = useRef(null);
  let contRef = useRef(null);
  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --

    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray('.zoom');

    sections.forEach((item) => {
      gsap.fromTo(
        item as Element,
        {
          scale: 0,
          y:-20
        },
        {
          scale: 1,
          y:0,
          duration: 1,
          stagger: 1,
          scrub:1,
          scrollTrigger: {
            trigger: contRef.current,
            toggleActions: 'restart none none reset',
          },
        }
      );
    });

    return () => {
      // cleanup code (optional)
    };
  }, []);
  return ( 
    <div className="flex items-center mb-40"  >
      <div className="flex bg-insure-blue p-24 rounded-[60px] mr-6 " >
        <img
          src={Portrait}
          alt=""
          className="rounded-full h-auto w-1/3  mr-20 object-cover"
        />

        <div className="w-1/2 flex gap-6 flex-col" >
          <h1 className="font-sans text-3xl font-bold zoom" ref={nameRef}>
            Ibenge Uforo
          </h1>
          <p className="text-insure-light-blue zoom" ref={roleRef}>
            CTO - Moniepoint
          </p>
          <p className="leading-6 zoom">
            A Software engineer with experience in building professional
            software using Javascript (React) and the ecosystem. He is a highly
            goal-oriented developer who loves working in fast-paced and dynamic
            organizations that provide challenging opportunities
          </p>
          <button className="bg-insure-light-blue px-10 p-4 rounded-full text-insure-blue mt-auto mb-8 zoom">
            Get a consultation
          </button>
        </div>
      </div>
      <div className="flex p-24"> 
        <span className="bg-white text-black inline-block p-1 rounded-full text-3xl mr-4 h-fit mt-3 asterisk">
        <Asterisk size={32} />
        </span>
        <h2 className="text-7xl font-heading">Our Experts Say</h2>
      </div>
    </div>
  );
}
