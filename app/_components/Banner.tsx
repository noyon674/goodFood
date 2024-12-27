import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import Link from 'next/link';

function Banner() {
  return (
    <div className='flex flex-col sm:flex-row'>
        <div className='basis-2/3 bg-black text-white pl-16 lg:pl-24 pr-10 flex flex-col lg:flex-row gap-y-5 justify-between py-16 lg:py-20'>
        <div className='flex gap-3'>
            <span className='text-[#FAC564] text-3xl'><IoIosCall /></span>
            <div>
                <h5 className='font-semibold text-xl mb-1'>+880 1889010237</h5>
                <p className='text-lg text-gray-400 font-semibold'>A small river named Duden flows</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <span className='text-[#FAC564] text-3xl'><FaLocationCrosshairs /></span>
            <div>
                <h5 className='font-semibold text-xl mb-1'>Mirpur-2, Dhaka, BD</h5>
                <p className='text-lg text-gray-400 font-semibold'>A small river named Duden flows</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <span className='text-[#FAC564] text-3xl'><FaRegClock /></span>
            <div>
                <h5 className='font-semibold text-xl mb-1'>Open Monday - Friday</h5>
                <p className='text-lg text-gray-400 font-semibold'>A small river named Duden flows</p>
            </div>
        </div>
        </div>
        <div className='basis-1/3 bg-[#FAC564] flex justify-center items-center gap-8 text-xl py-5 text-gray-800'>
        <Link className='bg-white h-10 w-10 rounded-lg flex justify-center items-center transition ease-in-out hover:scale-125' href=''><FaFacebookF /></Link>
        <Link className='bg-white h-10 w-10 rounded-lg flex justify-center items-center transition ease-in-out hover:scale-125' href=''><FaInstagram /></Link>
        <Link className='bg-white h-10 w-10 rounded-lg flex justify-center items-center transition ease-in-out hover:scale-125' href=''><FaPinterestP /></Link>
        </div>
    </div>
  )
}

export default Banner