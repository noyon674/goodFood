import Image from 'next/image'
import React from 'react'
import {Services} from "@/app/_data/catering"

function AboutService() {
  return (
    <div className='bg-[#FAFAFA] mt-20 py-28'>
        <div className='container px-3 md:px-0'>
            <div className="top">
                <h1 className='text-5xl text-center font-bold text-gray-600'>Catering Services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 items-center mt-20 gap-x-24">
                {
                    Services.map(item=>{
                        return <div key={item.id} className='text-center border px-7 py-10 rounded-lg border-[#e9c5828a]'>
                            <span className='text-6xl text-[#FAC564]'>{item.icon}</span>
                            <h5 className='text-2xl font-semibold text-gray-900 mt-2'>{item.title}</h5>
                            <p className='text-lg font-semibold mt-2 text-gray-600'>{item.desc}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default AboutService