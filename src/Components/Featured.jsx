import { useContext} from "react";
import { FeaturedContext } from "./Context/FeaturedContext";
import Button from "./Button";

const Featured = () => {
      const { cardData } = useContext(FeaturedContext);

      return (
            <div className="w-full min-h-screen bg-[#F1F1F1] rounded-3xl ">
                  <div className="w-full pt-16 pb-10 px-12 border-b-[0.8px] border-solid border-[#aaaaaa]">
                        <h1 className="text-6xl font-medium font-Satoshi">Featured projects</h1>
                  </div>
                  <div className="w-full px-12 py-8 grid grid-cols-2 gap-x-5 gap-y-10 overflow-hidden ">
                        {cardData.map((card, index) => {
                              return (
                                    <div key={index} className="w-full  h-auto flex flex-col gap-4">
                                          <div className="w-full flex items-center gap-4">
                                                <div className="w-3 h-3 bg-black rounded-full"></div>
                                                <p className="font-Satoshi uppercase"> {card.title} </p>
                                          </div>
                                          <div className="w-full rounded-xl">
                                                <div className="w-full h-full overflow-hidden rounded-xl">
                                                      <img className="w-full rounded-xl h-full object-cover object-center" src={card.image} alt="" />
                                                </div>
                                          </div>
                                          <div className="w-full flex gap-4">
                                                {card.button.map((buttext, id) => (
                                                      <button key={id} className=" uppercase px-3 py-1 rounded-full flex items-center justify-center w-fit h-fit bg-transparent border-[0.9px] border-solid border-black">
                                                            {buttext}
                                                      </button>
                                                ))}
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
                  <div className="w-full py-20 flex justify-center items-center ">
                        <Button text="View all case studies" />
                  </div>
            </div>
      );
};

export default Featured;
