import Image from 'next/image'
import React from 'react'

function Welcome() {
  return (
    <div className='py-32 px-5 md:px-0'>
        <div className='container flex flex-col md:flex-row items-center'>
            <div className='basis-1/2 lg:pr-32 mb-10'>
                <p className='text-xl text-[#F9C565] font-semibold mb-3'>Welcome to goodFood</p>
                <h2 className='text-4xl lg:text-7xl text-gray-800 mb-5'>Taste a delicious food here in Italy & We are inspired since 1895</h2>
                <p className='text-lg text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, obcaecati. Excepturi corporis, praesentium temporibus fugit commodi minima voluptatibus vero ipsum provident qui molestiae illo vel reiciendis quisquam expedita? Deleniti, quod!</p>
            </div>
            <div className='basis-1/2 flex flex-col sm:flex-row gap-7'>
            <Image src='/img/welcomeFood.jpg' alt='welcomefood.png' className='md:mb-10 rounded-lg sm:w-1/2 lg:w-full' width={350} height={200}/>
            <Image src='/img/chef.jpg' alt='welcomefood.png' className='md:mt-10 rounded-lg sm:w-1/2 lg:w-full' width={350} height={200}/>
            </div>
        </div>
    </div>
  )
}

export default Welcome