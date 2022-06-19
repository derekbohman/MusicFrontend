import React, { useState } from "react";
import "./FilterSongs.css";

const FilterSongs = (props) => {
  return (
    <div className="addForm">
      <form>
        <div className="filterSongTitle">
          <h2>Filter a Song</h2>
        </div>
        <div className="search">
          <label>Search</label>
          <input
            type="text"
            onChange={(event) => props.setSearchTerm(event.target.value)}
          />
        </div>
        <div className="filterButton">
          <button type="submit">Filter Song</button>
        </div>
      </form>
    </div>
  );
};

export default FilterSongs;
