import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSong from "./Components/AddSong/AddSong";
// import DeleteSong from "./Components/DeleteSong/DeleteSong";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);

  // useEffect is a built in fuction that runs when a "page" or component renders
  useEffect(() => {
    displaySongs();
  }, []);

  async function displaySongs() {
    let response = await axios.get("http://127.0.0.1:8000/songs/");
    console.log(response);
    setSongs(response.data);
  }

  async function addSong(addedSong) {
    let response = await axios.post("http://127.0.0.1:8000/songs/", addedSong);
    if (response.status === 201) {
      await displaySongs();
    }
  }

  async function deleteSong(song) {
    let response = await axios.delete(
      `http://127.0.0.1:8000/songs/${song.id}/`
    );
    console.log(response);
    displaySongs();
  }

  return (
    <div className="mainContent">
      <DisplaySongs songs={songs} deleteSong={deleteSong} />
      <AddSong addSong={addSong} />
    </div>
  );
}

export default App;
