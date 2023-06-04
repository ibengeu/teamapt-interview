import { useRef } from 'react';
import HotAirBalloon from '../assets/images/hot_ballon.jpg';
import { Asterisk, MoveDown } from 'lucide-react';
export function Hero() {
  const maskRef = useRef(null);
  const imageRef = useRef(null);


  return (
    <div className="text-white flex gap-24 mb-40 justify-between">
      <h1 className="text-[200px] leading-[100%] font-heading  mb-10">
        <span>Darcy's</span> <span>insurance</span> <span>products</span>
      </h1>
      <div className="flex gap-y-28 w-2/3  ">
        <div className="flex flex-col gap-10 ">
          <div>
            <span className="bg-white text-black inline-block p-1 rounded-full text-2xl mb-4">
              <Asterisk size={32} />
            </span>{' '}
            <p className="">
              Our{' '}
              <a href="" className="text-insure-light-blue">
                Plans
              </a>{' '}
              are saving<br/> policyholders 30% - 60% <br/> on premiums
            </p>
          </div>

          <div>
            <span className="bg-white text-black inline-block p-1 rounded-full text-2xl mb-4 ">
              <Asterisk size={32} />
            </span>
            <p className="">
              We offer a choice of low <br/> dedactibles and include <br/> no cost
              value-added services
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
