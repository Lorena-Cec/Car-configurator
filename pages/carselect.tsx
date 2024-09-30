import React from "react";
import NavBar from "../components/NavBar"; 
import {db} from "../lib/firebaseConfig";
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";


interface Car {
  id: string;
  name: string;
  year: string;
  image: string;
}


const CarSelect = () => {
  const [cars, setCars] = useState<Car[]>([]); 

  useEffect(() => {
    const fetchCars = async () => {
      const carModelsCollection = collection(db, "models");
      const carSnapshot = await getDocs(carModelsCollection);

      const carList: Car[] = carSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), 
      })) as Car[]; 

      setCars(carList); 
    };

    fetchCars();
  }, []);

  return (
    <div className="min-h-screen bg-grey">
      <NavBar />
      <div className="p-10">
        <h1 className="text-2xl font-normal pl-36 mt-12">Configure a car</h1>
        <p className="text-sm mt-2 pl-36 text-light-grey">Pick your favorite model and start configuring.</p>
        
        <div className="flex mt-6 pl-36">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md m-2 w-1/3 h-130 flex-none">
              <div className="overflow-hidden">
                <img src={car.image} alt={car.name} className="h-96 relative right-48  object-cover" />
              </div>
              <p className="text-light-grey text-2xl pl-10 font-optician">{car.year}</p>
              <h2 className="text-5xl text-dark-grey font-semibold pl-10 font-optician">{car.name}</h2>
              <button className="mt-4 ml-10 bg-blue-500 font-bold text-white py-3 px-9 hover:bg-blue-600">
                Configure Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  

export default CarSelect;
