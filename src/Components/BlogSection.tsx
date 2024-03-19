import React from "react";
import Image from "next/image";
import { map } from "lodash";
import { JobCard } from "@/helper/JobCard";

const BlogSection = () => {
  return (
    <section className="w-full  pt-[100px] pb-[0px]">
      <div className=" ">
        <div className=" blog bg-[#e9ebee] pt-[150px] pb-[150px] text-center ">
          <h1 className="title_font lg:text-[80px] xl:text-[80px] font-medium  leading-tight heading_text text-[45px] mt-0 ">
            Blog
          </h1>
          <h2 className="text-2xl">Read our blog from top talents</h2>
        </div>
        <div className="lg:flex xl:flex lg:flex-wrap xl:flex-wrap lg:gap-[1.3rem] xl:gap-[2.5rem] lg:mt-[50px] xl:mt-[50px] md:block md:w-full p-[20px]  ">
          {map(JobCard, (item, index) => (
            <div className=" block lg:w-[48.52%] xl:w-[48.52%] justify-center  bg-slate-100 pb-7 md:w-full ">
              <div className=" flex overflow-hidden justify-center">
                {" "}
                <Image
                  className="hover:transition ease-in-out hover:scale-110 duration-300  mt-10"
                  src={item.src}
                  alt=""
                  height={400}
                  width={500}
                />
              </div>
              <div className="pt-7 lg:px-[100px] py-5 ml-[70px] md:pl-[50px] lg:m-0 ">
                <p className="text-xl hover:text-lime-700">{item.date}</p>
                <h3 className="text-4xl mb-6 mt-6 hover:text-lime-700 font-bold">
                  {item.paragraph}
                </h3>
                <a href="#" className="mb-6 hover:text-lime-700 font-bold">
                  {item.button}
                  <i className="fa-solid fa-arrow-right "></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
