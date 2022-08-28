import React from 'react';
import { newRecipeDummy } from '../../../utils/data';
import style from '../../../styles/module-css/LandingPage.module.css';
import SectionTitle from '../../atomics/landing-page/SectionTitle';
import LeftPage from '../../moleculs/landing-page/section-three/LeftPage';
import RightPage from '../../moleculs/landing-page/section-three/RightPage';

function SectionThree() {
  const recipe = newRecipeDummy?.[0];

  return (
    <>
      <SectionTitle data={recipe?.title} />
      <div className={style.newRecipeSection}>
        <LeftPage data={{ image: recipe?.image }} />
        <RightPage data={{ id: recipe?.id, title: recipe?.title }} />
      </div>
    </>
  );
}

export default SectionThree;
