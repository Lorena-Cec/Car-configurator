import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../lib/firebaseConfig';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/home');
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
