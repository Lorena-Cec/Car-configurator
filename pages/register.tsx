import React from 'react';
import RegisterForm from '../modules/authentication/components/RegisterForm';
import GoogleAuthButton from '../modules/authentication/components/GoogleAuthButton';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <p className="mt-4">Or</p>
      <GoogleAuthButton />
      <p className="mt-4">Or sin in<a href="login">adsd</a></p>
    </div>
  );
};

export default RegisterPage;
