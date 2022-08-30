import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../styles/module-css/Auth.module.css';
import HeadPanel from '../../atomics/auth/HeadPanel';
import LoginForm from '../../moleculs/auth/LoginForm';

function LoginPanel() {
  return (
    <>
      <div className={style.title}>
        <HeadPanel data={{ main: 'Welcome', sub: 'Log in into your existing account' }} />
      </div>
      <hr />
      <div className={style.authForm}>
        <LoginForm />
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
    </>
  );
}

export default LoginPanel;
