import "./DisplaySongs.css";

const DisplaySongs = (props) => {




  return (
    <div className="displayTable">
      <br></br>
      <div className="mainTitle">
        <h1>Music Library</h1>
      </div>
      <table className="tableData">
        <thead>
          <tr className="columnHeadings">
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Song Options</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song) => {
            return (
              <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>
                  <div className="displayButtons">
                    <div className="deleteButton" >
                      <button type="submit" onClick={() => props.deleteSong(song)}>Delete Song</button>
                    </div>
                    <div className="editButton">
                      <button type="submit">Edit Song</button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <div className="addSongTitle">
        <h2>Add a Song</h2>
      </div>
    </div>
  );
};

export default DisplaySongs;
