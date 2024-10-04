import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from 'components/NavBar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig'; 

interface SavedConfiguration {
  carName: string;
  carYear: number;
  color: string;
  colorFull: string;
  wheels: string;
  interior: string;
  interiorFull: string;
  carType: string;
  timestamp: any;
}

const Home: React.FC = () => {
  const [savedConfigurations, setSavedConfigurations] = useState<SavedConfiguration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const fetchSavedConfigurations = async (user: any) => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setSavedConfigurations(data.savedConfigurations || []);
        }
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchSavedConfigurations(user);
      } else {
        setLoading(false); 
      }
    });

    return () => unsubscribe(); 
  }, []);

  const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex flex-col items-center flex-1 bg-gray-600">
        <div className="flex justify-between items-center w-full px-36 py-20">
          <h1 className="text-2xl">View Saved Configurations</h1>
          <Link href="/carselect">
            <button className="bg-blue-400 text-white px-5 py-3 text-sm font-bold font-inter hover:bg-blue-600">
              Configure a car
            </button>
          </Link>
        </div>

        {loading ? (
          <p>Loading configurations...</p>
        ) : savedConfigurations.length > 0 ? (
          <div className="flex flex-col justify-between gap-7 px-36 w-full mb-10">
            {savedConfigurations.map((config, index) => (
              <div key={index} className="relative flex items-center bg-white ">
                <div className="flex-none">
                  <img
                    src={`/${config.carName}/View=Side, Color=${config.color}, Wheel Style=${config.wheels}.png`} 
                    alt={config.carName}
                    className="object-cover w-105 py-5"
                  />
                </div>
                <div className='flex items-center'>
                  <div className="w-px h-29 bg-gray-300 mx-14"></div>

                  <div className="flex-1">
                    <p className="text-labels-small text-gray-300">{config.carYear}</p>
                    <p className="text-4xl font-bold text-blue-400 font-optician">{config.carName}</p>
                    <p className="text-labels-small mt-2 text-gray-200 uppercase">{config.colorFull}</p>
                    <p className="text-xs mt-8 text-gray-400">
                      Created {(() => {
                        const createdDate = new Date(config.timestamp.seconds * 1000);
                        const day = createdDate.getDate();
                        const month = createdDate.toLocaleString('en-US', { month: 'long' });
                        const year = createdDate.getFullYear();
                        return `${month} ${day}${nthNumber(day)} ${year}`;
                      })()}
                    </p>
                  </div>
                </div>

                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" className='absolute top-5 right-5 text-blue-100 cursor-pointer' xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8Z" fill="currentColor"/>
                  <path d="M4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14Z" fill="currentColor"/>
                  <path d="M4 2C4 0.895431 3.10457 0 2 0C0.89543 0 0 0.895431 0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2Z" fill="currentColor"/>
                </svg>

              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center my-10 size-fit">
            <img
              src="/AudiRS6.png"
              alt="No configurations"
              className="w-auto h-52 object-cover"
            />
            <p className="mt-6 px-24 w-8/12 text-xl font-normal text-gray-300 text-center ">
              You haven't configured any cars yet. You may choose to{' '}
              <Link href="/carselect" className="text-blue-400 font-bold">
                configure some now
              </Link>.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
