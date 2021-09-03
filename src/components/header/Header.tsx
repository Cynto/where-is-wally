import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 style={{color: '#3a86ff'}}>Where's </h1>
        <h1 style={{color: 'red'}}>Wally?</h1>
      </Link>
    </header>
  );
}

export default Header;
