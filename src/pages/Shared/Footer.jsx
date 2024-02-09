import React from "react";

import logo from "../../assets/images/banner/logo1.png";
const Footer = () => {
  return (
    <div className="mt-8">
      <div className=" bg-[#374151] text-white  ">
        <div className="container mx-auto pt-14 pb-12 grid grid-cols-12 gap-5 md:gap-10 justify-between md:justify-start">
          {/* about */}
          <div className=" space-y-3 md:space-y-6 text-center xl:text-left col-span-12 xl:col-span-4">
            <h3 className="text-xl font-medium">Contact Us</h3>
            <p className="text-gray-400">
              Hi, we are always open for cooperation and suggestions, contact us
              in one of the ways below:
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="space-y-1 bg-gray-600 py-4 px-3 xl:p-0 xl:bg-transparent rounded xl:rounded-none w-full sm:w-[calc(100%/2-10px)] lg:w-[calc(100%/4-12px)] xl:w-[calc(100%/2-30px-1px)]">
                <p className="uppercase text-xs text-gray-400">PHONE NUMBER</p>
                <p className="text-sm">01999870111</p>
              </div>
              <div className="space-y-1 bg-gray-600 py-4 px-3 xl:p-0 xl:bg-transparent rounded xl:rounded-none w-full sm:w-[calc(100%/2-10px)] lg:w-[calc(100%/4-12px)] xl:w-[calc(100%/2-30px-1px)]">
                <p className="uppercase text-xs text-gray-400">EMAIL ADDRESS</p>
                <p className="text-sm">asrafulislam.dev@gmail.com</p>
              </div>
              <div className="space-y-1 bg-gray-600 py-4 px-3 xl:p-0 xl:bg-transparent rounded xl:rounded-none w-full sm:w-[calc(100%/2-10px)] lg:w-[calc(100%/4-12px)] xl:w-[calc(100%/2-30px-1px)]">
                <p className="uppercase text-xs text-gray-400">OUR LOCATION</p>
                <p className="text-sm">715 Fake Street, New York 10021 USA</p>
              </div>

              <div className="space-y-1 bg-gray-600 py-4 px-3 xl:p-0 xl:bg-transparent rounded xl:rounded-none w-full sm:w-[calc(100%/2-10px)] lg:w-[calc(100%/4-12px)] xl:w-[calc(100%/2-30px-1px)]">
                <p className="uppercase text-xs text-gray-400">WORKING HOURS</p>
                <p className="text-sm">Mon-Sat 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
          {/* about end */}

          {/* information */}
          <div className="space-y-3 md:space-y-6 text-center md:text-start col-span-6 md:col-span-3 xl:col-span-2">
            <h3 className="text-xl font-medium">Information</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <p>Delivery Information</p>
              <p>Privacy Policy</p>
              <p>Brands</p>
              <p>Contact Us</p>
              <p>Returns</p>
              <p>Site Map</p>
            </div>
          </div>
          {/* information end */}
          {/* my account  */}

          <div className="space-y-3 md:space-y-6 text-center md:text-start col-span-6 md:col-span-3 xl:col-span-2">
            <h3 className="text-xl font-medium">My Account</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <p>Store Location</p>
              <p>Order History</p>
              <p>Wish List</p>
              <p>Newsletter</p>
              <p>Special Offers</p>
            </div>
          </div>
          {/* my account end */}
          {/* newsletter */}

          <div className="space-y-3 md:space-y-6 text-center xl:text-left col-span-12 xl:col-span-4">
            <h3 className="text-xl font-medium">Newsletter</h3>
            <div className=" space-y-3">
              <p className="text-gray-400">
                Enter your email address below to subscribe to our newsletter
                and keep up to date with discounts and special offers.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-x-3 max-w-lg w-full">
                <input
                  className="bg-gray-600 border-2 w-full border-gray-600 px-3 py-2 rounded focus:ring-0 focus:border-gray-600 focus:bg-gray-700 focus:outline-none placeholder-gray-400"
                  type="gmail"
                  placeholder="email@example.com"
                />
                <button className="border-none bg-[#c67b0a] text-white py-2 px-5 border-2 border-brand rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400">Follow me on social networks</p>
            </div>
          </div>
          {/* newsletter end */}
        </div>
      </div>
      <div className="container py-5 flex items-center justify-center md:justify-between flex-wrap gap-5">
        <p className="text-sm text-gray-400 md:text-start text-center">
          © 2023 All Rights Reserved. Developed by
          <a
            className="hover:underline text-brand whitespace-nowrap"
            href="https://github.com/DevAsrafulIslam"
          >
            <span className=" ml-2 text-[#ecba04]"> Asraful Islam</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
