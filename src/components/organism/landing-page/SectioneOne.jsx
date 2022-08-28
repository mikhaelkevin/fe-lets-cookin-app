import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';
import LeftPage from '../../moleculs/landing-page/section-one/LeftPage';
import RightPage from '../../moleculs/landing-page/section-one/RightPage';

function SectioneOne() {
  return (
    <>
      <div className={style.leftContent}>
        <LeftPage />
      </div>
      <div className={style.rightContent}>
        <RightPage />
      </div>
    </>
  );
}

export default SectioneOne;
