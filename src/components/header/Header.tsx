import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 style={{color: 'blue'}}>Where's </h1>
        <h1 style={{color: 'red'}}>Wally?</h1>
      </Link>
    </header>
  );
}

export default Header;
