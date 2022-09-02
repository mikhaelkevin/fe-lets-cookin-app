import React from 'react';
import PropTypes from 'prop-types';
import RegularCard from '../../atomics/user/RegularCard';
import brokenImage from '../../../assets/images/broken-image.png';

function RegularCards({ data }) {
  return (
    <div className="row">
      {data?.map((item) => (
        <RegularCard data={{ title: item?.title, image: item?.image }} key={item?.id} />
      ))}
    </div>
  );
}

RegularCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};

RegularCards.defaultProps = {
  data: [{
    id: 1,
    title: 'Untitled',
    image: brokenImage,
  }],
};

export default RegularCards;
