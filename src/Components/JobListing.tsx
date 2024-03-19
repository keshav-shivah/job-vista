"use client";
import Image from "next/image";
import React, { useState } from "react";
import ListingCard from "./ListingCard";
import { map } from "lodash";
import { Jobs } from "@/helper/Jobs";
import { Jobs2 } from "@/helper/Jobs2";
import JobModal from "./JobModal";
import CountUp from "react-countup";
// interface IProps {
//   job?: any;
//   setJob?: any;
// }

const JobListing = () => {
  const [job, setJob] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleBookmark = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="lg:px-16 px-4 lg:py-20 lg:mb-24 mx-auto bg-yellow-50 md:mt-[40px] md:px-[30px] ">
        <div className="flex items-center lg:justify-between lg:mb-20 max-w-7xl mx-auto md:block md:p-2 flex-wrap ">
          <h2 className=" text-6xl font-medium text-[40px] md:mt-10 md:mb-10 mt-[50px]">
            New job listing
          </h2>
          <div className="flex items-center max-w-7xl mx-auto md:mt-6 flex-wrap justify-start mt-[40px] gap-[15px] ">
            <p className="mr-7 text-yellow-600 font-semibold border-b-2 border-yellow-600 pb-1 text-lg cursor-pointer">
              All Categories
            </p>
            <p className="mr-7 text-black font-semibold text-lg cursor-pointer">
              Design
            </p>
            <p className="mr-7 text-black font-semibold text-lg cursor-pointer">
              Developer
            </p>
            <p className="mr-7 text-black font-semibold text-lg cursor-pointer">
              Marketing
            </p>
            <p className="text-black font-semibold text-lg cursor-pointer">
              Business
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-stretch justify-between max-w-7xl mx-auto lg:w-[100%]  md:mt-10 md:flex w-80 md:mb-10 md:w-full mt-[40px] ">
          {map(Jobs, (item, index) => (
            <ListingCard
              job={job}
              setJob={setJob}
              src={item.src}
              jobType={item.type}
              jobTitle={item.title}
              date={item.date}
              place={item.place}
              key={index}
              isBookmark={activeIndex === index}
              toggle={() => handleBookmark(index)}
            />
          ))}
          <div className=" bg-yellow-300 lg:px-9 lg:py-6 rounded-xl mb-10 lg:w-[30%]  relative hover:-translate-y-2 listing_last  max-w-7xl mx-auto w-full  md:px-20 md:py-40 p-[20px] py-40">
            <h3 className="text-7xl title_font mb-5">
              <CountUp end={13} />
              k+
            </h3>
            <h3 className="text-xl font-medium">Job already posted</h3>
            <div className="absolute right-9 bottom-9">
              <button
                type="button"
                className="border border-gray-700 rounded-full px-4 py-3 listing_last_btn"
              >
                <i className="fa fa-arrow-right text-4xl -rotate-45"></i>
              </button>
            </div>
          </div>
        </div>
        {job && <JobModal job={job} setJob={setJob} />}
      </section>
    </>
  );
};

export default JobListing;
