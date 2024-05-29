import React from "react";

const Header = ({setGetStarted}) => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="h-screen w-96 bg-orange-400"></div>
        <div className="flex flex-row  ml-14 mt-7 w-8/12 justify-between mr-36 bg-white h-36 drop-shadow-sm  rounded-md ">
          <div className="flex flex-col">
            <div className="p-5">
              <p className="text-xs">STEP 1/3</p>
              <p className="pt-3 font-bold text-3xl">Cost Identification</p>
              <p className="text-sm">
                Identify and categorize the various costs influencing margins.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-5" >
              <p className="text-xs">4 Prompts | 5 mins</p>
            </div>
            <div className="mr-2 mt-1" >
              <button onClick={()=> setGetStarted(true)} className="bg-gray-100 justify-center h-16 w-32 mr-6 font-medium text-sm text-blue-900 mt-1 drop-shadow-sm rounded-md ">
                Get Started &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
