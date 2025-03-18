const Cards = () => {
      return (
            <div className="bg-[#F1F1F1] items-center pt-9 pb-20 px-12 w-full min-h-screen flex gap-5">
                  <div className="w-1/2 relative h-[60vh] rounded-lg flex justify-center items-center overflow-hidden bg-[#004D43] ">
                        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                        <div className="absolute bottom-7 left-7">
                              <button className=" uppercase text-sm px-3 py-1 rounded-full flex items-center justify-center w-fit h-fit bg-transparent border-[1px] text-[#CDEA68] border-solid border-[#CDEA68]">&copy;2019-2022</button>
                        </div>
                  </div>
                  <div className="w-1/2 h-[60vh] rounded-lg overflow-hidden flex items-center gap-5">
                        <div className="w-1/2 relative h-full bg-[#212121] flex justify-center items-center  rounded-lg overflow-hidden">
                              <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                              <div className="absolute bottom-7 left-7">
                                    <button className="uppercase text-sm px-3 py-1 rounded-full flex items-center justify-center w-fit h-fit bg-transparent border-[1px] text-white border-solid border-white">rating 5.0 on clutch</button>
                              </div>
                        </div>
                        <div className="w-1/2 relative h-full flex bg-[#212121] justify-center items-center  rounded-lg overflow-hidden ">
                              <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                              <div className="absolute bottom-7 left-7">
                                    <button className="uppercase text-sm px-3 py-1 rounded-full flex items-center justify-center w-fit h-fit bg-transparent border-[1px] text-white border-solid border-white">business bootcamp alumini</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Cards;
