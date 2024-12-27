"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FcBusinessman } from "react-icons/fc";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function Feedback() {
  const comments = [{}, {}, {}, {}, {}, {}, {}];
  const breakPoint = {
    sm: { preview: 1, design: "mx-5 sm:hidden" },
    md: { preview: 2, design: "mx-5 hidden sm:block lg:hidden" },
    lg: { preview: 3, design: "mx-5 hidden lg:block xl:mx-20" },
  };

  const showSlide = (preview, design)=>{
   return <div className={design}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={preview}
            autoplay
            loop
          >
            {comments.map((comment, index) => (
              <SwiperSlide key={index} className="px-2 lg:px-5 rounded-lg mt-20 border-2 py-5">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo iste voluptatum quidem minus facere nisi
                    distinctio dictaliquid, delectus obcaecati.
                  </p>
                  <div className="flex items-center divide-x-4 divide-[#FAC564] mt-5">
                    <FcBusinessman className="text-7xl border-2 rounded-full" />
                    <span className="font-semibold ml-5 pl-5 text-gray-600">
                      Noyon
                    </span>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  }
  return (
    <div className="pb-40">
      <div className="container">
        <div className="text-center">
          <h4 className="text-2xl text-[#FAC564] font-bold">Testimonials</h4>
          <h2 className="text-6xl mt-2 text-gray-800 font-Montserrat">
            What they said
          </h2>
        </div>
        {showSlide(breakPoint.lg.preview, breakPoint.lg.design)}
        {showSlide(breakPoint.sm.preview, breakPoint.sm.design)}
        {showSlide(breakPoint.md.preview, breakPoint.md.design)}
      </div>
    </div>
  );
}

export default Feedback;
