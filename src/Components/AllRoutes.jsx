import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import Search from "./Search";

const AllRoutes = () => {
  return (
    <>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Search />} />
        
        
        <Route path="/" element={<Footer />} />
      </Routes>
      <Main/>
    </>
  );
};

export default AllRoutes;
