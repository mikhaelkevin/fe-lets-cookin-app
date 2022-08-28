/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import PropTypes from 'prop-types';
import brokenImage from '../../assets/images/broken-image.png';

function Image({ data: { image, title } }) {
  const brokenImageHandler = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = brokenImage;
  };

  return (
    <img
      src={image || brokenImage}
      alt={title}
      onError={((e) => brokenImageHandler(e))}
    />
  );
}

Image.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

Image.defaultProps = {
  data: {
    image: brokenImage,
    title: 'Untitled',
  },
};

export default Image;
