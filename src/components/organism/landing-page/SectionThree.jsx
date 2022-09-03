import React, { useState, useEffect } from 'react';
import { newRecipeDummy } from '../../../utils/data';
import style from '../../../styles/module-css/LandingPage.module.css';
import SectionTitle from '../../atomics/landing-page/SectionTitle';
import LeftPage from '../../moleculs/landing-page/section-three/LeftPage';
import RightPage from '../../moleculs/landing-page/section-three/RightPage';

function SectionThree() {
  const [data, setData] = useState([]);

  const dataFetcher = () => {
    setData(newRecipeDummy?.[0]);
  };

  useEffect(() => {
    dataFetcher();
  }, []);

  return (
    <>
      <SectionTitle data={data?.title} />
      <div className={style.newRecipeSection}>
        <LeftPage data={{ image: data?.image }} />
        <RightPage data={{ id: data?.id, title: data?.title }} />
      </div>
    </>
  );
}

export default SectionThree;
