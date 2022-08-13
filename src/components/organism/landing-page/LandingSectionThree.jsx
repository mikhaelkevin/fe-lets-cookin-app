import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';
import SectionTitle from '../../atomics/landing-page/SectionTitle';
import NewRecipePicture from '../../atomics/landing-page/NewRecipePicture';
import NewRecipeContent from '../../atomics/landing-page/NewRecipeContent';

import { newRecipeDummy } from '../../../utils/data';

function LandingSectionThree() {
  const recipe = newRecipeDummy?.[0];
  return (
    <div className={style.sectionPageSize}>
      <SectionTitle data={{ title: 'New Recipe' }} />
      <div className={style.newRecipeSection}>
        <div className={style.leftSide}>
          <div className={style.leftBackground}>
            <NewRecipePicture data={{ image: recipe?.image || 'images/broken-image.png' }} />
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.content}>
            <NewRecipeContent data={{ id: recipe?.id, title: recipe?.title }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSectionThree;
