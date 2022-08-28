import React from 'react';
import SectionTitle from '../../atomics/landing-page/SectionTitle';
import PopularCards from '../../moleculs/landing-page/section-two/PopularCards';

function SectionTwo() {
  return (
    <>
      <SectionTitle data="Popular for you!" />
      <PopularCards />
    </>
  );
}

export default SectionTwo;
