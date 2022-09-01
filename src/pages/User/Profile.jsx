/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../styles/module-css/Profile.module.css';

import Image from '../../components/global/Image';

import userPicture from '../../assets/images/temp/anya.png';

import { myRecipeDummy, savedRecipeDummy, likedRecipeDummy } from '../../utils/data';

function Profile() {
  return (
    <div className={style.container}>
      <div className={style.userProfile}>
        <Image data={{ image: userPicture, title: 'user-profile-picture' }} />
        <h2>Anya Geraldine</h2>
        <NavLink className="btn btn-outline-warning btn-lg mb-1 mb-md-1 mb-xl-2" to="/profile-picture">
          Change picture
        </NavLink>
        <NavLink className="btn btn-outline-warning btn-lg mb-1 mb-md-1 mb-xl-2" to="/information">
          Edit profile
        </NavLink>
        <NavLink className="btn btn-danger btn-lg mb-1 mb-md-1 mb-xl-2" to="/login">
          Logout
        </NavLink>
      </div>
      <div className={style.userFeature}>
        <ul className="nav nav-pills" id="user-feature-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="my-recipe-tab" data-bs-toggle="pill" data-bs-target="#my-recipe" type="button" role="tab" aria-controls="my-recipe" aria-selected="true">My Recipe</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="saved-recipe-tab" data-bs-toggle="pill" data-bs-target="#saved-recipe" type="button" role="tab" aria-controls="saved-recipe" aria-selected="false">Saved Recipe</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="liked-recipe-tab" data-bs-toggle="pill" data-bs-target="#liked-recipe" type="button" role="tab" aria-controls="liked-recipe" aria-selected="false">Liked Recipe</button>
          </li>
        </ul>
        <hr className="mx-1 mx-md-1 mx-xl-2" />
        <div className="tab-content h-100" id="user-feature-tabContent">
          <div className="tab-pane fade show active" id="my-recipe" role="tabpanel" aria-labelledby="my-recipe-tab">
            <div className="row">
              {myRecipeDummy?.map((item) => (
                <div className="col-lg-3 col-md-6 col-12 mb-4 ">
                  <div className={style.featureItemCard}>
                    <div className="card h-100 w-100 bg-transparent border-0">
                      <span className="position-absolute bottom-0 p-3">{item?.title}</span>
                      <Image data={{ image: item?.image, title: item?.title }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tab-pane fade" id="saved-recipe" role="tabpanel" aria-labelledby="saved-recipe-tab">
            <div className="row">
              {savedRecipeDummy?.map((item) => (
                <div className="col-lg-3 col-md-6 col-12 mb-4 ">
                  <div className={style.featureItemCard}>
                    <div className="card h-100 w-100 bg-transparent border-0">
                      <span className="position-absolute bottom-0 p-3">{item?.title}</span>
                      <Image data={{ image: item?.image, title: item?.title }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tab-pane fade" id="liked-recipe" role="tabpanel" aria-labelledby="liked-recipe-tab">
            <div className="row">
              {likedRecipeDummy?.map((item) => (
                <div className="col-lg-3 col-md-6 col-12 mb-4 ">
                  <div className={style.featureItemCard}>
                    <div className="card h-100 w-100 bg-transparent border-0">
                      <span className="position-absolute bottom-0 p-3">{item?.title}</span>
                      <Image data={{ image: item?.image, title: item?.title }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
