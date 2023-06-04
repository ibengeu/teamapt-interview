import { Asterisk } from 'lucide-react';
import support from "../assets/images/support.jpg"

export default function WhyUs() {
  return (
    <div className="flex gap-20 items-center justify-evenly mb-40">
      <h1 className="font-heading text-9xl w-[400px] ">
        Support at every <span>step</span>
      </h1>
      <div className="flex flex-col gap-10 w-96 " >
        <div className='mb-10'>
        <span className="bg-white text-black inline-block p-1 rounded-full text-3xl mb-4 ">
                          <Asterisk size={32} />

          </span>
          <p>
            Participate in the <a href="">Loyalty Program</a>. pay for the
            services online to get bonuses for our other services. We have a lot
            of bonuses!
          </p>
        </div>

        <div>
          <span className="bg-white text-black inline-block p-1 rounded-full text-3xl mb-4 ">
                          <Asterisk size={32} />

          </span>
          <p>
            You can help other people choose a donation fund and share the link
            with your friends!
          </p>
        </div>

        <button className='border border-insure-pink text-insure-pink p-4 rounded-full '>Choose a fund</button>
      </div>

      <img src={support} alt="" className='w-[300px] rounded-full h-[600px] drop-shadow-insure-shadow object-cover' />
    </div>
  );
}
