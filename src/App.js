import React from 'react';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className=" w-full h-full overflow-hidden bg-green-200">
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
