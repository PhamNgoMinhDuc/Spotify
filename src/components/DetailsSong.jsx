import React from "react";

import { Buffer } from "buffer";

function DetailsSong(props) {
  const { song } = props;
  return (
    <div className="detail">
      <div className="detail-title">
        <div className="playing">Now Playing</div>
        <div className="name-song">{song.name}</div>
      </div>
      <div className="detail-body">
        <div className="detail-img">
          <img src={Buffer(song.img_song, "base64").toString("ascii")} alt="" />
        </div>
        <div className="detail-author">
          <img className="img-author" src={Buffer(song.img_author, "base64").toString("ascii")} alt="" />
          <div className="name-author">{song.author}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailsSong;
