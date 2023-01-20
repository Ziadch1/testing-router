import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to={"/home"}>home</Link>
        </li>
        <li>
          <Link to={"/1"}>Laptops</Link>
        </li>
        <li>
          <Link to={"/2"}>Souris & keybord</Link>
        </li>
        <li>
          <Link to={"/3"}>Casque</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
