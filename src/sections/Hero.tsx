import { useLayoutEffect, useRef } from 'react';
import HotAirBalloon from '../assets/images/hot_ballon.jpg';
import { Asterisk, MoveDown } from 'lucide-react';
import { gsap } from 'gsap';

export function Hero() {
  const maskRef = useRef(null);
  const imageRef = useRef(null);
  const h1ref = useRef<HTMLDivElement[] | null>([]);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to(maskRef.current, {
    //   yPercent: 0,
    //   duration: 1.5,
    //   repeat: -1,
    //   autoAlpha: 1,
    // });

    const elements = gsap.utils.toArray('.text-stagger');

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        xPercent: -20,
        stagger: 0.2,

        ease: 'power4.out',
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        stagger: 0.2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', // Start the animation when the element is 80% in the viewport
          toggleActions: 'restart none none reset',
        },
      }
    );
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
    <div
      className="text-white flex gap-24 mb-40 justify-between"
      ref={containerRef}
    >
      <h1 className="text-[200px] leading-[100%] font-heading   mb-10">
        <div
          className="text-stagger"
          ref={(el) =>
            // @ts-ignore
            (h1ref!.current[0] = el)
          }
        >
          Darcy's
        </div>{' '}
        <div
          className="text-stagger"
          ref={(el) =>
            // @ts-ignore

            (h1ref!.current[1] = el)
          }
        >
          insurance
        </div>{' '}
        <div
          className="text-stagger"
          ref={(el) =>
            // @ts-ignore

            (h1ref!.current[2] = el)
          }
        >
          products
        </div>
      </h1>
      <div className="flex gap-y-28 w-2/3  ">
        <div className="flex flex-col gap-10 ">
          <div>
            <span className="bg-white text-black inline-block p-1 rounded-full text-2xl mb-4 asterisk">
              <Asterisk size={32} />
            </span>{' '}
            <p className="">
              Our{' '}
              <a href="" className="text-insure-light-blue">
                Plans
              </a>{' '}
              are saving
              <br /> policyholders 30% - 60% <br /> on premiums
            </p>
          </div>

          <div>
            <span className="bg-white text-black inline-block p-1 rounded-full text-2xl mb-4 asterisk">
              <Asterisk size={32} className="" />
            </span>
            <p className="">
              We offer a choice of low <br /> dedactibles and include <br /> no
              cost value-added services
            </p>
          </div>
          <div className="bg-bg-light-blue rounded-full py-16 w-24 flex item-center justify-center bg-gradient-to-b from-transparent  to-insure-blue bg-opacity-5 ">
            <MoveDown size={56} />
          </div>
        </div>
      </div>
      <div className="mask" ref={maskRef}>
        <img
          ref={imageRef}
          src={HotAirBalloon}
          alt=""
          className="h-[600px] object-cover rounded-full shadow-bg-light-blue drop-shadow-insure-shadow transform-origin-top"
        />
      </div>
    </div>
  );
}
