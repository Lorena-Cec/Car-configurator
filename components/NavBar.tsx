import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUser } from '../modules/authentication/state/authSlice';
import { auth } from '../lib/firebaseConfig';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        try {
          await auth.signOut();
          dispatch(setUser(null)); 
          router.push('/register'); 
        } catch (error) {
          console.error('Error logging out: ', error);
        }
      };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-dark-grey text-white">
        <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10  w-auto" />
        </div>
        <div className="relative">
        <button className="focus:outline-none" onClick={toggleDropdown}>
            <img src="/menu.png" alt="Menu" className="w-auto h-10"/>
        </button>
        {dropdownOpen && (
            <div className="absolute right-0 bg-white shadow-lg z-10 dropdown">
            <ul>
                <li className="hover:bg-blue-400">
                <Link href="/saved-configurations" className="block whitespace-nowrap px-6 py-4 text-sm text-blue-300 hover:text-white">My Saved Configurations</Link>
                </li>
                <li className="border-b border-grey"></li> 
                <li className="hover:bg-blue-400">
                    <button
                    onClick={handleLogout}
                    className="block w-full text-left px-6 py-4 text-sm text-blue-300 hover:text-white"
                    >
                    Logout
                    </button>
                </li>
            </ul>
            </div>
        )}
        </div>
    </nav>
  );
};

export default NavBar;
