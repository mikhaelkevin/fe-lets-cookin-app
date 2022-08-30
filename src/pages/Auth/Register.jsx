import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/module-css/Auth.module.css';
import leftBackground from '../../assets/images/auth-image.svg';
import leftLogo from '../../assets/images/auth-logo.svg';
import Image from '../../components/global/Image';
import InputBox from '../../components/global/InputBox';

function Register() {
  useEffect(() => {
    document.title = 'Register';
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
          <h2 className="text-center">Let&apos;s Get Started</h2>
          <span className="text-center">Create new account to access all features</span>
        </div>
        <hr />
        <div className={style.authForm}>
          <form className="mb-3">
            <InputBox data={{
              name: 'Name',
              type: 'text',
              placeholder: 'Name',
            }}
            />
            <InputBox data={{
              name: 'Email',
              type: 'email',
              placeholder: 'example@gmail.com',
            }}
            />
            <InputBox data={{
              name: 'Phone Number',
              type: 'text',
              placeholder: '08xxxxxxxxxxx',
            }}
            />
            <InputBox data={{
              name: 'Create new password',
              type: 'password',
              placeholder: 'New password',
              autoComplete: 'true',
            }}
            />
            <InputBox data={{
              name: 'Confirm password',
              type: 'password',
              placeholder: 'Confirm password',
              autoComplete: 'true',
            }}
            />
            <button type="submit" className="btn btn-warning btn-lg">Register</button>
          </form>
        </div>
        <div className={style.authFeature}>
          <p className="text-center">
            Have an account already?
            {' '}
            <Link to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
