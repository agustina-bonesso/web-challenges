import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hola Mundo</h2>
      <label htmlFor="input">Name: </label>
      <input id="input"></input>
      <a className="article__link" href="http://google.com.ar">
        MY LINK
      </a>
      <button type="submit"></button>
    </article>
  );
}
