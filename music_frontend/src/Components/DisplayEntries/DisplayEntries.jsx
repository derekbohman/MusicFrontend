const DisplayEntries = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Entry Number</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {props.entries.map((entry, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{entry.title}</td>
              <td>{entry.artist}</td>
              <td>{entry.album}</td>
              <td>{entry.genre}</td>
              <td>{entry.release_date}</td>
              <td>{entry.options}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayEntries;
