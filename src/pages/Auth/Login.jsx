import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/module-css/Auth.module.css';
import leftBackground from '../../assets/images/auth-image.svg';
import leftLogo from '../../assets/images/auth-logo.svg';

import Image from '../../components/global/Image';
import InputBox from '../../components/global/InputBox';

function Login() {
  useEffect(() => {
    document.title = 'Login';
  });

  return (
    <div className={style.container}>
      <div className={style.leftPage}>
        <div className={style.logo}>
          <Image data={{ image: leftLogo, title: 'auth-logo' }} />
          <h2 className="mt-4">
            Lets Cookin&apos;
          </h2>
        </div>
        <Image data={{ image: leftBackground, title: 'auth-background' }} />
      </div>
      <div className={style.rightPage}>
        <div className={style.title}>
          <h2 className="text-center">Welcome</h2>
          <span className="text-center">Log in into your existing account</span>
        </div>
        <hr />
        <div className={style.authForm}>
          <form className="mb-1 mb-md-2 mb-xl-3">
            <InputBox data={{
              name: 'Email',
              type: 'email',
              placeholder: 'example@gmail.com',
            }}
            />
            <InputBox data={{
              name: 'Password',
              type: 'password',
              placeholder: 'Password',
              autoComplete: 'true',
            }}
            />
            <button type="submit" className="btn btn-warning btn-lg">Log in</button>
          </form>
        </div>
        <div className={style.authFeature}>
          <p className="text-end mb-3">Forgot password?</p>
          <p className="text-center">
            Don&apos;t have an account?
            {' '}
            <Link to="/register">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
