import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSong from "./Components/AddSong/AddSong";
import FilterSongs from "./Components/FilterSongs/FilterSongs";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState([""]);

  useEffect(() => {
    displaySongs();
  }, []);

  async function displaySongs() {
    let response = await axios.get("http://127.0.0.1:8000/songs/");
    setSongs(response.data);
  }

  async function addSong(song) {
    let response = await axios.post("http://127.0.0.1:8000/songs/", song);
    if (response.status === 201) {
      await displaySongs();
    }
  }

  async function deleteSong(song) {
    let response = await axios.delete(
      `http://127.0.0.1:8000/songs/${song.id}/`
    );
    if (response.status === 204) {
      await displaySongs();
    }
  }

  return (
    <div className="mainContent">
      <DisplaySongs songs={songs} deleteSong={deleteSong} searchTerm={searchTerm}/>
      <AddSong addSong={addSong} />
      <FilterSongs setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
