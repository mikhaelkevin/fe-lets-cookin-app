import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';
import SectionTitle from '../../atomics/landing-page/SectionTitle';
import RecipeListCards from '../../moleculs/landing-page/RecipeListCards';

function LandingSectionFour() {
  return (
    <div className={style.sectionPageSize}>
      <SectionTitle data={{ title: 'Recipe list' }} />
      <div className={style.recipeListContent}>
        <RecipeListCards />
      </div>
    </div>
  );
}

export default LandingSectionFour;
