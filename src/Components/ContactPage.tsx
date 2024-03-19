import index from "@/pages/contact";
import { map } from "lodash";
import React from "react";
import { ContactCard } from "@/helper/ContactCard";
const ContactPage = () => {
  return (
    <section>
      <div className="contactus  ">
        <div className=" w-full bg-[#e9ebee] pt-[150px] pb-[150px] text-center contact ">
          <h1 className="title_font lg:text-[80px] xl:text-[80px] font-medium  leading-tight heading_text text-[45px] mt-0 max-w-7xl mx-auto">
            Get in touch
          </h1>
          <h2 className=" lg:text-[40px] xl:text-[40px] font-medium  leading-tight text-[20px] pt-5 md:text-[30px] ">
            We love to respond to your queries
          </h2>
          <h3 className=" lg:text-[22px] xl:text-[22px]  leading-tight  pt-5 md:text-[25px] text-[20px]">
            We always want to hear from you!
            <br /> Let us know how we can best help you and we'll do our very
            best.
          </h3>
        </div>
        <div className="flex max-w-7xl mx-auto justify-center mt-[70px] md:flex md:flex-wrap md:w-full  flex-wrap ">
          {map(ContactCard, (item, index) => (
            <div className="p-8 text-center items-center justify-center  flex flex-col ">
              <div className="  bg-yellow-100  rounded-full w-20 h-20  ">
                <i
                  className={`  text-[40px] text-yellow-600 ${item.icon} ${item.size} `}
                ></i>
              </div>

              <div className="mt-7">
                <h3 className="text-[24px]">{item.heading}</h3>
                <p className="text-[17px] text-center">{item.para} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full mt-[70px] mb-[40px]">
        <div className="bg-white p-8 rounded shadow-md w-full">
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Name*
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder=" Your Name*"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder=" Email Address*"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Subject (optional)*
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder=" Write about the subject here..."
              />
            </div>
            <div className="mb-4 ">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Message*
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 h-48"
                placeholder=" Your message*"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
