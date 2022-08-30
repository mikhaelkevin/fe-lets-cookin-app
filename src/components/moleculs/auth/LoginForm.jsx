import React from 'react';
import InputBox from '../../global/InputBox';

function LoginForm() {
  return (
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
  );
}

export default LoginForm;
