import { useEffect, useState } from "react";
import productApi from "./api/listsongApi";
import "./App.scss";

import DetailsSong from "./components/DetailsSong";
import Header from "./components/Header";
import Playing from "./components/Playing";
import ListSongs from "./components/ListSongs";

function App() {
  /*         let buff = new Buffer(av, "base64");
  let base64ToStringNew = buff.toString("ascii"); 
  console.log(Buffer(av, "base64").toString("ascii"));
  */

  const default_song = {
    id: 0,
    name: "",
    author: "",
    url: "",
    img_song: "",
    img_author: "",
  };

  const [DataSongs, setDataSong] = useState([]);
  const [song, setSong] = useState(default_song);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        setDataSong(response.listsong);
        console.log(response.listsong);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  function handleSetSong(idSong) {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(default_song);
    else setSong(song);
  }

  return (
    <div className="App">
      <Header />

      <div className="grid-song">
        <DetailsSong song={song} />
        <ListSongs DataSongs={DataSongs} onsubmit={handleSetSong} song={song} />
      </div>
      <Playing song={song} onsubmit={handleSetSong} />
    </div>
  );
}

export default App;
