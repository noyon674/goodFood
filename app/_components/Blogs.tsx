import Image from "next/image";
import React from "react";
import { blogData} from "@/app/_data/blogs"

function Blogs() {
  return (
    <div className="py-28">
      <div className="container px-3 lg:px-0">
        <h3 className="text-2xl text-center uppercase text-gray-800 font-semibold mb-20 underline underline-offset-8 decoration-[#FAC564] decoration-4">
        OUR BLOGS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {
                blogData.map(blog=>(
                blog.id <= 4 ? <div className=" shadow-md rounded-lg" key={blog.id}>
                <div className="relative w-full h-60">
                    <Image src='/img/blog1.jpg' className="rounded-t-lg" alt="blog.jpg" fill/>
                </div>
                <div className="pt-3 px-3 pb-10">
                    <h1 className="text-3xl text-gray-800">Lorem ipsum dolor sit amet.</h1>
                    <div className="flex divide-x-4 divide-[#FAC564] mb-3 mt-1">
                        <span className="text-gray-600 font-semibold capitalize">author</span>
                        <span className="ml-10 pl-10 text-gray-600 font-semibold">23, 2025</span>
                    </div>
                    <p className="text-xl text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat voluptate nobis voluptatum nostrum, vero mollitia cumque architecto! Tenetur eveniet molestias illum iusto dolorum vel voluptates ex beatae? Totam, ratione.</p>
                </div>
            </div> : ""
                ))
            }
        </div>
        <div className="text-center mt-10">
            <button className="bg-black text-[#FAC564] hover:bg-[#FAC564] hover:text-black transition duration-300 ease-in-out py-5 px-16 rounded-lg  text-xl font-semibold">All Blogs</button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
