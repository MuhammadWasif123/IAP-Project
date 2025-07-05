import DaniyalImg from "../../assets/images/daniyal-pic.jpeg";
import MubeenImg from "../../assets/images/mubeen-pic.jpeg";
import HassanImg from "../../assets/images/hassan-pic.jpeg";
import WasifImg from "../../assets/images/wasif-pic.jpeg";
import { NavbarSimple } from "../../components/navbar/Navbar";
import FooterSection from "../../components/footerSection/footerSection";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedCard = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const TeamMember = () => {
  return (
    <>
      <NavbarSimple />
      <section id="our-team" className="bg-gray-100 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary text-[#8E24AA]">
            Meet the Team
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
            A small team of passionate developers, designers, and strategists
            building powerful contact management solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard>
              <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center flex flex-col h-full">
                <img
                  src={WasifImg}
                  alt="Team Member"
                  className="w-full rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Muhammad Wasif Khan
                </h3>
                <p className="text-gray-700">
                  Role: Junior Front End Developer (iMarkPlace)
                </p>
                <p className="text-gray-700 mt-2">Seat No: EB22210006148</p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center flex flex-col h-full">
                <img
                  src={MubeenImg}
                  alt="Team Member"
                  className="w-full rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Mubeen Musani</h3>
                <p className="text-gray-700">
                  Role: Backend Developer (Node JS)
                </p>
                <p className="text-gray-700 mt-2">Seat No: EB22210006089</p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center flex flex-col h-full">
                <img
                  src={HassanImg}
                  alt="Team Member"
                  className="w-full rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Hassan Ramzan</h3>
                <p className="text-gray-700">Role: Data Analyst</p>
                <p className="text-gray-700 mt-2">Seat No: EB22210006046</p>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center flex flex-col h-full">
                <img
                  src={DaniyalImg}
                  alt="Team Member"
                  className="w-full rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Daniyal Ali</h3>
                <p className="text-gray-700">Role: Mern Stack Developer</p>
                <p className="text-gray-700 mt-2">Seat No: EB22210006033</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default TeamMember;
