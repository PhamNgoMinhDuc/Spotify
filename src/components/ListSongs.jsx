import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Buffer } from "buffer";

function ListSongs(props) {
  const { DataSongs, onsubmit, song } = props;
  const [idSong, setIdSong] = useState("");
  function handlePlaySong(idsong) {
    setIdSong(idsong);
    onsubmit(idsong);
  }

  /*   const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  }; */
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <div className="list-song">
      <table className="table-song">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>#</th>
            <th style={{ width: "55%" }}>TITLE</th>
            <th style={{ width: "25%" }}>AUTHOR</th>
            <th style={{ width: "10%" }}>
              <FaDownload />
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr className={idSong === song.id ? `active` : ``} key={index} onClick={() => handlePlaySong(song.id)}>
              <td>{index + 1}</td>
              <td>{song.name}</td>
              <td>{song.author}</td>
              <td>
                <a href={Buffer(song.url, "base64").toString("ascii")}>
                  <FaDownload />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSongs;
