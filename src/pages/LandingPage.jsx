import React from 'react';
import style from '../styles/module-css/LandingPage.module.css';

function LandingPage() {
  return (
    <>
      <div className={style.sectionOne}>
        <div className={style.leftContent}>
          <span>Discover Recipe</span>
          <span>& Delicious Food</span>
          <input type="search" name="search" id="search" placeholder="Search recipe" />
        </div>
        <div className={style.rightContent}>
          {/* <div className={style.mainFoodBg}>
            <img src="/images/bg-main-food.svg" alt="lettuce" />
          </div> */}
          <div className={style.mainFood}>
            <img src="/images/main-food.svg" alt="main-food" />
          </div>
          <div className={style.leftSide}>
            <img src="/images/dot-vector.svg" alt="dot-one" />
            <img src="/images/dot-vector.svg" alt="dot-two" />
          </div>
          <div className={style.rightSide} />
        </div>
      </div>
      <div style={{ minHeight: 'inherit', backgroundColor: 'blue' }} />
    </>

  );
}

export default LandingPage;
