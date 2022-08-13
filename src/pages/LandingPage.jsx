import React, { useEffect } from 'react';
import LandingSectionOne from '../components/organism/landing-page/LandingSectionOne';
import LandingSectionTwo from '../components/organism/landing-page/LandingSectionTwo';
import LandingSectionThree from '../components/organism/landing-page/LandingSectionThree';
import style from '../styles/module-css/LandingPage.module.css';
import SectionTitle from '../components/atomics/landing-page/SectionTitle';
import { recipeListDummy } from '../utils/data';

function LandingPage() {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <>
      <LandingSectionOne />
      <LandingSectionTwo />
      <LandingSectionThree />
      <div className={style.sectionPageSize}>
        <SectionTitle data={{ title: 'Recipe list' }} />
        <div className={style.recipeListContent}>
          <div className="row recipeListLayouts">
            {recipeListDummy?.map((item) => (
              <div className="col-lg-4 col-md-6 col-12 mb-4" key={item?.id}>
                <div className={style.cardCustomHeight}>
                  <div className="card h-100 w-100">
                    <span>{item?.title}</span>
                    <img src={item?.image || '/images/broken-image.png'} alt="x" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}

export default LandingPage;
