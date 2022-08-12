import React from 'react';
import LandingSectionOne from '../components/organism/landing-page/LandingSectionOne';
import LandingSectionTwo from '../components/organism/landing-page/LandingSectionTwo';
// import style from '../styles/module-css/LandingPage.module.css';

function LandingPage() {
  return (
    <>
      <LandingSectionOne />
      <LandingSectionTwo />
      {/* <div style={{ minHeight: 'inherit' }}>
        New Recipe
      </div> */}
    </>

  );
}

export default LandingPage;
