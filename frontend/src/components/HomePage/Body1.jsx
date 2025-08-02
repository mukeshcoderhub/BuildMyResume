import React from "react";
import logo from "../../assets/homepageIllustration.png";
import { IoNewspaperSharp } from "react-icons/io5";
import { GiPaperWindmill } from "react-icons/gi";

const Body1 = () => {
  return (
    <div className="w-full h-[90vh] sm:flex">
      <div className="left w-[100%] sm:w-[50%] h-[40%] sm:h-full flex justify-center items-center">
        <img className="w-[90%] h-[90%]" src={logo} alt="Loading...." />
      </div>
      <div className="right w-[100%] sm:w-[50%] h-full justify-center flex sm:items-center">
        <div className="w-[90%] sm:w-[80%]">
          <div className="flex w-full justify-center items-center">
            <p className="flex items-center text-black text-2xl font-semibold gap-2 cursor-default">
              <span>
                <GiPaperWindmill className="text-[#ec4952]" />
              </span>
              BuildMyResume
            </p>
          </div>
          <div className="heading text-3xl font-bold  text-center mt-4 mb-8">
            <p>
              Land Your <span className="text-[#ec4952]">Dream Job</span> With a
              Stunning Resume
            </p>
          </div>
          <div className="text-sm font-normal text-center w-[85%] sm:w-[70%] m-auto">
            <p>
              Say goodbye to boring resumes! Use our sleek templates and simple
              tools to build a professional resume in no time.
            </p>
          </div>
          <div className="flex justify-center items-center my-12">
            <button className="animate-bounce flex items-center gap-2 cursor-pointer bg-[#ec4952] text-white px-6 py-1.5 rounded-full active:bg-white active:text-black active:border-2 active:border-[#ec4952] hover:bg-white hover:text-black hover:border-2 hover:border-[#ec4952]">
              <IoNewspaperSharp />
              Create Resume Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body1;
