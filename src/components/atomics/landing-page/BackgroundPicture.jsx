import React from 'react';
import style from '../../../styles/module-css/LandingPage.module.css';

function BackgroundPicture() {
  return (
    <>
      <div className={style.leftSide}>
        <img src="/images/dot-vector.svg" alt="dot-one" />
        <img src="/images/dot-vector.svg" alt="dot-two" />
      </div>
      <div className={style.rightSide} />
    </>
  );
}

export default BackgroundPicture;
