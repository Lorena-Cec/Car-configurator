import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from 'components/NavBar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig'; 
import OptionsBar from 'components/OptionsBar';
import { config } from 'next/dist/build/templates/pages';
import { Car } from 'modules/configurator';

interface SavedConfiguration {
  id: string;
  carName: string;
  carYear: number;
  color: string;
  colorFull: string;
  wheels: string;
  wheelsFull: string;
  interior: string;
  interiorFull: string;
  carType: string;
  timestamp: any;
  price: number;
  colorPrice: number;
  wheelsPrice: number;
  interiorPrice: number;
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
          const savedConfigs = (data.savedConfigurations || []).map((config: any) => ({
            ...config,
            id: config.id || Date.now().toString(),
        }));
          setSavedConfigurations(savedConfigs);
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

  const convertToCar = (config: SavedConfiguration): Car => {
    return {
        id: config.id,
        name: config.carName,
        year: config.carYear, 
        image: "", 
        defaultColor: config.color,
        defaultColorFull: config.colorFull,
        defaultWheels: config.wheels,
        defaultWheelsFull: config.wheels, 
        defaultInterior: config.interior,
        defaultInteriorFull: config.interiorFull,
        carType: config.carType,
        price: config.price,
        colorPrice: config.colorPrice,
        wheelsPrice: config.wheelsPrice,
        interiorPrice: config.interiorPrice,
    };
  };

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
        <div className="flex justify-between items-center w-full lg:px-36 lg:py-20 px-6 py-6">
          <h1 className="md:text-2xl text-lg">View Saved Configurations</h1>
          <Link href="/carselect">
            <button className="bg-blue-400 text-white sm:px-5 sm:py-3 p-2 text-sm font-bold font-inter hover:bg-blue-600">
              Configure a car
            </button>
          </Link>
        </div>

        {loading ? (
          <p>Loading configurations...</p>
        ) : savedConfigurations.length > 0 ? (
          <div className="flex flex-col justify-between gap-7 lg:px-36 w-full mb-10">
            {savedConfigurations.map((config, index) => (
              <div key={index} className="relative flex flex-col lg:flex-row items-center bg-white mx-10">
                <div className="flex-none">
                  <img
                    src={`/${config.carName}/View=Side, Color=${config.color}, Wheel Style=${config.wheels}.png`} 
                    alt={config.carName}
                    className="sm:object-cover w-105 py-5"
                  />
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                  <div className="lg:w-px lg:h-29 w-64 h-px bg-gray-300 lg:mx-5 xl:mx-14 mb-3"></div>

                  <div className="flex-1 sm:items-start">
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

                <OptionsBar configId={config.id} car={convertToCar(config)}></OptionsBar>

              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center my-10 size-fit">
            <img
              src="/AudiRS6.png"
              alt="No configurations"
              className="w-auto sm:h-52 h-40 object-cover"
            />
            <p className="mt-6 sm:px-24 px-5 w-8/12 sm:text-xl text-lg font-normal text-gray-300 text-center ">
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