import React from "react";
import ContactBannerImg from "../../assets/images/contact-banner.jpg"

const bannerSection = () => {
  return (
    <>
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row-reverse md:gap-8 items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-4xl text-center md:text-left text-[#8E24AA] leading-tight font-semibold">
              Simplify the way you manage your contacts.
            </h2>
            <h3 className="mt-6 md:mt-4 text-md lg:text-lg text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              Our Contact Management System helps you organize, track, and
              maintain all your business relationships in one place. Stay
              connected, boost productivity, and never miss a follow-up again.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button className="w-full sm:w-40 px-4 py-3 rounded-full font-semibold text-md bg-[#8E24AA] text-white">
                Get Contact
              </button>
              <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded-full font-semibold text-md bg-white text-[#8E24AA] border-2 border-gray-500">
             Contact List
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={ContactBannerImg} className="rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default bannerSection;
