import React from 'react'
import {experincedData} from '@/app/_data/experinced'
import Image from "next/image";

function AboutWelcome() {
  return (
    <div className='container'>
        <div className="flex flex-col lg:flex-row px-5 lg:px-0 py-28 items-center gap-x-20">
          <div className="basis-1/2 flex flex-col sm:flex-row gap-7">
            <Image
              src="/img/about_welcome1.jpg"
              alt="welcomefood.png"
              className="md:mb-10 rounded-lg sm:w-1/2 lg:w-full"
              width={350}
              height={200}
            />
            <Image
              src="/img/about_welcome2.jpg"
              alt="welcomefood.png"
              className="md:mt-10 rounded-lg sm:w-1/2 lg:w-full"
              width={350}
              height={200}
            />
          </div>
          <div className="basis-1/2 lg:pr-32 mt-10">
            <h2 className="text-4xl lg:text-7xl text-gray-800 mb-5 font-bold">
            Feliciano <br />Restaurant
            </h2>
            <p className="text-lg text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, obcaecati. Excepturi corporis, praesentium temporibus
              fugit commodi minima voluptatibus vero ipsum provident qui
              molestiae illo vel reiciendis quisquam expedita? Deleniti, quod!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center pl-5 md:pl-0">
            {
                experincedData.map((item)=>(
                    <div key={item.id}>
                <h3 className="text-[#FAC564] text-5xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xl font-semibold uppercase">{item.desc}</p>
            </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default AboutWelcome