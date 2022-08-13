import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../styles/module-css/LandingPage.module.css';

function RecipeListCard({ data }) {
  const { title, image } = data;
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className={style.cardCustomHeight}>
        <div className="card h-100 w-100">
          <span>{title}</span>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}

RecipeListCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeListCard;
