import React from 'react';
import '../../styles/index.css';
import PropTypes from 'prop-types';

function Layouts({ children }) {
  return (
    <div className="layouts">
      {children}
    </div>
  );
}

Layouts.propTypes = {
  children: PropTypes.elementType,
};

Layouts.defaultProps = {
  children: null,
};
export default Layouts;
