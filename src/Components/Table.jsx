import React from "react";
import Inputdata from "./Inputdata";
import "../styles/custom.css"; // Ensure this import is correct

const Table = () => {
  return (
    <div className="w-full mx-4">
      <table className="min-w-full bg-white border  divide-y divide-[#003366]">
        <thead className="hide-on-mobile bg-[#003366] text-[#F1F1F1]">
          <tr>
            <th className="py-4 px-6 text-left text-base md:text-xl font-medium border-b border-[#003366]">
              Data
            </th>
            <th className="py-4 px-6 text-left text-base md:text-xl font-medium border-b border-[#003366]">
              Source
            </th>
            <th className="py-4 px-6 text-left text-base md:text-xl font-medium border-b border-[#003366]">
              Type
            </th>
            <th className="py-4 px-6 text-left text-base md:text-xl font-medium border-b border-[#003366]">
              Created
            </th>
            <th className="py-4 px-6 text-left text-base md:text-xl font-medium border-b border-[#003366]">
              Actions
            </th>
          </tr>
        </thead>
        <Inputdata />
      </table>
    </div>
  );
};

export default Table;
