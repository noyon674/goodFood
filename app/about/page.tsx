import React from "react";
import AboutWelcome from '@/app/_components/about/AboutWelcome'
import AboutService from '@/app/_components/about/AboutService'
import OurChef from "../_components/about/OurChef";

function page() {

  return (
    <div>
      <div className=" relative bg-aboutBG h-[50vh] xl:h-[60vh] bg-center bg-cover bg-no-repeat">
        <div className=" absolute h-full w-full bg-[#11111194] flex justify-center items-center">
          <h2 className="text-5xl font-bold text-white border-x-4 px-10 uppercase border-[#FAC564]">
            About
          </h2>
        </div>
      </div>
        {/* welcome sectin */}
        <AboutWelcome />
        <AboutService />
        <OurChef />
    </div>
  );
}

export default page;
