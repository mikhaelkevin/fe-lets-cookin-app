import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProfileMenu({ data: { link, menuTitle, buttonClass } }) {
  return (
    <NavLink className={`btn ${buttonClass} btn-lg mb-1 mb-md-1 mb-xl-2`} to={link}>
      {menuTitle}
    </NavLink>
  );
}

ProfileMenu.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    menuTitle: PropTypes.string,
    buttonClass: PropTypes.string,
  }),
};

ProfileMenu.defaultProps = {
  data: {
    link: '/',
    menuTitle: 'Untitled menu',
    buttonClass: 'btn-outline-warning',
  },
};

export default ProfileMenu;
