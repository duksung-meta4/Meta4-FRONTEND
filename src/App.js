import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drawing from "./pages/Drawing";
import Drawing2 from "./pages/Drawing2";
import Showing from "./pages/Showing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* drawing 삭제후 drawing2만 가질 예정 */}
      <Route path="/drawing" element={<Drawing />}></Route>
      <Route path="/drawing2" element={<Drawing2 />}></Route>
      <Route path="/showing" element={<Showing />}></Route>
    </Routes>
  );
};

export default App;
