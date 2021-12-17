import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted huge menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Posts
        </Link>
        <Link to="/universities" className="item hover">
          Universities
        </Link>
        <Link to="/postallookup" className="item">
          Postal Lookup
        </Link>
      </div>
    </div>
  );
};

export default Header;
