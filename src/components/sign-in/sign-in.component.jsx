import React from 'react';
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './styles.scss';

function SignIn() {
  const [user, setuser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setuser(previousState => {
      return { ...previousState, [name]: value };
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
