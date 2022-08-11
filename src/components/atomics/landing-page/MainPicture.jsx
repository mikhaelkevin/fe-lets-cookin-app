import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';

function MainPicture() {
  return (
    <div className={style.mainFood}>
      <img src="/images/main-food.svg" alt="main-food" />
    </div>
  );
}

export default MainPicture;
