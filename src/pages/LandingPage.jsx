import React from 'react';
import LandingSectionOne from '../components/organism/LandingSectionOne';
import style from '../styles/module-css/LandingPage.module.css';

function LandingPage() {
  return (
    <>
      <LandingSectionOne />
      <div className={style.sectionPageSize}>
        <div className={style.sectionTitle}>
          <span>Popular For You!</span>
          <div className={style.titleLine} />
        </div>
        <div className={style.popularSection}>
          <div className={style.popularCard} style={{ backgroundImage: "url('/images/pizza.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <span>Pizza Lamoa</span>
          </div>
          <div className={style.popularCard} style={{ backgroundImage: "url('/images/burger.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <span>King Burger</span>
          </div>
        </div>
      </div>
      {/* <div style={{ minHeight: 'inherit' }}>
        New Recipe
      </div> */}
    </>

  );
}

export default LandingPage;
