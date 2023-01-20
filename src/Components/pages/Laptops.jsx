import React from "react";
import { Link } from "react-router-dom";
function Laptops() {
  return (
    <div>
      <h1>LAPTOPS</h1>
      <img
        src="https://gfx.senetic.com/i/gallery/91316638_9062952304.jpg"
        width={"200px"}
      />
      <button>
        <Link to={"/"}>Return to home</Link>
      </button>
    </div>
  );
}

export default Laptops;
