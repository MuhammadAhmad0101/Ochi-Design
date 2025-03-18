import Button from "./Button";
import EyeAnimation from "./EyeAnimation";

const Cta = () => {
      return (
            <div className="bg-[#CDEA68] relative rounded-3xl w-full min-h-screen h-[140vh] flex flex-col  justify-center items-center">
                  <EyeAnimation />
                  <div>
                        <h1 className="text-[10rem] text-center text-[#212121] uppercase leading-none tracking-tighter font-Robot font-extrabold">Ready</h1>
                        <h1 className="text-[10rem] text-center text-[#212121] uppercase leading-none tracking-tighter font-Robot font-extrabold"> to start </h1>
                        <h1 className="text-[10rem] text-center text-[#212121] uppercase leading-none tracking-tighter font-Robot font-extrabold">the project  ?</h1>
                  </div>
                  <Button text="start the project" />
            </div>
      );
};

export default Cta;
