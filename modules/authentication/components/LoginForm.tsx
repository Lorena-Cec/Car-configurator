import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../lib/firebaseConfig';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';  
import { setUser } from '../state/authSlice';  
import GoogleAuthButton from './GoogleAuthButton';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userData = {
        uid: userCredential.user.uid,
        email: userCredential.user.email || '',
        displayName: userCredential.user.displayName || "User", 
      };

      dispatch(setUser(userData));  
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email); 
      }
      toast.success('Login successfull.');
      router.push('/home');  
    } catch (error) {
      toast.error('Invalid email or password. Please try again.');
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent! Check your inbox.');
    } catch (error) {
      console.error('Error sending password reset email', error);
      toast.error('Error sending password reset email');
    }
  };

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if(rememberedEmail){
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col ">
        <nav className="flex justify-between items-center py-4 px-10 bg-gray-100 text-white">
            <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10  w-auto" />
            </div>
        </nav>
        <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mt-[-50px]">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
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

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-400">Remember Me</label>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
          <GoogleAuthButton isLogin={true} />
          <p className="text-sm text-gray-400">
            Forgot{" "} 
            <button 
              type="button" 
              onClick={handleForgotPassword} 
              className="text-blue-500 underline mt-2"
            >
              Password?
            </button>
          </p>
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <button
            type="button"
            onClick={() => router.push('register')}
            className="text-blue-500 underline"
            >Register here
            </button>
          </p>
        </form>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
