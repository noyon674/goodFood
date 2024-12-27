import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className='bg-[#111] py-20'>
      <div className='container px-5 md:px-0 lg:px-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-20'>
        <div>
          <h1 className='text-white text-4xl font-bold'>GoodFood</h1>
          <p className='text-gray-300 text-xl mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eveniet optio fuga, autem quam eaque impedit non quasi iste quas? Voluptates illum quasi quibusdam doloribus placeat nostrum, commodi quaerat quam.</p>
        </div>
        <div>
          <h2 className='text-4xl text-[#FAC564] font-semibold mb-10'>Contact Us</h2>
          <p className='flex items-center gap-x-3 mb-5'>
            <FaLocationDot className='text-[#FAC564] text-2xl'/>
            <span className='text-white italic'>1234 Some St San Francisco,<br />CA 94102, US 1.800.123.4567</span>
          </p>
          <p className='flex items-center gap-x-3 mb-5'>
            <IoIosCall className='text-[#FAC564] text-2xl'/>
            <span className='text-white italic'>+880 1889010237</span>
          </p>
          <p className='flex items-center gap-x-3 mb-5'>
            <IoMail className='text-[#FAC564] text-2xl'/>
            <span className='text-white italic'>developernoyon9@gmail.com</span>
          </p>
        </div>
        <div>
          <h3 className='text-[#FAC564] text-4xl font-semibold mb-10'>Opening Hours</h3>
          <p className='text-xl text-gray-400 mb-4'>Monday...............Close</p>
          <p className='text-xl text-gray-400 mb-4'>Tue-Fri..............10 am - 12 pm</p>
          <p className='text-xl text-gray-400 mb-4'>Sat-Sun.............. 8 am - 11 pm</p>
          <p className='text-xl text-gray-400 mb-4'>Holidays ............. 10 am - 12 pm</p>
        </div>
      </div>
    </div>
  )
}

export default Footer