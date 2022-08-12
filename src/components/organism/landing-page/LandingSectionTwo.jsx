import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';
import SectionTitle from '../../atomics/landing-page/SectionTitle';
import PopularCards from '../../moleculs/landing-page/PopularCards';

function LandingSectionTwo() {
  return (
    <div className={style.sectionPageSize}>
      <SectionTitle data={{ title: 'Popular For You!' }} />
      <PopularCards />
    </div>
  );
}

export default LandingSectionTwo;
