import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';
import SearchBar from '../../atomics/landing-page/SearchBar';
import Title from '../../atomics/landing-page/Title';

function LeftSectionOne() {
  return (
    <div className={style.leftContent}>
      <Title />
      <SearchBar />
    </div>
  );
}

export default LeftSectionOne;
