import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../styles/module-css/Auth.module.css';
import HeadPanel from '../../atomics/auth/HeadPanel';
import RegisterForm from '../../moleculs/auth/RegisterForm';

function RegisterPanel() {
  return (
    <>
      <div className={style.title}>
        <HeadPanel data={{ main: "Let's Get Started", sub: 'Create new account to access all features' }} />
      </div>
      <hr />
      <div className={style.authForm}>
        <RegisterForm />
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
    </>

  );
}

export default RegisterPanel;
