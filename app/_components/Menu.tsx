"use client";
import Image from "next/image";
import React, { useState } from "react";
import { foodList } from "@/app/_data/foodMenu";

function Menu() {
  const [category, setCategory] = useState("main");
  return (
    <div className="bg-black py-20 lg:h-[90vh]">
      <div className="container">
        <div>
          <ul className="flex justify-center items-center gap-x-10 lg:gap-x-28 text-white text-2xl">
            <li>
              <button
                className={
                  category == "main"
                    ? "text-[#FAC564] underline underline-offset-8 decoration-[#FAC564]"
                    : ""
                }
                onClick={() => setCategory("main")}
              >
                Main
              </button>
            </li>
            <li>
              <button
                className={
                  category == "desserts"
                    ? "text-[#FAC564] underline underline-offset-8 decoration-[#FAC564]"
                    : ""
                }
                onClick={() => {
                  setCategory("desserts");
                }}
              >
                Desserts
              </button>
            </li>
            <li>
              <button
                className={
                  category == "drinks"
                    ? "text-[#FAC564] underline underline-offset-8 decoration-[#FAC564]"
                    : ""
                }
                onClick={() => setCategory("drinks")}
              >
                Drinks
              </button>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-7 mt-20 px-3 md:px-0">
          {foodList.map((categories) => {
            if (categories.cate == category) {
              return categories.items.map((item) => {
                return (
                  <div
                    className="flex items-center justify-between"
                    key={item.id}
                  >
                    <div className="flex items-center gap-x-5">
                      <Image
                        src={item.img}
                        alt="drinks.png"
                        className="rounded-full border-2 w-16 lg:w-24"
                        width={80}
                        height={80}
                      />
                      <div>
                        <h1 className="text-white lg:text-xl font-bold mb-1">
                          {item.title}
                        </h1>
                        <p className="text-white text-base lg:text-lg lg:font-bold text-gray-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white text-2xl lg:text-3xl font-semibold">
                        ${item.price}
                      </h3>
                    </div>
                  </div>
                );
              });
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
