import EyeAnimation from "./EyeAnimation";

const EyesBall = () => {
      return (
            <div className="w-full overflow-hidden h-screen bg-white">
                  <div data-scroll data-scroll-speed="-.7" className="w-full relative h-full">
                        <EyeAnimation />
                        <img className="w-full h-full object-cover" src="../images/Top-Viewbbcbv-1-scaled.jpg" alt="" />
                  </div>
            </div>
      );
};

export default EyesBall;
