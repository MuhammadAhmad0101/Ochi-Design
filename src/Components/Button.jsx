import { MdOutlineArrowOutward } from "react-icons/md";
const Button = ({ text }) => {
      return (
            <button className="bg-[#212121] mt-8 flex justify-center items-center gap-9 text-white uppercase rounded-full px-5 py-4 w-fit h-fit">
                  {text}
                  <div className="w-2 h-2 rounded-full bg-white flex justify-center items-center ">
                        <MdOutlineArrowOutward />
                  </div>
            </button>
      );
};

export default Button;
