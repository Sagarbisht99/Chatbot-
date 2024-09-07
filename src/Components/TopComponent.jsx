import React from "react";
import Search from "./Search";
import { useData } from "../Contexts/DataContexts";
import { IoTimeOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";

const TopComponent = () => {
  const { clickingAddData } = useData();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row my-5 justify-center items-center gap-4 sm:gap-6">
        <button
          onClick={clickingAddData}
          className="bg-[#003366] text-[#F1F1F1] rounded-[12px] p-4 font-semibold text-lg sm:text-xl hover:bg-[#002244] transition-colors shadow-md w-full sm:w-auto flex items-center justify-center"
        >
          <span className="text-center">+ ADD DATA</span>
        </button>

        <button className="bg-[#003366] flex items-center gap-3 text-[#F1F1F1] rounded-[12px] p-4 font-semibold text-lg sm:text-xl hover:bg-[#002244] transition-colors shadow-md w-full sm:w-auto  justify-center">
          <span className="text-2xl"><IoTimeOutline /></span>
          <span className="ml-2 text-center">DATA TRAINING STATUS</span>
        </button>

        <button className="bg-[#003366] gap-3 text-[#F1F1F1] rounded-[12px] p-4 font-semibold text-lg sm:text-xl hover:bg-[#002244] transition-colors shadow-md w-full sm:w-auto flex items-center justify-center">
          <span className="text-2xl"><FaMessage /></span>
          <span className="ml-2 text-center">GROUND TRUTH</span>
        </button>
      </div>

      <div className="w-full flex items-center justify-center">
        <hr className="h-[3px] bg-[#003366] text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto" />
      </div>

      <Search />
    </div>
  );
};

export default TopComponent;
