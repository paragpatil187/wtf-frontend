import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
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
    </>
  );
};

export default AllRoutes;
