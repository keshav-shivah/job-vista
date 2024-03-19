import Image from "next/image";
import React, { useState } from "react";

interface IProps {
  job?: any;
  setJob?: any;
  src: string;
  jobType: string;
  jobTitle: string;
  date: string;
  place: string;
  isBookmark: boolean;
  toggle: () => void;
}

const ListingCard = ({
  src,
  jobType,
  jobTitle,
  date,
  place,
  isBookmark,
  job,
  setJob,
  toggle,
}: IProps) => {
  const handleJob = () => {
    setJob(true);
  };

  return (
    <>
      <div className="bg-white p-9 rounded-tl-xl rounded-tr-xl listing_shadow transition mb-10 lg:w-[30%] relative max-w-7xl mx-auto  md:w-full ">
        <div className="flex items-center justify-between mb-14 ">
          <Image src={src} alt={"listing_logo"} width={45} height={45} />
          <i
            onClick={toggle}
            className={`fa-regular fa-bookmark text-xl cursor-pointer hover:bg-yellow-100 px-[18px] py-[15px] rounded-full ${
              isBookmark
                ? "fa-solid fa-bookmark text-yellow-600"
                : "fa-regular fa-bookmark text-gray-500"
            }`}
          ></i>
        </div>
        <p className="text-xl font-medium text-yellow-600 bg-yellow-100 px-3 py-2 rounded-xl mb-8 inline-block">
          {jobType}
        </p>
        <h3 className="text-2xl font-semibold mb-6 cursor-pointer hover:text-yellow-600">
          {jobTitle}
        </h3>
        <p className="text-gray-400 font-light text-lg mb-20 max-w-7xl mx-auto">
          {date}
        </p>
        <div className="flex items-center justify-between absolute bottom-9 left-9 card_btn ">
          <p className="font-medium text-lg">{place}</p>{" "}
          <p
            className={
              "font-semibold bg-yellow-300 rounded-full px-5 py-1 cursor-pointer "
            }
            onClick={handleJob}
          >
            Apply
          </p>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
