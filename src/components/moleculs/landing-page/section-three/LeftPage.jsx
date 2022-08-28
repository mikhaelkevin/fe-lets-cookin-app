import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../../styles/module-css/LandingPage.module.css';
import brokenImage from '../../../../assets/images/broken-image.png';

function LeftPage({ data: { image } }) {
  return (
    <div className={style.leftSide}>
      <div className={style.leftBackground}>
        <img src={image || brokenImage} alt="new-recipe" />
      </div>
    </div>
  );
}

LeftPage.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
  }),
};

LeftPage.defaultProps = {
  data: {
    image: brokenImage,
  },
};

export default LeftPage;
