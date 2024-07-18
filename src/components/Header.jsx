import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h2>Activity Feed App</h2>
      <nav>
        <Link to="/">Activity Feed</Link>
        <Link to="/archived">Archived Calls</Link>
      </nav>
    </header>
  );
};

export default Header;
