import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([])

  return (
    <div>
      <DisplayEntries entries = {entries}/>
    </div>
  );
}

export default App;
