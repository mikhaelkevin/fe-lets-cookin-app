import React from 'react';
import PropTypes from 'prop-types';

function InputBox({
  data: {
    name, type, placeholder, autoComplete,
  },
}) {
  return (
    <div className="mb-0 mb-md-2 mb-xl-3">
      <label htmlFor={name} className="form-label">
        <p className="mb-1">{name}</p>
        <input className="form-control form-control-lg" type={type} placeholder={placeholder} id={name} autoComplete={autoComplete} />
      </label>
    </div>
  );
}

InputBox.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
  }),
};

InputBox.defaultProps = {
  data: {
    name: 'Untitled inputbox',
    type: 'text',
    place: 'Untitled',
    autoComplete: 'false',
  },
};

export default InputBox;
