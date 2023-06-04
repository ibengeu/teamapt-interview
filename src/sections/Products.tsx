import HomeInsur from '../assets/images/moniepoint-home.jpg';
import Buoy from '../assets/images/buoy.jpg';
import BMW from '../assets/images/bmw.jpg';
import cottage from '../assets/images/cottage.jpg';
import drugs from '../assets/images/drugs.jpg';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Products() {
  let paraRef = useRef(null);
  let h1Ref = useRef(null);
  let bestChoice = useRef(null);

  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      h1Ref.current,
      {
        scale: 1,
      },
      {
        scale: 1,
        duration:1.5,
        scrollTrigger: {
          trigger: bestChoice.current,
          toggleActions:"restart none none restart"
        },
      }
    );
    gsap.fromTo(
        paraRef.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: bestChoice.current,
            toggleActions:"restart none none restart"
          },
        }
      );
    return () => {
      // cleanup code (optional)
    };
  }, []);

  return (
    <div className="text-white flex gap-6 gap-y-8 flex-wrap mb-40 skewElem">
      <div
        className={`h-96 group  rounded-[60px]  w-[600px] relative hover:drop-shadow-insure-shadow hover:scale-105 transition-all hover:cursor-pointer`}
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${HomeInsur})`,
        }}
      >
        <p className="bg-black text-white px-8 p-4 w-fit rounded-[60px]  absolute bottom-4 left-6  transition-all ">
          Home Insurance
        </p>
      </div>
      <div
        className={`h-96 w-[200px] rounded-full hover:drop-shadow-insure-shadow hover:scale-105 transition-all hover:cursor-pointer`}
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${Buoy})`,
        }}
      ></div>

      <div
        className="h-auto bg-insure-blue w-1/3 p-6 rounded-3xl  flex flex-col justify-end "
        ref={bestChoice}
      >
        <h1 className="text-4xl mb-6 font-heading">Best Choice</h1>
        <p ref={paraRef}>
          Not all insurance are the same. That's why agency knows that your
          insurance should be customized to fit your situation
        </p>
        <button className="bg-insure-pink px-6 p-4 rounded-[60px] text-insure-blue mt-auto font-medium hover:scale-105 transition-all hover:cursor-pointer">
          View all services
        </button>
      </div>
      <div
        className={`h-64 rounded-[60px] w-[32%] relative hover:drop-shadow-insure-shadow  hover:scale-105 transition-all hover:cursor-pointer`}
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${BMW})`,
        }}
      >
        <p className="bg-black text-white px-8 p-4 w-fit rounded-[60px]  absolute bottom-4 left-6">
          Vehicle Damage
        </p>
      </div>
      <div
        className={`h-64 rounded-3xl w-[32%] relative hover:drop-shadow-insure-shadow hover:scale-105 transition-all hover:cursor-pointer`}
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${cottage})`,
        }}
      >
        <p className="bg-black text-white px-8 p-4 w-fit rounded-[60px]  absolute bottom-4 left-6">
          Mortgage Insurance
        </p>
      </div>

      <div
        className={`h-64 w-[32%] rounded-[60px] relative hover:drop-shadow-insure-shadow hover:scale-105 transition-all hover:cursor-pointer`}
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${drugs})`,
        }}
      >
        <p className="bg-black text-white px-8 p-4 w-fit rounded-[60px]  absolute bottom-4 left-6">
          Medical Expenses
        </p>
      </div>
    </div>
  );
}
