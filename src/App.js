import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drawing2 from "./pages/Drawing2";
import Showing from "./pages/Showing";
import Showing2 from "./pages/Showing2";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* drawing 삭제후 drawing2만 가질 예정 */}
        <Route path="/drawing2" element={<Drawing2 />}></Route>
        <Route path="/showing" element={<Showing />}></Route>
        <Route path="/showing2" element={<Showing2 />}></Route>
      </Routes>
    </RecoilRoot>
  );
};

export default App;
