import React from 'react';
import PropTypes from 'prop-types';

function ProfileMenu({ data: { menuTitle, buttonClass }, openModal }) {
  return (
    <button type="button" className={`btn ${buttonClass} btn-lg mb-1 mb-md-1 mb-xl-2`} onClick={openModal}>
      {menuTitle}
    </button>
  );
}

ProfileMenu.propTypes = {
  data: PropTypes.shape({
    menuTitle: PropTypes.string,
    buttonClass: PropTypes.string,
  }),
  openModal: PropTypes.func,
};

ProfileMenu.defaultProps = {
  data: {
    menuTitle: 'Untitled menu',
    buttonClass: 'btn-outline-warning',
  },
  openModal: () => {},
};

export default ProfileMenu;
