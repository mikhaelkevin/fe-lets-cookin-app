import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../global/Image';
import brokenImage from '../../../assets/images/broken-image.png';
import style from '../../../styles/module-css/Profile.module.css';

function RegularCard({ data: { title, image } }) {
  return (
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className={style.featureItemCard}>
        <div className="card h-100 w-100 bg-transparent border-0">
          <span className="position-absolute bottom-0 p-3">{title}</span>
          <Image data={{ image, title }} />
        </div>
      </div>
    </div>
  );
}

RegularCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};

RegularCard.defaultProps = {
  data: {
    title: 'Untitled',
    image: brokenImage,
  },
};

export default RegularCard;
