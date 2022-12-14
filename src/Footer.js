import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by Maryna Dmytryk and is{" "}
      <a href="https://github.com/frekenb/my-react-app">
        {" "}
        open-sourced on GitHub
      </a>{" "}
      and hosted on{" "}
      <a href="https://eloquent-malabi-42b943.netlify.app/">Netlify </a>
    </footer>
  );
}
