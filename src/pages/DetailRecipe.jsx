import React, { useEffect } from 'react';
import { detailRecipeDummy, commentUserDummy } from '../utils/data';
import style from '../styles/module-css/DetailResep.module.css';
// import numberToWords from 'number-to-words';

function DetailRecipe() {
  const a = 2;

  useEffect(() => {
    document.title = 'Detail Resep';
  }, []);

  return (
    <>
      <div className={style.detailResepContent}>
        <div className="card">
          <div className="card-header">
            <p>{detailRecipeDummy?.title}</p>
          </div>
          <div className="position-absolute bottom-0 end-0 mb-3 me-md-2 me-3 ">
            <button type="submit" className={`btn mx-2 bg-light ${a === 1 ? null : 'active'}`}>Like</button>
            <button type="submit" className="btn btn-light mx-2">Save</button>
          </div>
          <img src={detailRecipeDummy?.image} alt={detailRecipeDummy?.title} />
        </div>
      </div>
      <div className={style.detailResepDescription}>
        <h1>Ingredients</h1>
        {detailRecipeDummy?.ingredients.map((item, index) => {
          const ingredientKey = index + 1;
          return <p key={ingredientKey}>{`- ${item}`}</p>;
        })}
        <h1>Video Step</h1>
        {detailRecipeDummy?.videos?.map((item) => (
          <div
            className="btn btn-warning btn-lg"
            onClick={() => window.open(item)}
            onKeyUp={() => window.open(item)}
            role="button"
            tabIndex={0}
            key={item}
          >
            <img src="./icons/play-icon.svg" alt="play-icon" />
          </div>
        ))}
      </div>
      <div className={style.commentForm}>
        <form>
          <textarea className="bg-light" name="commentBox" id="commentBox" placeholder="Comment:" />
          <button
            type="submit"
            className="btn btn-warning text-light btn-lg justify-content-center"
          >
            Send
          </button>
        </form>
      </div>
      <div className={style.commentList}>
        <h1>Comment</h1>
        {commentUserDummy?.map((item) => (
          <div className="row mb-5" key={item?.username}>
            <div className="col-lg-1 col-sm-2 col-3 pe-lg-5">
              <img src={item?.image} alt={item?.image} />
            </div>
            <div className="col-lg-11 col-sm-10 col-9 ps-lg-4">
              <p>{item?.username}</p>
              <span>
                {item?.comment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailRecipe;
