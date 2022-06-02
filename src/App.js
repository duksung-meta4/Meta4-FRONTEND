import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drawing2 from "./pages/Drawing2";
import Showing from "./pages/Showing";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/drawing2" element={<Drawing2 />}></Route>
        <Route path="/showing" element={<Showing />}></Route>
      </Routes>
    </RecoilRoot>
  );
};

export default App;
