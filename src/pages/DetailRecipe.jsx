import React, { useEffect } from 'react';
import style from '../styles/module-css/DetailResep.module.css';
import HeadContent from '../components/organism/detail-recipe/HeadContent';
import DescriptionContent from '../components/organism/detail-recipe/DescriptionContent';
import CommentList from '../components/moleculs/detail-recipe/CommentList';
import CommentForm from '../components/atomics/detail-recipe/CommentForm';
// import numberToWords from 'number-to-words';

function DetailRecipe() {
  useEffect(() => {
    document.title = 'Detail Resep';
  }, []);

  return (
    <>
      <div className={style.detailResepContent}>
        <HeadContent />
      </div>
      <div className={style.detailResepDescription}>
        <DescriptionContent />
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
