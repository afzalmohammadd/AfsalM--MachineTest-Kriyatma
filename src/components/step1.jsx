import React, { useState } from "react";

const Step1 = ({ setGetStarted }) => {
  const [needMore, setNeedMore] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [plusButton, setPlusButton] = useState(false);
  const [connect, setConnect] = useState(false);
  console.log(setConnect, "sc");
  const shortSent =
    "Identify and categorize the various costs influencing margins...";
  const fullSent =
    "Identify and categorize the various costs influencing margins. Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).";
  return (
    <>
      <div className="flex flex-row">
        <div className=" h-screen w-96 bg-orange-400"></div>
        <div className="h-screen w-full bg-gray-100">
          <div className="flex flex-row p-5 ml-14 mt-9 mr-32 bg-white justify-between  shadow hover:shadow-md rounded-md">
            <div className="w-full">
              <div className="flex flex-row justify-between">
                <div className="font-medium text-xs">STEP 1</div>
                <div>
                  <button
                    onClick={() => setGetStarted(false)}
                    className="font-medium text-2xl bg justify-center items-center w-8 text-gray-500  bg-gray-200 shadow hover:shadow-md rounded-full "
                  >
                    &#94;
                  </button>
                </div>
              </div>

              <div className="text-xl font-bold ">Cost Identification</div>
              <div className="mt-2">
                {viewMore ? (
                  fullSent
                ) : shortSent ? (
                  <>
                    {shortSent}{" "}
                    <button
                      className="text-blue-600"
                      onClick={() => setViewMore(true)}
                    >
                      viewMore&#9660;
                    </button>
                  </>
                ) : (
                  fullSent
                )}
              </div>
              <div className=" pt-2 border-b-2 border-gray-300"></div>
              <div className=" pt-2 ">
                <div className="flex flex-row justify-between">
                  <p className="text-xs text-gray-400 ">Question 1 out of 3</p>
                  {plusButton ? (
                    <button
                      onClick={() => setPlusButton(false)}
                      className="font-medium text-2xl bg justify-center items-center w-8 text-gray-500  bg-gray-200 shadow hover:shadow-md rounded-full"
                    >
                      &#45;
                    </button>
                  ) : (
                    <button
                      onClick={() => setPlusButton(true)}
                      className="font-medium text-2xl bg justify-center items-center w-8 text-gray-500  bg-gray-200 shadow hover:shadow-md rounded-full"
                    >
                      &#43;
                    </button>
                  )}
                </div>

                <p className="font-semibold text-lg">
                  What are the primary components of variable & semi-variable
                  costs impacting gross margins?
                </p>
                <div className="flex flex-row gap-8 ml-11 mt-5 ">
                  {plusButton ? (
                    <>
                      <button
                        onClick={() => setNeedMore(true)}
                        className="bg-blue-200 rounded-md w-80 flex flex-row text-sm pt-3 h-11"
                      >
                        <div className=" mb-4 text-start gap-6 flex flex-row ml-3">
                          &#10149; Need more clarification on the section?{" "}
                          <div className="mr-2 text-center">&#43;</div>
                        </div>
                      </button>
                      <button className="bg-blue-200 rounded-md w-80 flex flex-row text-sm pt-3 h-11">
                        <div className="mb-4 text-start gap-6 flex flex-row ml-3">
                          &#10022; Need more clarification on the section?{" "}
                          <div className="mr-2 text-center">&#43;</div>
                        </div>
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  {needMore ? (
                    <>
                      <div className="bg-blue-100 h-80 w-11/12 flex flex-row  justify-between ml-11 mt-5 rounded-md pt-9 pl-4 ">
                        <div
                          
                          className="bg-white rounded-full w-80 text-xs justify-between gap-8 h-8 pt-2 pl-5 "
                        >
                            <div className="flex flex-row" >
                            <div onClick={() => setConnect(true)} className="flex flex-row justify-between cursor-pointer ">
                            How do I connect this to my business context?{" "}
                          </div>
                          <div className="pr-5">
                              <button
                                onClick={() => setConnect(false)}
                                className="w-6"
                              >
                                &#10094;
                              </button>
                            </div>
                            </div>
                          

                          {connect ? (
                            <>
                            <div className="flex flex-row gap-5" >
                            <div className="flex flex-row ">
                                <div className="bg-white h-20 w-72 mt-5 pt-2 pl-3 rounded-md">
                                  <div className="text-xs font-thin text-gray-500">
                                    Add raw materials costs as variable costs
                                  </div>
                                  <p className="hover:text-blue-500 cursor-pointer pt-2">
                                    Energy and Utility costs are Lorem ipsum
                                    dolor sit amet...
                                  </p>
                                </div>
                              </div>

                              <div className="flex flex-row ">
                                <div className="bg-white h-20 w-72 mt-5 pt-2 pl-3 rounded-md">
                                  <div className="text-xs font-thin text-gray-500">
                                    Add raw materials costs as variable costs
                                  </div>
                                  <p className="hover:text-blue-500 cursor-pointer pt-2">
                                    Energy and Utility costs are Lorem ipsum
                                    dolor sit amet...
                                  </p>
                                </div>
                              </div>
                            </div>
                              
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="pr-5">
                          <button
                            className="w-6"
                            onClick={() => setNeedMore(false)}
                          >
                            &#10094;
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
