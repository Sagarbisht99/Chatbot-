import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center p-4 mx-auto max-w-screen-md">
      <input
        type="text"
        placeholder="Search"
        className="w-full sm:w-auto py-3 px-5 text-lg sm:text-xl border-[1px] border-[#003366] rounded-md shadow-sm bg-[#F1F1F1] text-[#003366] focus:outline-none focus:ring-2 focus:ring-[#F1F1F1] focus:border-[#F1F1F1]"
      />
      <select
        className="w-full sm:w-auto py-3 px-5 text-lg sm:text-xl border-[1px] border-[#003366] rounded-md shadow-sm bg-[#F1F1F1] text-[#003366] focus:outline-none focus:ring-2 focus:ring-[#F1F1F1] focus:border-[#F1F1F1]"
      >
        <option value="" disabled defaultValue>
          Select
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button
        className="w-full sm:w-auto py-3 px-5 text-lg sm:text-xl border-[1px] border-[#003366] bg-[#003366] text-[#F1F1F1] hover:bg-[#002244] rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
