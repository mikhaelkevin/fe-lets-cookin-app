import React from 'react';
import { recipeListDummy } from '../../../../utils/data';
import RecipeListCard from '../../../atomics/landing-page/RecipeListCard';

function RecipeListCards() {
  return (
    <div className="row">
      {recipeListDummy?.map((item) => (
        <RecipeListCard data={item} key={item?.id} />
      ))}
    </div>
  );
}

export default RecipeListCards;
