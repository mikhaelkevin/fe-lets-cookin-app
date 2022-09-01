import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import style from '../../styles/module-css/Navbar.module.css';

function Navbar() {
  const { pathname } = useLocation();
  const token = true;

  return (
    <div className={style.navbar} style={pathname === '/' ? { position: 'absolute' } : { position: 'relative' }}>
      <div className="row d-flex justify-content-center pt-lg-5 pt-md-5 m-0">

        {token && (
          <>
            <div className="col-md-2 col-12 text-center">
              <NavLink exact to="/">Home</NavLink>
            </div>
            <div className="col-md-2 col-12 text-center">
              <NavLink to="/new">Add Recipe</NavLink>
            </div>
            <div className="col-md-2 col-12 text-center ms-auto nav-auth-item">
              <NavLink to="/profile">Profile</NavLink>
            </div>
          </>
        )}

        {!token && (
        <div className="col-md-2 col-12 text-center ms-auto nav-auth-item">
          <NavLink to="/login">Login</NavLink>
        </div>
        ) }
      </div>
    </div>
  );
}

export default Navbar;
