import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Data from "./DataPages/Data.jsx";
import DataContexts from "./Contexts/DataContexts.jsx";


createRoot(document.getElementById("root")).render(
  <Router>
    <DataContexts>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/AddData" element={<Data />}/>
      </Routes>
    </DataContexts>
  </Router>
);
