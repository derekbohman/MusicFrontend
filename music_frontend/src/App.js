import React, { useState } from "react";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import AddSongs from "./Components/AddSongs/AddSongs";

function App() {
  const [songs, setSongs] = useState([]);

  return (
    <div>
      <DisplaySongs songs={songs} />
      <AddSongs />
    </div>
  );
}

export default App;
