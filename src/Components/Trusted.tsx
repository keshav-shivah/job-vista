import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import index from "@/pages/landing";
import { map } from "lodash";
import { Card } from "@/helper/Card";
const Trusted = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Trusted">
      <>
        <section className="lg:px-16 px-4 lg:mb-24 max-w-7xl mx-auto md:mt-[40px] md:my-[60px] ">
          <div className="mb-20">
            <h2 className="title_font text-center lg:text-6xl  lg:text-[70px] mt-[20px] text-[40px] md:mt-10">
              Trusted by leading startups.
            </h2>
          </div>{" "}
          <div className="slider  justify-between text-center md:w-full  ">
            <Slider {...settings}>
              {map(Card, (item, index) => (
                <div className="bg-yellow-950 transition hover:bg-green-700 hover:transition text-white rounded-3xl p-10  md:w-full max-w-[95%] md:text-[30px]">
                  <div>
                    <Image
                      src={item.src}
                      height={100}
                      width={200}
                      alt="image"
                    />
                  </div>
                  <h3
                    className=" mt-12 mb-12 text-start lg:text-[36px] md:text-[20px] "
                    key={index}
                  >
                    <blockquote>
                      “Seattle opera simplifies Performance planning with jobi
                      eSignature.”
                    </blockquote>
                  </h3>
                  <p className=" border-b-2 border-white mb-10 pb-10  text-start md:text-[18px]">
                    James Brower, Lead Designer
                  </p>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-xl">4.5 Excellent</h4>
                    <div className="flex">
                      <i className="fa-solid fa-star"></i>{" "}
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </>
    </div>
  );
};

export default Trusted;
