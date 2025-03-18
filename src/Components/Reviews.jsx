import { useContext } from "react";
import { FeaturedContext } from "./Context/FeaturedContext";

const Reviews = () => {
      const { clientReviews } = useContext(FeaturedContext);
      return (
            <div className="w-full bg-[#F1F1F1] min-h-screen">
                  <div className="w-full p-12 border-b-[.8px] border-solid border-[#B2B2B2]">
                        <h1 className="text-6xl font-medium font-Robot">Client&apos;s reviews</h1>
                  </div>
                  {clientReviews.map((review, index) => (
                        <div key={index} className="w-full flex justify-between px-12 py-5 border-b-[.8px] border-solid border-[#B2B2B2] items-center">
                              {review.texts.map((text, id) => (
                                    <div className={`w-full ${id == 2 && "text-end cursor-pointer "} ${id == 1 && "ml-[15rem]"}`} key={id}>
                                          <p className={`${id % 2 == 0 && "underline"} ${id == 2 && "uppercase"} `}>{text}</p>
                                    </div>
                              ))}
                        </div>
                  ))}
            </div>
      );
};

export default Reviews;
