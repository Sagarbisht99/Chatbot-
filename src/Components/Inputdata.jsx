import React, { useEffect, useState } from "react";
import { useData } from "../Contexts/DataContexts";
import { MdDelete, MdEdit } from "react-icons/md";
import "../styles/custom.css"; // Import your custom CSS

const Inputdata = () => {
  const { items, DeleteData } = useData();
  const [date, setDate] = useState("");

  const currentData = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();
    setDate(`${month}/${day}/${year}`);
  };

  useEffect(() => {
    currentData();
  }, [items]);

  return (
    <tbody className="entire-table-body bg-[#003366] text-[#F1F1F1] divide-y divide-[white]">
      {items.map((item, index) => (
        <tr key={index} className="table-body  text-left text-xs md:text-sm lg:text-base">
          <td
            className="table-body-content py-3 text-xl px-2 md:py-4 md:px-4 lg:py-6 lg:px-6 border-b border-[#003366]"
            style={{ width: "60%" }}
          >
            {item}
          </td>
          <td
            className="table-body-content py-3 px-2 md:py-4 md:px-4 lg:py-6 lg:px-6 border-b border-[#003366]"
            style={{ width: "10%" }}
          >
            --
          </td>
          <td
            className="table-body-content py-3 px-2 md:py-4 md:px-4 lg:py-6 lg:px-6 border-b border-[#003366]"
            style={{ width: "10%" }}
          >
            <span className="text-[#003366] bg-[#F1F1F1] rounded-md py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 border-[#003366] text-xs md:text-sm lg:text-base border-2">
              Text
            </span>
          </td>
          <td
            className="table-body-content py-3 px-2 md:py-4 md:px-4 lg:py-6 lg:px-6 border-b border-[#003366]"
            style={{ width: "10%" }}
          >
            {date}
          </td>
          <td
            className="right-corner py-3 px-2 md:py-4 md:px-4 lg:py-6 lg:px-6 border-b border-[#003366]"
            style={{ width: "10%" }}
          >
            <div className="flex gap-4 items-center justify-center">
              <span
                onClick={() => DeleteData(index)}
                className="cursor-pointer text-[#FF6F61] text-sm md:text-base lg:text-lg"
              >
                <MdDelete fontSize={40} />
              </span>
              <span className="cursor-pointer text-white text-sm md:text-base lg:text-lg">
                <MdEdit fontSize={40} />
              </span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Inputdata;
