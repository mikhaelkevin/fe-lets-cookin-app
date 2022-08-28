import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../styles/module-css/LandingPage.module.css';
import brokenImage from '../../../assets/images/broken-image.png';

function PopularCard({ data }) {
  const innerStyle = {
    backgroundImage: `url('${data?.image || brokenImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className={style.popularCard} style={innerStyle}>
      <span>{data?.title}</span>
    </div>
  );
}

PopularCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

PopularCard.defaultProps = {
  data: {
    image: brokenImage,
    title: 'broken-popular-recipe',
  },
};

export default PopularCard;
