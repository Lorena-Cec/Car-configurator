import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from 'components/NavBar';
import { getAuth } from 'firebase/auth';
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
    const fetchSavedConfigurations = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

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

    fetchSavedConfigurations();
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
      <main className="flex flex-col items-center flex-1 bg-grey">
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
          <div className="flex flex-col  px-36 bg-white">
            {savedConfigurations.map((config, index) => (
              <div key={index} className="flex items-center w-full px-36 justify-between">
                <div className="flex-none">
                  <img
                    src={`/${config.carName}/View=Side, Color=${config.color}, Wheel Style=${config.wheels}.png`} 
                    alt={config.carName}
                    className="object-cover w-105"
                  />
                </div>

                <div className="w-px h-64 bg-gray-300 mx-8"></div>

                <div className="flex-1">
                  <p className="text-xl font-bold text-dark-grey">{config.carYear}</p>
                  <p className="text-xl font-bold text-dark-grey">{config.carName}</p>
                  <p className="text-md mt-2">Color: {config.colorFull}</p>
                  <p className="text-md mt-2 text-light-grey">
                    Created: {(() => {
                      const createdDate = new Date(config.timestamp.seconds * 1000);
                      const day = createdDate.getDate();
                      const month = createdDate.toLocaleString('en-US', { month: 'long' });
                      const year = createdDate.getFullYear();
                      return `${month} ${day}${nthNumber(day)}, ${year}`;
                    })()}
                  </p>
                </div>
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
            <p className="mt-6 px-24 w-8/12 text-xl font-normal text-light-grey text-center ">
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
