import React from 'react';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-item">
        <a href="/">Home</a>
      </div>
      <div className="nav-item">
        <a href="/">Add Recipe</a>
      </div>
      <div className="nav-item">
        <a href="/">Profile</a>
      </div>
      <div className="nav-item-auth">
        <a href="/">Login</a>
      </div>
    </div>
  );
}

export default Navbar;
