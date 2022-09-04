import React, { useEffect } from 'react';
import style from '../../styles/module-css/Profile.module.css';

import Image from '../../components/global/Image';

import userPicture from '../../assets/images/temp/anya.png';

import ProfileMenus from '../../components/moleculs/user/ProfileMenus';
import RecipeFeature from '../../components/organism/user/RecipeFeature';

function Profile() {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Profile`;
  }, []);

  return (
    <div className={style.container}>
      <div className={style.userProfile}>
        <Image data={{ image: userPicture, title: 'user-profile-picture' }} />
        <h2>Anya Geraldine</h2>
        <ProfileMenus />
      </div>
      <div className={style.userFeature}>
        <RecipeFeature />
      </div>
    </div>
  );
}

export default Profile;
