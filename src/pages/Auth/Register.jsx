import React, { useEffect } from 'react';
import style from '../../styles/module-css/Auth.module.css';

import LeftPanel from '../../components/organism/auth/LeftPanel';
import RegisterPanel from '../../components/organism/auth/RegisterPanel';

function Register() {
  useEffect(() => {
    document.title = 'Register';
  });

  return (
    <div className={style.container}>
      <div className={style.leftPage}>
        <LeftPanel />
      </div>
      <div className={style.rightPage}>
        <RegisterPanel />
      </div>
    </div>
  );
}

export default Register;
