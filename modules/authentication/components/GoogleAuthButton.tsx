import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider, auth } from '../../../lib/firebaseConfig';
import { useRouter } from 'next/router';

const GoogleAuthButton = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/home');
    } catch (error) {
      console.error('Error with Google login', error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 mt-4"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleAuthButton;
