import { Key, ChevronDown } from 'lucide-react';
import buoyIcon from '../assets/icons/buoy.svg';

export function Nav() {
  return (
    <nav className="font-sans text-white flex p-10 justify-between items-center mb-10">
      <img src={buoyIcon} alt="" className="h-10 " />
      <ul className="flex gap-6">
        <li className="font-regular">Home</li>
        <li className="font-regula flex items-center">
          <span>Services</span> <ChevronDown size={20} className='ml-4' />
        </li>
        <li className="font-regular">About Us</li>
        <li className="font-regular">Blog</li>
        <li className="font-regular">Career</li>
      </ul>
      <div className="flex gap-6">
        <button
          type="button"
          className="bg-insure-light-blue rounded-full p-4 font-medium px-10 text-insure-blue"
        >
          Contact Us
        </button>

        <button type="button" className="flex items-center justify-center ">
          <Key className="mr-3" />
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
}
