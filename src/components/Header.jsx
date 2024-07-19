import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navStyle = {
    display: 'flex',
    gap: '15px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  };

  return (
    <header style={headerStyle}>
      <h2>Air Call</h2>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>In box</Link>
        <Link to="/archived" style={linkStyle}>All calls</Link>
      </nav>
    </header>
  );
};

export default Header;
