import React, { useEffect } from 'react';
import style from '../../styles/module-css/Auth.module.css';

import LeftPanel from '../../components/organism/auth/LeftPanel';
import LoginPanel from '../../components/organism/auth/LoginPanel';

function Login() {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Login`;
  });

  return (
    <div className={style.container}>
      <div className={style.leftPage}>
        <LeftPanel />
      </div>
      <div className={style.rightPage}>
        <LoginPanel />
      </div>
    </div>
  );
}

export default Login;
