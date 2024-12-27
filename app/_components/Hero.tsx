"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { GiKnifeFork } from "react-icons/gi";
import { Autoplay } from "swiper/modules";
import { homeData } from "@/app/_data/home";

function HeroSection() {
  return (
    <div className="relative bg-heroBackground w-full h-[100vh] bg-cover bg-center bg-no-repeat">
      <div className=" absolute w-full h-full bg-[#222222b0]">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            loop
            className=""
          >
            {homeData.map((item) => {
              return (
                <SwiperSlide key={item.id} className="text-center mt-44 text-white lg:border-x-4">
                  <GiKnifeFork className="icon-center text-7xl" />
                  <h1 className="text-4xl lg:text-6xl font-Montserrat text-[#F9C565] py-3">
                    {item.title}
                  </h1>
                  <p className="text-xl text-gray-100 mb-5 lg:w-1/2 mx-auto">
                    {item.desc}
                  </p>
                  <button className="py-4 px-6 border-2 border-[#F9C565] text-[#F9C565] hover:bg-[#F9C565] hover:text-white rounded-lg text-lg font-semibold">
                    {item.buttonText}
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
