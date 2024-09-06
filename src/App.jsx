import React from "react";
import TopComponent from "./Components/TopComponent";
import Table from "./Components/Table";
import Data from "./DataPages/Data";
import { useData } from "./Contexts/DataContexts";
import Navbar from "./Components/Navbar";

const App = () => {
  const { showInputs } = useData();

  return (
    <div className="h-screen bg-[#EBEBEB] overflow-x-hidden overflow-y-auto">
      <div className="relative w-full">
        <Navbar />
        <main className="pt-6 flex flex-col items-center w-full">
          <TopComponent />
          <Table />
          {showInputs && <Data />}
        </main>
      </div>
    </div>
  );
};

export default App;
