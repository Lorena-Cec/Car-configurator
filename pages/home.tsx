import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
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
    <div className="flex flex-col h-screen">

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
                  <Link href="/logout" className="block px-6 py-4 text-sm text-blue-300 hover:text-white">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <main className="flex flex-col items-center flex-1">
        <div className="flex justify-between items-center w-full px-36 py-20">
          <h1 className="text-2xl">View Saved Configurations</h1>
          <Link href="/car-select">
            <button className="bg-blue-400 text-white px-5 py-3 text-sm font-bold font-inter hover:bg-blue-600">
              Configure a car
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center my-10 size-fit">
          <img src="/AudiRS6.png" alt="No configurations" className="w-auto h-52 object-cover" />
          <p className="mt-6 px-24 w-8/12 text-xl font-normal text-light-grey text-center ">
            You haven't configured any cars yet. You may choose to{' '}
            <Link href="/car-select" className="text-blue-400 font-bold">configure some now</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
