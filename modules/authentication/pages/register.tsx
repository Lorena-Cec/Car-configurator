import React from 'react';
import RegisterForm from '../components/RegisterForm';
import GoogleAuthButton from '../components/GoogleAuthButton';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <p className="mt-4">Or</p>
      <GoogleAuthButton />
    </div>
  );
};

export default RegisterPage;
