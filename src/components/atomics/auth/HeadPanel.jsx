import React from 'react';
import PropTypes from 'prop-types';

function HeadPanel({ data: { main, sub } }) {
  return (
    <>
      <h2 className="text-center">{main}</h2>
      <span className="text-center">{sub}</span>
    </>
  );
}

HeadPanel.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.string,
    sub: PropTypes.string,
  }),
};

HeadPanel.defaultProps = {
  data: {
    main: 'Untitled',
    sub: 'Untitled',
  },
};

export default HeadPanel;
