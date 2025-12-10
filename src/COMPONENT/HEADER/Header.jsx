import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/BrandAssets_Logos_01-Wordmark.jpg";

import {
  Search as SearchIcon,
  NotificationsNone as NotificationsNoneIcon,
  AccountBox as AccountBoxIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";

const Header = () => {
  return (
    <header className="header_container">
      {/* Left side */}
      <div className="header_left">
        <ul className="header_nav">
          <li className="header_logo">
            <img src={NetflixLogo} alt="Netflix Logo" />
          </li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Right side */}
      <div className="header_right">
        <ul className="header_icons">
          <li><SearchIcon /></li>
          <li><NotificationsNoneIcon /></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
