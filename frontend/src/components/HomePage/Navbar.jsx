import React from 'react'
import { GiPaperWindmill } from "react-icons/gi";
import { IoNewspaperSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
      <>
          <div className="w-full h-[10vh] flex justify-between items-center">
              <div className="left flex items-center">
                  <p className='flex items-center text-black text-xl font-semibold gap-2 cursor-default p-12'><span><GiPaperWindmill className='text-[#ec4952] animate-spin'/></span>BuildMyResume</p>
              </div>
              <div className="right p-12 hidden sm:block">
                  <button onClick={() => navigate("/ResumeForm")} className='flex items-center gap-2 cursor-pointer bg-[#ec4952] text-white px-6 py-1.5 rounded-full hover:bg-[#ec4960]'><IoNewspaperSharp />Create Resume Now</button>
              </div>
          </div>
      </>
  )
}

export default Navbar