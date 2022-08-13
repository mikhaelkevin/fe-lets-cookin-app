import React from 'react';
import SectionTitle from '../components/atomics/landing-page/SectionTitle';
import LandingSectionOne from '../components/organism/landing-page/LandingSectionOne';
import LandingSectionTwo from '../components/organism/landing-page/LandingSectionTwo';
import style from '../styles/module-css/LandingPage.module.css';

function LandingPage() {
  return (
    <>
      <LandingSectionOne />
      <LandingSectionTwo />
      <div className={style.sectionPageSize}>
        <SectionTitle data={{ title: 'New Recipe' }} />
        <div className={style.newRecipeSection}>
          <div className={style.leftSide}>
            <div className={style.leftBackground}>
              <img src="/images/bone-broth.svg" alt="bone-broth" />
            </div>
          </div>
          <div className={style.rightSide}>
            <div className={style.content}>
              <span>Healthy Bone Broth Ramen (Quick & Easy) </span>
              <hr />
              <button type="submit" className="btn btn-lg btn-warning">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default LandingPage;
