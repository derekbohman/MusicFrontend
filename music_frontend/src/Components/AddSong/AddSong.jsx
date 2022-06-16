import React, { useState } from "react";
import "./AddSong.css";

const AddSong = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  function submitForm(event) {
    event.preventDefault();
    let song = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    props.addSong(song);

    setTitle("");
    setArtist("");
    setAlbum("");
    setReleaseDate("");
    setGenre("");
  }

  return (
    <div className="addForm">
      <form onSubmit={submitForm}>
        <div className="addSongTitle">
          <h2>Add a Song</h2>
        </div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Artist</label>
        <input
          type="text"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
        <label>Album</label>
        <input
          type="text"
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        />
        <label>Release Date</label>
        <input
          type="date"
          value={release_date}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
        <label>Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
        <div className="button">
          <button type="submit">Add Song</button>
        </div>
      </form>
    </div>
  );
};

export default AddSong;
