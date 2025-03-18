import { useRef } from "react";
import Button from "./Button";
import gsap from "gsap";
const About = () => {
      const image = useRef();
      const handleImage = () => {
            gsap.to(image.current, {
                  scale: 0.9,
                  duration: 0.5,
            });
      };
      const handleImageLeave = () => {
            gsap.to(image.current, {
                  scale: 1,
                  duration: 0.3,
            });
      };
      return (
            <div data-scroll data-scroll-speed="-.3" className="w-full rounded-3xl min-h-screen p-5 bg-[#CDEA68]">
                  <div className="border-b-[0.8px] w-full py-24 px-5 border-solid border-[#99AD53]">
                        <h1 className="text-[#212121] text-[3.050rem]  leading-none font-Satoshi font-medium">
                              Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds, sell products, explain complex ideas</span>,and <span className="underline">hire great people.</span>
                        </h1>
                  </div>
                  <div className="w-full px-5 py-10 text-black font-medium cursor-pointer flex border-b-[0.8px] border-solid border-[#99AD53]">
                        <div className="w-1/2 h-full">
                              <p>What you can expect:</p>
                        </div>

                        <div className="grid w-1/2 h-full grid-cols-5 grid-rows-5 gap-6">
                              <div className="col-span-5 w-1/2 row-span-2">
                                    <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it&apos;s live or digital, delivered for one or a hundred people.</p>
                              </div>
                              <div className="col-span-3 row-span-3 row-start-3 place-content-end w-2/3">
                                    <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                              </div>
                              <div className="col-span-2 row-span-3 col-start-4 row-start-3 place-content-center">
                                    S:
                                    <p>Instagram</p>
                                    <p>Behance</p>
                                    <p>Facebook</p>
                                    <p>Linkdin</p>
                              </div>
                        </div>
                  </div>
                  <div className="w-full flex px-5 min-h-[80vh]">
                        <div className="w-1/2 py-8">
                              <h1 className="text-[#212121] font-Satoshi font-semibold text-5xl">Our approach:</h1>
                              <div className="w-fit" onMouseLeave={() => handleImageLeave()} onMouseEnter={() => handleImage()}>
                                    <Button text="Read more" />
                              </div>
                        </div>
                        <div className="w-1/2 h-full p-4">
                              <div ref={image} className="w-full h-full overflow-hidden rounded-xl">
                                    <img className="w-full h-full object-cover" src="../images/Homepage-Photo-1326x939.jpg" alt="" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default About;
