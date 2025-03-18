import { motion } from "motion/react";

const OchiMarquee = () => {
      return (
            <div data-scroll data-scroll-speed=".1" className="w-full flex items-center justify-center h-[70vh] py-5 overflow-hidden rounded-2xl bg-[#004D43]">
                  <div className="flex uppercase w-full border-b-[0.8px] border-t-[0.8px] border-solid leading-none border-[#4D837C] justify-center items-center">
                        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="text-[15rem]  pl-20 font-Robot font-bold text-nowrap tracking-tighter text-[#FFFFFF]">
                              We are ochi
                        </motion.h1>
                        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="text-[15rem]  pl-20 tracking-tighter  font-Robot font-bold text-nowrap  text-[#FFFFFF]">
                              We are ochi
                        </motion.h1>
                        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="text-[15rem]  pl-20 tracking-tighter  font-Robot font-bold text-nowrap  text-[#FFFFFF]">
                              We are ochi
                        </motion.h1>
                  </div>
            </div>
      );
};

export default OchiMarquee;
