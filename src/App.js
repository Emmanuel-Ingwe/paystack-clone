import React from 'react';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App w-full h-full bg-green-200">
      <Navbar />
      <Hero />

      {/* <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={(< />)} /> */}
      {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;