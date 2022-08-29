import React from 'react';
import PropTypes from 'prop-types';

import brokenImage from '../../../assets/images/broken-image.png';

import Image from '../../global/Image';

function HeadContent({ data: { title, image } }) {
  const a = 2;

  return (
    <div className="card">
      <div className="card-header">
        <p>{title}</p>
      </div>
      <div className="position-absolute bottom-0 end-0 mb-3 me-md-2 me-3 ">
        <button type="submit" className={`btn mx-2 bg-light ${a === 1 ? null : 'active'}`}>Like</button>
        <button type="submit" className="btn btn-light mx-2">Save</button>
      </div>
      <Image data={{ image: image || brokenImage, title }} />
    </div>
  );
}

HeadContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};

HeadContent.defaultProps = {
  data: {
    title: 'Untitled',
    image: brokenImage,
  },
};

export default HeadContent;
