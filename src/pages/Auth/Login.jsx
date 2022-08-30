import React from 'react';
import style from '../../styles/module-css/Auth.module.css';
import leftBackground from '../../assets/images/auth-image.svg';

function Login() {
  return (
    <div className={style.container}>
      <div className={style.leftPage}>
        <img src={leftBackground} alt="auth-background" />
      </div>
      <div className={style.rightPage}>Login</div>
    </div>
  );
}

export default Login;
