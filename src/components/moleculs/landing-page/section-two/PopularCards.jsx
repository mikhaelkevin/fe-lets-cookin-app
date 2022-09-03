/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { recipeDummy } from '../../../../utils/data';
import style from '../../../../styles/module-css/LandingPage.module.css';
import PopularCard from '../../../atomics/landing-page/PopularCard';

function PopularCards() {
  const [data, setData] = useState([]);

  const dataFetcher = () => {
    setData(recipeDummy);
  };

  useEffect(() => {
    dataFetcher();
  });

  return (
    <div className={style.popularSection}>
      {data?.map((item) => (
        <PopularCard data={{ image: item?.image, title: item?.title }} key={item?.id} />
      ))}
    </div>
  );
}

export default PopularCards;
