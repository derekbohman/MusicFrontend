const DisplaySongs = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Song Number</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {props.songs.map((song, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.release_date}</td>
              <td>{song.options}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplaySongs;
