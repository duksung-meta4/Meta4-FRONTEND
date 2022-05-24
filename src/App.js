import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drawing from "./pages/Drawing";
import Drawing2 from "./pages/Drawing2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/drawing" element={<Drawing />}></Route>
      <Route path="/drawing2" element={<Drawing2 />}></Route>
    </Routes>
  );
};

export default App;
