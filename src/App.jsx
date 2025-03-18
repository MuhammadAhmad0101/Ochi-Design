import { useEffect } from "react";
import About from "./Components/About";
import Cards from "./Components/Cards";
import Context from "./Components/Context/FeaturedContext";
import Cta from "./Components/Cta";
import EyesBall from "./Components/EyesBall";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import Reviews from "./Components/Reviews";
import OchiMarquee from "./OchiMarquee";
import LocomotiveScroll from "locomotive-scroll";
import { motion, useScroll } from "motion/react";

const App = () => {
      useEffect(() => {
            window.addEventListener("load", function () {
                  const scrollPosition = localStorage.getItem("scrollPosition");
                  if (scrollPosition !== null) {
                        window.scrollTo(0, parseInt(scrollPosition, 10));
                  }
            });
      }, []);
      window.addEventListener("beforeunload", function () {
            localStorage.setItem("scrollPosition", window.scrollY);
      });
      const { scrollYProgress } = useScroll();
      onscroll = () => {
            console.log(scrollYProgress.current * 100);
      };

      new LocomotiveScroll();
      return (
            <Context>
                  <div className="w-full font-Satoshi relative min-h-screen bg-[#F1F1F1]">
                        <motion.section style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 z-40 bg-[#000000] w-0 h-3 rounded-md"></motion.section>
                        <Navbar />
                        <Header />
                        <OchiMarquee />
                        <About />
                        <EyesBall />
                        <Featured />
                        <Reviews />
                        <Cards />
                        <Cta />
                        <Footer />
                  </div>
            </Context>
      );
};

export default App;
