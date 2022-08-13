import React from 'react';
import PropTypes from 'prop-types';

function NewRecipePicture({ data }) {
  const { image } = data;

  return (
    <img src={`${image}`} alt="bone-broth" />
  );
}

NewRecipePicture.propTypes = {
  data: PropTypes.shape({ image: PropTypes.string.isRequired }).isRequired,
};

export default NewRecipePicture;
