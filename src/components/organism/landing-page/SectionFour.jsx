import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';
import SectionTitle from '../../atomics/landing-page/SectionTitle';
import RecipeListCards from '../../moleculs/landing-page/section-four/RecipeListCards';

function SectionFour() {
  return (
    <>
      <SectionTitle data="Recipe List" />
      <div className={style.recipeListContent}>
        <RecipeListCards />
      </div>
    </>
  );
}

export default SectionFour;
