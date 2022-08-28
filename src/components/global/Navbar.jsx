import React from 'react';
import { useLocation } from 'react-router-dom';
import style from '../../styles/module-css/Navbar.module.css';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className={style.navbar} style={pathname === '/' ? { position: 'absolute' } : { position: 'relative' }}>
      <div className="row d-flex justify-content-center pt-lg-5 pt-md-5 m-0">
        <div className="col-md-2 col-12 text-center">
          <a href="/">Home</a>
        </div>
        <div className="col-md-2 col-12 text-center">
          <a href="/">
            Add Recipe
          </a>
        </div>
        <div className="col-md-2 col-12 text-center">
          <a href="/">
            Profile
          </a>
        </div>
        <div className="col-md-2 col-12 text-center ms-auto nav-auth-item">
          <a href="/">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
