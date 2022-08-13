import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../styles/module-css/LandingPage.module.css';

function PopularCard({ data }) {
  const { title, image } = data;

  const innerStyle = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={style.popularCard} style={innerStyle}>
      <span>{title}</span>
    </div>
  );
}

PopularCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PopularCard;
