import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Buffer } from "buffer";

function Playing(props) {
  const { song, onsubmit } = props;
  const handleClickPrev = () => {
    onsubmit(song.id - 1);
  };
  const handleClickNext = () => {
    onsubmit(song.id + 1);
  };
  const handleAutoNextSong = () => {
    onsubmit(song.id + 1);
  };

  return (
    <AudioPlayer
      className="play-music"
      autoPlay
      src={Buffer(song.url, "base64").toString("ascii")}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickPrevious={handleClickPrev}
      onClickNext={handleClickNext}
      onPlay={() => console.log("playing")}
      onEnded={handleAutoNextSong}
    />
  );
}

export default Playing;
