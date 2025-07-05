import React from "react";
import { NavbarSimple } from "../../components/navbar/Navbar";
import HeroSec from "../../components/hero/HeroSec";
import BannerSection from "../../components/bannerSection/bannerSection";
import FaqSection from "../../components/faqSection/faqSection";
import FooterSection from "../../components/footerSection/footerSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <NavbarSimple />
      <div className="mt-18">
        <AnimatedSection>
          <HeroSec />
        </AnimatedSection>
        <AnimatedSection>
          <BannerSection />
        </AnimatedSection>
        <AnimatedSection>
          <FaqSection />
        </AnimatedSection>
      </div>
      <FooterSection />
    </>
  );
};

export default Home;