import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function NewRecipeContent({ data }) {
  const { id, title } = data;
  const navigate = useNavigate();

  return (
    <>
      <span>{title}</span>
      <hr />
      <button type="submit" className="btn btn-lg btn-warning" onClick={() => navigate(`/recipe/${id}`)}>
        See more
      </button>
    </>
  );
}

NewRecipeContent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewRecipeContent;
