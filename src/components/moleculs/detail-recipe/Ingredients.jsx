import React from 'react';
import PropTypes from 'prop-types';

function Ingredients({ data: { ingredients } }) {
  return (
    <>
      <h1>Ingredients</h1>
      {ingredients?.map((item, index) => {
        const ingredientKey = index + 1;
        return <p key={ingredientKey}>{`- ${item}`}</p>;
      })}
    </>
  );
}

Ingredients.propTypes = {
  data: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }),
};

Ingredients.defaultProps = {
  data: {
    ingredients: ['No ingredients added.'],
  },
};

export default Ingredients;
