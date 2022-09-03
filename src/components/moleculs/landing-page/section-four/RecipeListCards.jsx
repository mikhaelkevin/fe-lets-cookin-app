/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { recipeListDummy } from '../../../../utils/data';
import RecipeListCard from '../../../atomics/landing-page/RecipeListCard';

function RecipeListCards() {
  const [data, setData] = useState([]);

  const dataFetcher = () => {
    setData(recipeListDummy);
  };

  useEffect(() => {
    dataFetcher();
  }, []);

  return (
    <div className="row">
      {data?.map((item) => (
        <RecipeListCard data={item} key={item?.id} />
      ))}
    </div>
  );
}

export default RecipeListCards;
