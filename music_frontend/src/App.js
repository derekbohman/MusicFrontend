import React, { useState } from "react";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSongs from "./Components/AddSongs/AddSongs";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);

  function addNewSong(addedSong) {
    let tempAddedSong = [...songs, addedSong];
    setSongs(tempAddedSong);
  }

  return (
    <div className="mainContent">
      <DisplaySongs songs={songs} />
      <AddSongs addNewSong={addNewSong} />
    </div>
  );
}

export default App;
