import React from 'react';
import style from '../../../../styles/module-css/LandingPage.module.css';
import Image from '../../../global/Image';
import foodImage from '../../../../assets/images/main-food.svg';
import dotVector from '../../../../assets/images/dot-vector.svg';

function RightPage() {
  return (
    <>
      <div className={style.mainFood}>
        <Image data={{ image: foodImage, title: 'main-food' }} />
      </div>
      <div className={style.leftSide}>
        <Image data={{ image: dotVector, title: 'dot-one' }} />
        <Image data={{ image: dotVector, title: 'dot-two' }} />
      </div>
      <div className={style.rightSide} />
    </>
  );
}

export default RightPage;
