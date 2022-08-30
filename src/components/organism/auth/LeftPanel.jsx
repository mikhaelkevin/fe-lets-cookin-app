import React from 'react';
import style from '../../../styles/module-css/Auth.module.css';
import Image from '../../global/Image';
import logo from '../../../assets/images/auth-logo.svg';
import background from '../../../assets/images/auth-image.svg';

function LeftPanel() {
  return (
    <>
      <div className={style.logo}>
        <Image data={{ image: logo, title: 'auth-logo' }} />
        <h2 className="mt-4">
          Lets Cookin&apos;
        </h2>
      </div>
      <Image data={{ image: background, title: 'auth-background' }} />
    </>
  );
}

export default LeftPanel;
