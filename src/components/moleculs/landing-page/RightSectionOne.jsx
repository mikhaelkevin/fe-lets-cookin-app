import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';
import BackgroundPicture from '../../atomics/landing-page/BackgroundPicture';
import MainPicture from '../../atomics/landing-page/MainPicture';

function RightSectionOne() {
  return (
    <div className={style.rightContent}>
      {/* <div className={style.mainFoodBg}>
            <img src="/images/bg-main-food.svg" alt="lettuce" />
          </div> */}
      <MainPicture />
      <BackgroundPicture />
    </div>
  );
}

export default RightSectionOne;
