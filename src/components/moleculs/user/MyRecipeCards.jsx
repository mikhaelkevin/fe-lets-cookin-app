import React from 'react';
import PropTypes from 'prop-types';
import MyRecipeCard from '../../atomics/user/MyRecipeCard';
import brokenImage from '../../../assets/images/broken-image.png';

function MyRecipeCards({ data }) {
  return (
    <div className="row">
      {data?.map((item) => (
        <MyRecipeCard data={{ title: item?.title, image: item?.image }} key={item?.id} />
      ))}
    </div>
  );
}

MyRecipeCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};

MyRecipeCards.defaultProps = {
  data: [{
    id: 1,
    title: 'Untitled',
    image: brokenImage,
  }],
};

export default MyRecipeCards;
