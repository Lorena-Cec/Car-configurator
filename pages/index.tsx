import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Link href="/modules/authentication/pages/login">Login</Link>
      <Link href="/modules/authentication/pages/register">Register</Link>
    </div>
  );
};

export default Home;



/*import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/home');
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">{isLoginMode ? 'Login' : 'Register'}</h1>
        <form onSubmit={isLoginMode ? handleLogin : handleRegister} className="space-y-4">
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="font-sans font-bold w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-200"
          >
            {isLoginMode ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLoginMode ? 'Don\'t have an account?' : 'Already have an account?'}
          <button
            onClick={() => setIsLoginMode((prev) => !prev)}
            className="text-blue-500 hover:underline ml-1"
          >
            {isLoginMode ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
*/