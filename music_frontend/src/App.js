import React, { useState } from 'react';


function App() {

  const [entries, setEntries] = useState([])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Enter Sandman</td>
            <td>Metallica</td>
            <td>Metallica</td>
            <td>Heavy Metal</td>
            <td>1991-08-12</td>
            <td>Add/Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
