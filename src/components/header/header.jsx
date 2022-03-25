import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

import DuoRoundedIcon from "@material-ui/icons/DuoRounded";

const Header = () => {
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-group">
          <DuoRoundedIcon className="header-icon" />
          Tellium
        </li>
        <li className="header-tab-group">
          <Link className="header-tab" to="/signin">
            Sign In
          </Link>
          <Link className="header-tab" to="/signup">
            Sign Up
          </Link>
          <Link className="header-tab" to="/howitworks">
            How It Works
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
