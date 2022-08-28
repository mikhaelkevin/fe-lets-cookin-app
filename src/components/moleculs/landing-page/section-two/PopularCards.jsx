import React from 'react';
import { recipeDummy } from '../../../../utils/data';
import style from '../../../../styles/module-css/LandingPage.module.css';
import PopularCard from '../../../atomics/landing-page/PopularCard';

function PopularCards() {
  return (
    <div className={style.popularSection}>
      {recipeDummy?.map((item) => (
        <PopularCard data={{ image: item?.image, title: item?.title }} key={item?.id} />
      ))}
    </div>
  );
}

export default PopularCards;
