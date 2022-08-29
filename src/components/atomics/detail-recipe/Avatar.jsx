import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../global/Image';
import userIcon from '../../../assets/icons/user-icon.svg';

function Avatar({ data: { image, title } }) {
  return (
    <div className="col-lg-1 col-sm-2 col-3 pe-lg-5">
      <Image data={{ image, title }} />
    </div>
  );
}

Avatar.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

Avatar.defaultProps = {
  data: {
    image: userIcon,
    title: 'User Avatar',
  },
};

export default Avatar;
