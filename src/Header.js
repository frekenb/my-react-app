import React from "react";
import "./App.css";

function Header() {
  const cities = ["Kiev", "Lviv", "Mykolaiv", "Kharkiv", "Chernihiv"];
  return (
    <header>
      <ul className="navigation-items d-flex flex-row bd-highlight mb-3">
        <li className="navigation-item p-2 bd-highlight">
          <a href="/">{cities[0]}</a>
        </li>
        <li className="navigation-item p-2 bd-highlight">
          <a href="/Lviv">{cities[1]}</a>
        </li>
        <li className="navigation-item p-2 bd-highlight">
          <a href="/Mykolaiv">{cities[2]}</a>
        </li>
        <li className="navigation-item p-2 bd-highlight">
          <a href="/Kharkiv">{cities[3]}</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
