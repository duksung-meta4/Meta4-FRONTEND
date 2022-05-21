import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Drawing from './pages/Drawing';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/drawing" element={<Drawing />}></Route>
    </Routes> 
  );
};

export default App;