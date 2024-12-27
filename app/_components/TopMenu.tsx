'use client'
import Link from "next/link";
import React from "react";
import { menuList } from "@/app/_data/menu";

function TopMenu(){
  return (
    <div className="bg-[#333333] text-white py-3 sticky top-0 left-0 z-10">
      <div className="container flex items-center">
        <div className="basis-1/6">
          <Link href="/">GoodFood</Link>
        </div>
        <div className="basis-4/6 flex items-center gap-x-10 justify-center">
          {menuList.map((item) => {
            return (
              <Link key={item.id} href={item.href} className="font-semibold text-lg uppercase text-[#F9C565] hover:underline underline-offset-4 py-2">
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="basis-1/6 text-right">
        <button className="bg-[#F9C565] px-7 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-[#F9C565]">Booking</button>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
