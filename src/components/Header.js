import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <h3>Best Clothes Color</h3>
        <p>Just click the clothes to select a new color</p>
      </div>
      <div>
        <a href="https://github.com/luisggc/best-clothes-color" style={{ color: "white" }} target="_blank">
          <i style={{ fontSize: 24 }} className="fa">
            &#xf09b;
          </i>
        </a>
      </div>
    </header>
  );
}
