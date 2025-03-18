import { useEffect, useState } from "react";
const EyeAnimation = () => {
      const [rotate, setrotate] = useState(0);
      useEffect(() => {
            window.addEventListener("mousemove", (e) => {
                  let mouseX = e.clientX;
                  let mouseY = e.clientY;
                  let deltaX = mouseX - window.innerWidth / 2;
                  let deltaY = mouseY - window.innerHeight / 2;
                  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
                  setrotate(angle - 180);
            });
      });
      return (
            <div className="absolute top-1/2 flex left-1/2 gap-4  -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-zinc-100 w-52 h-52 rounded-full flex justify-center items-center">
                        <div className="w-2/3 h-2/3 overflow-hidden bg-black rounded-full flex items-center">
                              <div style={{ transform: `rotate(${rotate}deg)` }} className="w-full h-10 rotate-45">
                                    <div className="w-[30%] h-full rounded-full bg-white"></div>
                              </div>
                        </div>
                  </div>
                  <div className="bg-zinc-100 w-52 h-52 rounded-full flex justify-center items-center">
                        <div className="w-2/3 h-2/3 overflow-hidden bg-black rounded-full flex items-center">
                              <div style={{ transform: `rotate(${rotate}deg)` }} className="w-full h-10 rotate-45">
                                    <div className="w-[30%] h-full rounded-full bg-white"></div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default EyeAnimation;
