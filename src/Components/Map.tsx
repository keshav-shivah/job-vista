import React from "react";

const Map = () => {
  return (
    <section>
      <div className="bg-white py-8 rounded shadow-md w-full mt-[70px]">
        {/* <!-- Map Container --> */}
        <div className="relative h-64">
          {/* <!-- Replace the following iframe with your actual map embed code --> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2256679997586!2d76.69504167537215!3d30.712055674594218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feff7e0e2421f%3A0x1932dde5487c0b94!2sShivah%20Web%20Tech!5e0!3m2!1sen!2sin!4v1704367328436!5m2!1sen!2sin"
            width="100%"
            height="100%"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            className="absolute inset-0 w-full h-full rounded-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
