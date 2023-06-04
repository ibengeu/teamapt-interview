import { Calendar } from 'lucide-react';
import buoywhite from '../assets/icons/buoy-white.svg';
export default function Contact() {
  return (
    <>
      <div className="flex  py-10">
        <div className="mr-40">
          <h1 className="text-6xl font-heading mb-10">Need Numbers?</h1>

          <ul className=" flex gap-6 mb-10">
            <li className="bg-insure-blue hover:bg-white transition-all hover:text-insure-blue p-4 rounded-full cursor-pointer px-6 text-white">
              Travel
            </li>
            <li className="bg-insure-blue hover:bg-white transition-all hover:text-insure-blue p-4 rounded-full cursor-pointer px-6 text-white">
              Health
            </li>
            <li className="bg-insure-blue hover:bg-white transition-all hover:text-insure-blue p-4 rounded-full cursor-pointer px-6 text-white">
              Casco
            </li>
            <li className="bg-insure-blue hover:bg-white transition-all hover:text-insure-blue p-4 rounded-full cursor-pointer px-6 text-white">
              Mortgage
            </li>
            <li className="bg-insure-blue hover:bg-white transition-all hover:text-insure-blue p-4 rounded-full cursor-pointer px-6 text-white">
              Fire
            </li>
          </ul>

          <div className="">
            <div className="flex gap-6 w-full mb-10">
              <div className="flex flex-col gap-2 mb-4 w-full">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  className="appearance-none bg-insure-blue  p-4 rounded-full  text-slate-300 text-opacity-25"
                >
                  <option value="Nigeria">Nigeria</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-4 w-full">
                <label htmlFor="country">Choose travel Dates</label>
                <div className="bg-insure-blue  p-4 flex justify-between items-center gap-4  rounded-full text-slate-300 text-opacity-25">
                  <p>11 Apr - 20 Apr</p>
                  <Calendar size={30} />
                </div>
              </div>
            </div>

            <button className="bg-insure-pink text-white p-4 rounded-full w-full">
              Choose a fund
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-[500px] mb-40">
          <div>
            <h4 className="font-heading text-2xl mb-6">Insurance Services</h4>
            <ul className="flex gap-6 gap-y-20">
              <li className="text-slate-300 opacity-50">Medical Expenses</li>
              <li className="text-slate-300 opacity-50">
                Family Health Insurance
              </li>
              <li className="text-slate-300 opacity-50">Vehicle Damage</li>
              <li className="text-slate-300 opacity-50">Property Loss</li>
              <li className="text-slate-300 opacity-50">Fire</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-2xl mb-6">Company</h4>
            <ul className="flex gap-6">
              <li className="text-slate-300 opacity-50">About us</li>
              <li className="text-slate-300 opacity-50">career</li>
              <li className="text-slate-300 opacity-50">Faq</li>
              <li className="text-slate-300 opacity-50">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-2xl mb-6">bonus</h4>
            <ul className="flex gap-6">
              <li className="text-slate-300 opacity-50">Gift Certificate</li>
              <li className="text-slate-300 opacity-50">Afiliate Program</li>
              <li className="text-slate-300 opacity-50">Trainings</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 pb-10">
        <div className='flex items-center'>
          <img src={buoywhite} alt="" className='mr-2' />
          <p>Darcy's Insurance Products</p>
        </div>

        <p>Privacy Policy</p>
      </div>
    </>
  );
}
