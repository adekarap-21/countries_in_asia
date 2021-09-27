import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
const NavBar = () => {
  return (
    <Router>
      <nav className="header">
          <h2 id="icon">
            All Countries In Asia
          </h2>
      </nav>
    </Router>
  );
};

export default NavBar;
