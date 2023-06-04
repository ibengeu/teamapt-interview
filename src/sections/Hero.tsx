import { useRef } from 'react';
import HotAirBalloon from '../assets/images/hot_ballon.jpg';
import { Asterisk, MoveDown } from 'lucide-react';
export function Hero() {
  const maskRef = useRef(null);
  const imageRef = useRef(null);


  return (
    <div className="text-white flex gap-28 mb-40 justify-between w-full">
      <h1 className="text-[200px] leading-[100%] font-heading w-1/2 mb-10">
        <span>Darcy's</span> <span>Insurance</span> <span>Products</span>
      </h1>
      <div className="flex gap-28 ">
        <div className="flex flex-col gap-10 w-1/2 ">
          <div>
            <span className="bg-white text-black inline-block p-1 rounded-full text-3xl mb-4">
              <Asterisk size={32} />
            </span>{' '}
            <p className="">
              Our{' '}
              <a href="" className="text-insure-light-blue">
                Plans
              </a>{' '}
              are saving policyholders 30% - 60% on premiums
            </p>
          </div>

          <div>
            <span className="bg-white text-black inline-block p-1 rounded-full text-3xl mb-4 ">
              <Asterisk size={32} />
            </span>
            <p className="">
              We offer a choice of low dedactibles and include no cost
              value-added services
            </p>
          </div>
          <div className="bg-bg-light-blue rounded-full py-16 w-24 flex item-center justify-center bg-gradient-to-b from-transparent  to-insure-blue bg-opacity-5 ">
            <MoveDown size={56} />
          </div>
        </div>
        <div className="mask" ref={maskRef}>
          <img
            ref={imageRef}
            src={HotAirBalloon}
            alt=""
            className="h-[600px] w-[200px] object-cover rounded-full shadow-bg-light-blue drop-shadow-insure-shadow transform-origin-top"
          />
        </div>
      </div>
    </div>
  );
}
