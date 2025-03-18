import { motion } from "motion/react";
import { MdOutlineArrowOutward } from "react-icons/md";
// import { NeatGradientComponent } from "./NeatGradientComponent";
const Header = () => {
      return (
            <div data-scroll data-scroll-speed="-.3">
                  <header className="px-12 py-20 z-50 leading-[5rem] relative">
                        {/* <div className="overflow-hidden blur-md -z-10 absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <NeatGradientComponent />
                        </div> */}
                        <h1 className="text-[6rem]  font-extrabold uppercase font-Robot">
                              <div className="tracking-tighter">We create</div>
                              <div className="tracking-tighter gap-4 w-fit flex items-center">
                                    <motion.div initial={{ width: "0rem" }} animate={{ width: "9rem" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} className="rounded-md h-[5rem] overflow-hidden">
                                          <img className="w-full h-full object-cover" src="../images/content-image01.jpg" alt="" />
                                    </motion.div>
                                    <h1>eye-opening</h1>
                              </div>
                              <div className="tracking-tighter">presentations</div>
                        </h1>
                  </header>
                  <section className="w-full h-[20vh] bg-[#F1F1F1] px-12 pt-5 font-normal border-solid border-t-[.8px] border-[#BFBFBF] flex justify-between">
                        <p1>For public and private companies</p1>
                        <p1>From the first pitch to IPO</p1>
                        <div className="flex gap-4">
                              <button className="px-3 py-1 uppercase w-fit h-fit rounded-full border-[0.8px] border-solid border-[#212121]">Start the project</button>
                              <div className="rounded-full p-2 w-fit h-fit border-[0.8px] border-solid border-[#212121] flex justify-center items-center">
                                    <MdOutlineArrowOutward />
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default Header;
