import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../styles/module-css/LandingPage.module.css';
import brokenImage from '../../../assets/images/broken-image.png';
import Image from '../../global/Image';

function RecipeListCard({ data }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className={style.cardCustomHeight}>
        <div className="card h-100 w-100">
          <span>{data?.title}</span>
          <Image data={{ image: data?.image, title: data?.title }} />
        </div>
      </div>
    </div>
  );
}

RecipeListCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};

RecipeListCard.defaultProps = {
  data: {
    id: 1,
    title: 'Untitled',
    image: brokenImage,
  },
};

export default RecipeListCard;
