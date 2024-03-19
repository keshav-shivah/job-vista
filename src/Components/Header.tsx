"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { title } from "@/Enum/title.enum";
import NextLink from "next/link";
import { route } from "@/Enum/route.enum";
interface IProps {
  setModal?: any;
  setRegister?: any;
}

const Header = (props: IProps) => {
  const { setModal, setRegister } = props;
  const [handleDropdown, setHandleDropdown] = useState(false);
  const handleCandidate = () => {
    setHandleDropdown(!handleDropdown);
  };
  const [topbar, setTopbar] = useState(false);
  const handleTop = () => {
    setTopbar(!topbar);
  };

  const ref: any = useClickAway(() => {
    setHandleDropdown(false);
  });
  const [down, setDown] = useState(false);
  const handleDown = () => {
    setDown(!down);
  };

  const handleModal = () => {
    setModal(true);
  };
  const handleRegister = () => {
    setRegister(true);
  };
  return (
    <>
      <header className="bg-gray-50 fixed top-0 left-0 z-50 w-full header_shadow">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src="/img/Job_vista.png" alt="" height={50} width={150} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={handleTop}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NextLink
              href={route.home}
              className="text-sm font-semibold leading-6 text-black-500"
            >
              {title.home}
            </NextLink>
            <NextLink
              href={route.job}
              className="text-sm font-semibold leading-6 text-black-500"
            >
              {title.job}
            </NextLink>
            <a
              href={route.blog}
              className="text-sm font-semibold leading-6 text-black-500"
            >
              {title.blog}
            </a>
            <a
              href={route.aboutus}
              className="text-sm font-semibold leading-6 text-black-500"
            >
              {title.aboutus}
            </a>
            <a
              href={route.contact}
              className="text-sm font-semibold leading-6 text-black-500"
            >
              {title.contact}
            </a>
            <div ref={ref} className="relative">
              {/* <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black-500"
                onClick={handleCandidate}
              >
                {title.dashboard}
                <svg
                  className={`h-5 w-5 flex-none text-gray-400 transition ${
                    handleDropdown ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button> */}
              <div
                className={`absolute -left-4 top-full z-10 mt-3 w-screen max-w-fit overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ease-in duration-200 ${
                  handleDropdown ? "" : "opacity-0 invisible"
                }`}
              >
                {/* <div className="px-4 py-2">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex-auto">
                      <a
                        href="#"
                        className="block font-semibold text-gray-900 whitespace-nowrap"
                      >
                        {title.candidateDashboard}
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex-auto">
                      <a
                        href="#"
                        className="block font-semibold text-gray-900 whitespace-nowrap"
                      >
                        {title.employerDashboard}
                        <span className="absolute inset-0"></span>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className=" hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            <a
              className="text-sm font-semibold leading-6 text-gray-900 mr-4"
              onClick={handleModal}
            >
              {title.logIn}
            </a>
            <a
              onClick={handleRegister}
              className="text-sm font-semibold leading-6 text-gray-900 bg-yellow-300 p-3 rounded-md register_btn"
            >
              {title.register}
              <i className="fa fa-arrow-right transition-all pl-1"></i>
            </a>
          </div>
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 hidden"></div>
          <div
            className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10  ${
              topbar ? "" : "hidden"
            }`}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src="/img/Job_vista.png"
                  alt=""
                  height={50}
                  width={150}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={handleTop}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <NextLink
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Job
                  </NextLink>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
                <div className="-mx-3">
                  <button
                    onClick={handleDown}
                    type="button"
                    className=" flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 "
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                  >
                    Dashboard
                    <svg
                      className="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="mt-2 space-y-2" id="disclosure-1">
                    <a
                      href="#"
                      className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                        !down ? "" : "hidden"
                      }`}
                    >
                      Candidate Dasboard
                    </a>
                    <a
                      href="#"
                      className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                        !down ? "" : "hidden"
                      }`}
                    >
                      Employer Dasboard
                    </a>
                  </div>
                </div>
                <div className="py-6 flex justify-between">
                  <a
                    href="#"
                    className=" text-sm-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleModal}
                  >
                    Log in
                  </a>
                  <a
                    href="register"
                    className="register_btn bg-yellow-400 text-sm-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                    onClick={handleRegister}
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
