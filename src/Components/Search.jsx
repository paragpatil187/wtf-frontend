import React from "react";
import './css/search.css'
const SearchBar = () => (
  <form action="/" method="get">
    <input
      type="text"
      id="header-search"
      placeholder="Search Gym Name Here.."
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
