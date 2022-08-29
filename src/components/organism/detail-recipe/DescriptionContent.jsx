import React from 'react';
import PropTypes from 'prop-types';

import Ingredients from '../../moleculs/detail-recipe/Ingredients';
import StepVideos from '../../moleculs/detail-recipe/StepVideos';

function DescriptionContent({ data: { ingredients, videos } }) {
  return (
    <>
      <Ingredients data={{ ingredients }} />
      <StepVideos data={{ videos }} />
    </>
  );
}

DescriptionContent.propTypes = {
  data: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string),
    videos: PropTypes.arrayOf(PropTypes.string),
  }),
};

DescriptionContent.defaultProps = {
  data: {
    ingredients: ['No ingredients added.'],
    videos: ['#'],
  },
};

export default DescriptionContent;
