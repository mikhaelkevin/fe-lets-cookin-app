import React, { useEffect } from 'react';
import style from '../styles/module-css/LandingPage.module.css';
import SectioneOne from '../components/organism/landing-page/SectioneOne';
import SectionTwo from '../components/organism/landing-page/SectionTwo';
import SectionThree from '../components/organism/landing-page/SectionThree';
import SectionFour from '../components/organism/landing-page/SectionFour';

function LandingPage() {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <>
      <div className={style.sectionOne}>
        <SectioneOne />
      </div>
      <div className={style.sectionPageSize}>
        <SectionTwo />
      </div>
      <div className={style.sectionPageSize}>
        <SectionThree />
      </div>
      <div className={style.sectionPageSize}>
        <SectionFour />
      </div>
    </>
  );
}

export default LandingPage;
