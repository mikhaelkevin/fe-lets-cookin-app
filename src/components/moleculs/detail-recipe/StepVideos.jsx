import React from 'react';
import PropTypes from 'prop-types';

import VideoButton from '../../atomics/detail-recipe/VideoButton';

function StepVideos({ data: { videos } }) {
  return (
    <>
      <h1>Video Step</h1>
      {videos?.map((item, index) => {
        const videoKey = index + 1;
        return (<VideoButton data={{ url: item }} key={videoKey} />);
      })}
    </>
  );
}

StepVideos.propTypes = {
  data: PropTypes.shape({
    videos: PropTypes.arrayOf(PropTypes.string),
  }),
};

StepVideos.defaultProps = {
  data: {
    videos: ['#'],
  },
};

export default StepVideos;
