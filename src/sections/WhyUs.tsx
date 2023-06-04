import { Asterisk } from 'lucide-react';
import support from '../assets/images/support.jpg';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function WhyUs() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to(maskRef.current, {
    //   yPercent: 0,
    //   duration: 1.5,
    //   repeat: -1,
    //   autoAlpha: 1,
    // });

    const elements = gsap.utils.toArray('.why-stagger');

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        xPercent: -20,
        ease: 'power4.out',
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        stagger: 0.2,
        autoAlpha: 1,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: ".why-trigger",
          start: 'top 120%', // Start the animation when the element is 80% in the viewport
          toggleActions:"restart none none reset",
        },
      }
    );


  }, []);
  return (
    <div className="flex gap-20 items-center justify-evenly mb-40 why-trigger">
      <h1 className="font-heading text-9xl w-1/3 mr-10 ">
        <div className='why-stagger'>Support</div>  <div className='why-stagger'>at every</div> <div className='why-stagger'>step</div>
      </h1>
      <div className="flex flex-col gap-10 w-1/3">
        <div className="mb-10">
          <span className="bg-white text-black inline-block p-1 rounded-full text-3xl mb-4 asterisk ">
            <Asterisk size={32} />
          </span>
          <p>
            Participate in the <a href="">Loyalty Program</a>. pay for the
            services online to get bonuses for our other services. We have a lot
            of bonuses!
          </p>
        </div>

        <div>
          <span className="bg-white text-black inline-block p-1 rounded-full text-3xl mb-4 asterisk ">
            <Asterisk size={32} />
          </span>
          <p>
            You can help other people choose a donation fund and share the link
            with your friends!
          </p>
        </div>

        <button className="border border-insure-pink text-insure-pink p-4 rounded-full ">
          Choose a fund
        </button>
      </div>

      <img
        src={support}
        alt=""
        className="w-1/3  rounded-full h-[600px] drop-shadow-insure-shadow object-cover"
      />
    </div>
  );
}
