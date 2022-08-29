import React from 'react';
import PropTypes from 'prop-types';

import playButton from '../../../assets/icons/play-icon.svg';

import Image from '../../global/Image';

function VideoButton({ data: { url } }) {
  return (
    <div
      className="btn btn-warning btn-lg"
      onClick={() => window.open(url)}
      onKeyUp={() => window.open(url)}
      role="button"
      tabIndex={0}
    >
      <Image data={{ image: playButton, title: 'play-icon' }} />
    </div>
  );
}

VideoButton.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
  }),
};

VideoButton.defaultProps = {
  data: {
    url: '#',
  },
};

export default VideoButton;
