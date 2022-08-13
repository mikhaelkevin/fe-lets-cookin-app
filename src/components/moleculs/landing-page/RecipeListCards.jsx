import React from 'react';
import RecipeListCard from '../../atomics/landing-page/RecipeListCard';
import { recipeListDummy } from '../../../utils/data';

function RecipeListCards() {
  return (
    <div className="row">
      {recipeListDummy?.map((item) => (
        <RecipeListCard
          data={{
            title: item?.title,
            image: item?.image || '/images/broken-image.png',
          }}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default RecipeListCards;
