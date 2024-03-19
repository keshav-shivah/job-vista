import React from "react";

const FooterBanner = () => {
  return (
    <>
      <section className="footer_banner lg:px-16 px-4 lg:py-32 mx-auto relative md:mt-[40px ] mt-[100px] p-[30px]">
        <div className="text-white flex flex-wrap items-center justify-between relative z-10 max-w-7xl mx-auto md:flex-wrap md:text-center md:px-[45px] md:py-[30px]">
          <h2 className="text-6xl text-[40px] title_font lg:text-[70px]">
            Complete job <br className="md:hidden lg:block" />
            portal for everyone.
          </h2>
          <div>
            <p className="text-2xl mb-10">
              Find your dream job & earn from all world{" "}
              <br className="md:hidden" />
              the leading brands.
            </p>
            <button className="border border-white rounded-md px-4 py-3 font-medium transition_all hover:bg-yellow-600 mr-4">
              Looking for job.
            </button>
            <button className="bg-yellow-600 rounded-md px-8 py-3 font-medium transition_all hover:bg-yellow-700 mr-4">
              Start Hiring
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterBanner;
