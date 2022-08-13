import React from 'react';
import '../../styles/App.css';
import PropTypes from 'prop-types';

function Layouts({ children }) {
  return (
    <div className="layouts">
      {children}
    </div>
  );
}

Layouts.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element.isRequired,
  ).isRequired,
};

export default Layouts;
