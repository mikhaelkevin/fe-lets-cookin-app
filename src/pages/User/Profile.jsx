import React, { useEffect, useState } from 'react';
import style from '../../styles/module-css/Profile.module.css';

import Image from '../../components/global/Image';

import ProfileMenus from '../../components/moleculs/user/ProfileMenus';
import RecipeFeature from '../../components/organism/user/RecipeFeature';

import { userDummy } from '../../utils/data';

function Profile() {
  const [user, setUser] = useState({});

  const dataFetcher = () => {
    setUser(userDummy);
  };

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Profile`;
    dataFetcher();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.userProfile}>
        <Image data={{ image: user?.image, title: 'user-profile-picture' }} />
        <h2>{user?.name}</h2>
        <ProfileMenus />
      </div>
      <div className={style.userFeature}>
        <RecipeFeature />
      </div>
    </div>
  );
}

export default Profile;
