import { title } from "@/Enum/title.enum";
import React from "react";
import JobListing from "./JobListing";

const DemandingCategory = () => {
  return (
    <>
      <section className="lg:px-16 px-4 lg:mb-36 max-w-7xl mx-auto md:p-3 md:mt-[40px] md:px-[30px]">
        <div>
          <div className="flex justify-between items-center lg:mb-16 md:mb-10 ">
            <h2 className="title_font lg:text-5xl font-medium text-[40px] mb-3">
              {title.demandingCategory}
            </h2>
            <p className="border-b-2 border-yellow-500 text-yellow-500 font-semibold cursor-pointer register_btn">
              Explore all fields{" "}
              <i className="fa fa-angle-right transition-all"></i>
            </p>
          </div>
          <div className="flex items-center lg:justify-between flex-wrap justify-evenly md:gap-x-2 md:gap-y-2 md:justify-start gap-4 lg:gap-0">
            <div className="font-semibold text-yellow-600 bg-yellow-100 px-5 py-4 rounded-full border border-yellow-100 hover:bg-white hover:border hover:border-yellow-600 cursor-pointer">
              <i className="fa-solid fa-pen-to-square mr-3 text-lg"></i>UI/UX
              Design
            </div>
            <div className="font-semibold text-yellow-600 bg-yellow-100 px-5 py-4 rounded-full border border-yellow-100 hover:bg-white hover:border hover:border-yellow-600 cursor-pointer">
              <i className="fa fa-code mr-3 text-lg"></i>Development
            </div>
            <div className="font-semibold text-yellow-600 bg-yellow-100 px-5 py-4 rounded-full border border-yellow-100 hover:bg-white hover:border hover:border-yellow-600 cursor-pointer">
              <i className="fa fa-sliders mr-3 text-lg"></i>Editing
            </div>
            <div className="font-semibold text-yellow-600 bg-yellow-100 px-5 py-4 rounded-full border border-yellow-100 hover:bg-white hover:border hover:border-yellow-600 cursor-pointer">
              <i className="fa fa-house mr-3 text-lg"></i>Accounting
            </div>
            <div className="font-semibold text-yellow-600 bg-yellow-100 px-5 py-4 rounded-full border border-yellow-100 hover:bg-white hover:border hover:border-yellow-600 cursor-pointer">
              <i className="fa fa-shopping-bag mr-3 text-lg"></i>Editing
            </div>
            <div className="font-semibold text-yellow-600 bg-yellow-100 px-5 py-4 rounded-full border border-yellow-100 hover:bg-white hover:border hover:border-yellow-600 cursor-pointer">
              <i className="fa fa-phone mr-3 text-lg"></i>Telemarketing
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemandingCategory;
