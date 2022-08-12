import React from 'react';
import PopularCard from '../../atomics/landing-page/PopularCard';
import style from '../../../styles/module-css/LandingPage.module.css';
import { recipeDummy } from '../../../utils/data';

function PopularCards() {
  return (
    <div className={style.popularSection}>
      {recipeDummy?.map((item) => (
        <PopularCard data={item} key={item.id} />
      ))}
    </div>
  );
}

export default PopularCards;
