import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from 'components/NavBar';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex flex-col items-center flex-1">
        <div className="flex justify-between items-center w-full px-36 py-20">
          <h1 className="text-2xl">View Saved Configurations</h1>
          <Link href="/carselect">
            <button className="bg-blue-400 text-white px-5 py-3 text-sm font-bold font-inter hover:bg-blue-600">
              Configure a car
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center my-10 size-fit">
          <img src="/AudiRS6.png" alt="No configurations" className="w-auto h-52 object-cover" />
          <p className="mt-6 px-24 w-8/12 text-xl font-normal text-light-grey text-center ">
            You haven't configured any cars yet. You may choose to{' '}
            <Link href="/carselect" className="text-blue-400 font-bold">configure some now</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
