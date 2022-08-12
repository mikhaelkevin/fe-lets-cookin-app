import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';
import LeftSectionOne from '../../moleculs/landing-page/LeftSectionOne';
import RightSectionOne from '../../moleculs/landing-page/RightSectionOne';

function LandingSectionOne() {
  return (
    <div className={style.sectionOne}>
      <LeftSectionOne />
      <RightSectionOne />
    </div>
  );
}

export default LandingSectionOne;
