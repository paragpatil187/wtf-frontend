import React from "react";
import "./css/search.css";
import { FaSearch,FaLocationArrow } from 'react-icons/fa';
const SearchBar = () => (
  <form action="/" method="get">
    <div className="input-box">
    <FaSearch />
      <input
        type="text"
        className="input"
        placeholder="Search Gym Name Here.."
        name="s"
      />
       <FaLocationArrow />
       <button style={{backgroundColor:"red" ,color:"white",border:"none"}}>Clear</button>
    </div>
  </form>
);

export default SearchBar;