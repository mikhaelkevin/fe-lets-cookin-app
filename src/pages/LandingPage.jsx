import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/module-css/LandingPage.module.css';
import { recipeDummy, newRecipeDummy, recipeListDummy } from '../utils/data';

function LandingPage() {
  const navigate = useNavigate();
  const recipe = newRecipeDummy?.[0];

  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <>
      <div className={style.sectionOne}>
        <div className={style.leftContent}>
          <span>Discover Recipe</span>
          <span>& Delicious Food</span>
          <input type="search" name="search" id="search" placeholder="Search recipe" />
        </div>
        <div className={style.rightContent}>
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
      <div className={style.sectionPageSize}>
        <div className={style.sectionTitle}>
          <span>Popular for you!</span>
          <div className={style.titleLine} />
        </div>
        <div className={style.popularSection}>
          {recipeDummy?.map((item) => (
            <div
              className={style.popularCard}
              style={{
                backgroundImage: `url('${item?.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <span>{item?.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={style.sectionPageSize}>
        <div className={style.sectionTitle}>
          <span>{recipe?.title}</span>
          <div className={style.titleLine} />
        </div>
        <div className={style.newRecipeSection}>
          <div className={style.leftSide}>
            <div className={style.leftBackground}>
              <img src={`${recipe?.image}`} alt="bone-broth" />
            </div>
          </div>
          <div className={style.rightSide}>
            <div className={style.content}>
              <span>{recipe?.title}</span>
              <hr />
              <button type="submit" className="btn btn-lg btn-warning" onClick={() => navigate(`/recipe/${recipe?.id}`)}>
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.sectionPageSize}>
        <div className={style.sectionTitle}>
          <span>Recipe List</span>
          <div className={style.titleLine} />
        </div>
        <div className={style.recipeListContent}>
          <div className="row">
            {recipeListDummy?.map((item) => (
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className={style.cardCustomHeight}>
                  <div className="card h-100 w-100">
                    <span>{item?.title}</span>
                    <img src={item?.image} alt={item?.title} />
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
