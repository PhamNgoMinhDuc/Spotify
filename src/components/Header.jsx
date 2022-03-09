import React from "react";
import { FaSpotify } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <FaSpotify className="header-icon" />
      <span className="header-title">Spotify</span>
    </header>
  );
}

export default Header;
