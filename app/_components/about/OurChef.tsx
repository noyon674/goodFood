"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { chefData } from "@/app/_data/chef";

function OurChef() {
  const breakPoint = {
    sm:{preview: 1, design: "w-[300px] mx-auto sm:hidden"},
    md:{preview: 2, design: "hidden sm:block lg:hidden"},
    lg:{preview: 3, design: "hidden lg:block xl:hidden"},
    xl:{preview: 4, design: "hidden xl:block"},
  }
  const showSliders = (preview: number, design: string)=>{
    return <Swiper
    modules={[Autoplay]}
    spaceBetween={50}
    slidesPerView={preview}
    autoplay
    loop
  >
    <div>
      {chefData.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className={design}>
              <Image
                src={item.img}
                alt="master chef.jpg"
                width={300}
                height={100}
                className="rounded-lg"
              />
              <div className=" mt-4">
                <h4 className="text-3xl text-gray-800 font-semibold">
                  {item.name}
                </h4>
                <p className="text-xl text-gray-500 font-medium">
                  {item.designation}
                </p>
              </div>
              <div className="flex mt-4 gap-x-3">
                {item.icons.map((icon) => {
                  return <Link
                    href={icon.link}
                    className="text-[#f0b038] text-2xl"
                    key={icon.id}
                  >
                    <span>{icon.icon}</span>
                  </Link>;
                })}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </div>
  </Swiper>
  }
  return (
    <div className="py-28">
      <div className="container">
        <div className="top">
          <h1 className="text-5xl text-center font-bold text-gray-800">
            Our Master Chef
          </h1>
        </div>
        <div className="mt-20">
          {showSliders(breakPoint.sm.preview, breakPoint.sm.design)}
          {showSliders(breakPoint.md.preview, breakPoint.md.design)}
          {showSliders(breakPoint.lg.preview, breakPoint.lg.design)}
          {showSliders(breakPoint.xl.preview, breakPoint.xl.design)}
        </div>
      </div>
    </div>
  );
}

export default OurChef;
