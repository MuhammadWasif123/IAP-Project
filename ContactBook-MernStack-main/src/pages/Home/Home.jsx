import React from "react";
import { NavbarSimple } from "../../components/navbar/Navbar";
import HeroSec from "../../components/hero/HeroSec";
import BannerSection from "../../components/bannerSection/bannerSection";
import FaqSection from "../../components/faqSection/faqSection";
import FooterSection from "../../components/footerSection/footerSection";

const Home = () => {
  return (
    <>
      <NavbarSimple />
      <div className="mt-18">
        <HeroSec />
        <BannerSection />
        <FaqSection />
      </div>
      <FooterSection />
    </>
  );
};

export default Home;
