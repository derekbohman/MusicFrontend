import React, { useState } from "react";
import "./FilterSongs.css";

const FilterSongs = (props) => {
  return (
    <div className="addForm">
      <form>
        <div className="addSongTitle">
          <h2>Filter a Song</h2>
        </div>
        <label>Search</label>
        <input
          type="text"
          onChange={(event) => props.setSearchTerm(event.target.value)}
        />
        <div className="button">
          <button type="submit">Filter Song</button>
        </div>
      </form>
    </div>
  );
};

export default FilterSongs;
