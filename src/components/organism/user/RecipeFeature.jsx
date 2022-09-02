import React from 'react';

import { myRecipeDummy, savedRecipeDummy, likedRecipeDummy } from '../../../utils/data';

import MyRecipeCards from '../../moleculs/user/MyRecipeCards';
import RegularCards from '../../moleculs/user/RegularCards';

function RecipeFeature() {
  return (
    <>
      <ul className="nav nav-pills" id="user-feature-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="my-recipe-tab" data-bs-toggle="pill" data-bs-target="#my-recipe" type="button" role="tab" aria-controls="my-recipe" aria-selected="true">My Recipe</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="saved-recipe-tab" data-bs-toggle="pill" data-bs-target="#saved-recipe" type="button" role="tab" aria-controls="saved-recipe" aria-selected="false">Saved Recipe</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="liked-recipe-tab" data-bs-toggle="pill" data-bs-target="#liked-recipe" type="button" role="tab" aria-controls="liked-recipe" aria-selected="false">Liked Recipe</button>
        </li>
      </ul>
      <hr className="mx-1 mx-md-1 mx-xl-2" />
      <div className="tab-content h-100" id="user-feature-tabContent">
        <div className="tab-pane fade show active" id="my-recipe" role="tabpanel" aria-labelledby="my-recipe-tab">
          <MyRecipeCards data={myRecipeDummy} />
        </div>
        <div className="tab-pane fade" id="saved-recipe" role="tabpanel" aria-labelledby="saved-recipe-tab">
          <RegularCards data={savedRecipeDummy} />
        </div>
        <div className="tab-pane fade" id="liked-recipe" role="tabpanel" aria-labelledby="liked-recipe-tab">
          <RegularCards data={likedRecipeDummy} />
        </div>
      </div>
    </>
  );
}

export default RecipeFeature;
