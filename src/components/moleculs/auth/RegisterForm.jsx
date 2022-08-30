import React from 'react';
import InputBox from '../../global/InputBox';

function RegisterForm() {
  return (
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
  );
}

export default RegisterForm;
