import React from 'react';
import '../styles/menu.css';

export default function Menu(props) {
  return (
    <div className="background">
      <h1 className="menu-heading">Let's Play Trivia!</h1>
      <p className="menu-text">Test your knowledge on all types of topics</p>
      <button className="menu-button" onClick={props.showMenu}>
        General Knowledge
      </button>
      <span className="blob-1"></span>
      <span className="blob-2"></span>
    </div>
  );
}
