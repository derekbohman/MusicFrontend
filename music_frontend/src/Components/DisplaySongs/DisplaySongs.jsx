import "./DisplaySongs.css";

const DisplaySongs = (props) => {

// rather than mapping over props.songs we want to filter the songs first and then save the filter reuslt 
// in a hook, we then can map over the filtered songs from our hook

//make a hook, id call it filterdSongs and setFilteredSongs

// make a function that filter props.songs.filter(song => 
//song.title.includes(props.searchTerm)
//)

// make a single input to get searchTerm from user
// this could be its own compoent 
// data should go from from to app level and then get passed down into this compoenent
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
                    {/* <div className="editButton">
                      <button type="submit">Edit Song</button>
                    </div> */}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplaySongs;
