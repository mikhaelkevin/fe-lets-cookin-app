import React, { useEffect, useState } from 'react';
import style from '../../styles/module-css/DetailResep.module.css';
import { detailRecipeDummy } from '../../utils/data';

import HeadContent from '../../components/organism/detail-recipe/HeadContent';
import DescriptionContent from '../../components/organism/detail-recipe/DescriptionContent';
import CommentList from '../../components/moleculs/detail-recipe/CommentList';
import CommentForm from '../../components/atomics/detail-recipe/CommentForm';
// import numberToWords from 'number-to-words';

function DetailRecipe() {
  const [data, setData] = useState({});

  const dataFetcher = (/* recipeId */) => {
    // Use axios here
    setData(detailRecipeDummy);
  };

  useEffect((/* recipeId */) => {
    document.title = `${process.env.REACT_APP_NAME} | Detail Recipe`;
    dataFetcher();
  }, []);

  return (
    <>
      <div className={style.detailResepContent}>
        <HeadContent data={{ image: data?.image, title: data?.title }} />
      </div>
      <div className={style.detailResepDescription}>
        <DescriptionContent data={{
          ingredients: data?.ingredients,
          videos: data?.videos,
        }}
        />
      </div>
      <div className={style.commentForm}>
        <CommentForm />
      </div>
      <div className={style.commentList}>
        <CommentList />
      </div>
    </>
  );
}

export default DetailRecipe;
