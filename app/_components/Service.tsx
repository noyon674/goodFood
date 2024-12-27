import React from 'react'
import { GiHotMeal } from "react-icons/gi";
import { PiHamburgerFill, PiCoffeeFill } from "react-icons/pi";

function Service() {
  return (
        <div className='bg-[#fefefe] py-32'>
            <div className='container'>
                <div className='text-center'>
                    <p className='uppercase text-[#FAC564] font-bold'>Our services</p>
                    <h2 className='text-5xl lg:font-semibold mb-5 text-gray-800'>Best way to eat healthy food</h2>
                    <p className='lg:w-1/2 mx-auto text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minus adipisci a tempore voluptates dolorum rem sapiente ea, iure asperiores.</p>
                </div>
                <div className='px-5 mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 lg:gap-x-20'>
                    <div className='text-center p-16 rounded-xl shadow-md'>
                        <span><GiHotMeal className='icon-center text-7xl text-[#FAC564] '/></span>
                        <h3 className='font-semibold text-xl mt-5 text-gray-800'>Healthy Food</h3>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, itaque!</p>
                    </div>
                    <div className='text-center p-16 rounded-xl shadow-md'>
                        <span><PiHamburgerFill className='icon-center text-7xl text-[#FAC564] '/></span>
                        <h3 className='font-semibold text-xl mt-5 text-gray-800'>Fast Food</h3>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, itaque!</p>
                    </div>
                    <div className='text-center p-16 rounded-xl shadow-md'>
                        <span><PiCoffeeFill className='icon-center text-7xl text-[#FAC564] '/></span>
                        <h3 className='font-semibold text-xl mt-5 text-gray-800'>Delicious Coffee</h3>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, itaque!</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Service