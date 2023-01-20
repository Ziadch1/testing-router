import React from "react";
import { Link } from "react-router-dom";
function SretKybrd() {
  return (
    <div>
      <h1>Souris et casque</h1>
      <img
        src="https://virginmegastore.ma/storage/2020/03/pack-clavier-souris-sans-fil-2.jpg"
        alt=""
        width={"200px"}
      />
      <button>
        <Link to={"/"}>Return to home</Link>
      </button>
    </div>
  );
}

export default SretKybrd;
