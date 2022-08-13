import React, { useEffect } from 'react';
import LandingSectionOne from '../components/organism/landing-page/LandingSectionOne';
import LandingSectionTwo from '../components/organism/landing-page/LandingSectionTwo';
import LandingSectionThree from '../components/organism/landing-page/LandingSectionThree';
import LandingSectionFour from '../components/organism/landing-page/LandingSectionFour';

function LandingPage() {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <>
      <LandingSectionOne />
      <LandingSectionTwo />
      <LandingSectionThree />
      <LandingSectionFour />
    </>

  );
}

export default LandingPage;
