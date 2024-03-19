import { AboutCard } from "@/helper/AboutCard";
import { map } from "lodash";
import React, { useState } from "react";

const AboutUs = () => {
  return (
    <section className="w-full  pt-[100px] pb-[0px]">
      <div className=" ">
        <div className="aboutus bg-[#e9ebee] pt-[150px] pb-[150px] text-center">
          <h1 className="title_font lg:text-[80px] xl:text-[80px] font-medium  leading-tight heading_text text-[45px] mt-0">
            About us
          </h1>
        </div>
        <div className="flex max-w-7xl mx-auto pt-[100px] pb-[100px]">
          <div className="w-[100%]">
            <h2 className="title_font lg:text-[80px] xl:text-[70px] font-medium  leading-tight heading_text text-[45px]">
              We’ve been <br /> helping customer <br />
              globally.
            </h2>
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-green-900">
              Who we are ?
            </h3>
            <p>
              Our founders Dustin Moskovitz and Justin lorem Rosenstein met
              while leading Engineering teams at Facebook quesi. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="pt-5">
              <h3 className="text-[20px] font-bold text-green-900">
                What's our goal{" "}
              </h3>
              <p>
                Our founders Dustin Moskovitz and Justin lorem Rosenstein met
                while leading Engineering teams at Facebook quesi. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="pt-5">
              <h3 className="text-[20px] font-bold  text-green-900">
                our vision
              </h3>
              <p>
                Our founders Dustin Moskovitz and Justin lorem Rosenstein met
                while leading Engineering teams at Facebook quesi. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className=" pb-[150px] flex max-w-7xl mx-auto">
          <div className="w-[100%]">
            <img src="/img/aboutus1.jpg"></img>
          </div>
          <div className="w-[100%] ml-8 ">
            <h2 className="title_font lg:text-[80px] xl:text-[70px] font-medium  leading-tight heading_text text-[45px]">
              Get over 50.000+ <br />
              talented experts in <br />
              job vista.
            </h2>
            <p className="mt-5 mb-5">
              A full hybrid workforce management tools are yours to use, as well
              as access to our top 1% of talent.
            </p>
            <p>
              <i className="fa-solid fa-check p-2"></i>
              Seamless searching
            </p>
            <p>
              <i className="fa-solid fa-check p-2"></i>Get top 3% experts for
              your project
            </p>{" "}
            <p>
              <i className="fa-solid fa-check p-2"></i>Protected payments system
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="title_font lg:text-[80px] xl:text-[70px] font-medium  leading-tight heading_text text-[45px]">
            Our team
          </h2>
          <p className="text-[20px]">
            Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus
            eos totam in dolorum. Nemo vel facere repellendus ut eos dolores
            similique.
          </p>
        </div>
        <div className="mt-[100px] mb-[100px] max-w-7xl mx-auto justify-center flex flex-wrap">
          {map(AboutCard, (item, index) => (
            <div className="w-[25%] text-center flex flex-col items-center">
              <img src={item.src} className="rounded-full" width={100}></img>
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.post}</p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mb-[100px]">
          <h2 className="title_font lg:text-[80px] xl:text-[70px] font-medium  leading-tight heading_text text-[45px] max-w-7xl mx-auto text-center">
            We love creators
          </h2>
          <p className="text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <p className="text-center">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <p>
            Erat pellentesque dictumst ligula porttitor risus eget et eget.
            Ultricies tellus felis id dignissim eget. Est augue maecenas risus
            nulla ultrices congue nunc tortor. Enim et nesciunt doloremque
            nesciunt voluptate. Et vitae blandit facilisi magna lacus commodo.
            Vitae sapien duis odio id et. Id blandit molestie auctor fermentum
            dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius
            vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac
            tempor et ut. Ac lorem vel integer orci.
          </p>
        </div>
        <div className="flex max-w-7xl mx-auto justify-between mb-[100px]">
          <div
            className="flex flex-col border-l-4 border-black pl-[10px]
          "
          >
            <div>
              <h2 className="text-[25px] font-bold">2012</h2>
            </div>
            <div>
              <p>Business was founded</p>
            </div>
          </div>
          <div className="flex flex-col border-l-4 border-black pl-[10px]">
            <div>
              <h2 className="text-[25px] font-bold">120+</h2>
            </div>
            <div>
              <p>People on the team</p>
            </div>
          </div>
          <div className="flex flex-col border-l-4 border-black pl-[10px]">
            <div className="">
              <h2 className="text-[25px] font-bold">250k</h2>
            </div>
            <div>
              <p>Users on the platform</p>
            </div>
          </div>
          <div className="flex flex-col border-l-4 border-black pl-[10px]">
            <div className="">
              <h2 className="text-[25px] font-bold">$70M</h2>
            </div>
            <div>Paid out to creators</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
