import React from "react";
import NavBar from "../components/NavBar"; 
import {db} from "../lib/firebaseConfig";
import { useEffect, useState, useRef } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/swiper-bundle.css"; 
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCarInfo } from "../modules/configurator/state/carConfigSlice"; 

interface Car {
  id: string;
  name: string;
  year: string;
  image: string;
  defaultColor: string;   
  defaultColorFull: string;  
  defaultWheels: string;   
  defaultInterior: string;
  defaultInteriorFull: string;
  carType: string; 
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

  const dispatch = useDispatch();

  const handleCarSelect = (car: Car) => {
    dispatch(setCarInfo({
      id: car.id,
      name: car.name,
      year: parseInt(car.year), 
      color: car.defaultColor,
      colorFull: car.defaultColorFull,
      wheels: car.defaultWheels,
      interior: car.defaultInterior,
      interiorFull: car.defaultInteriorFull,
      carType: car.carType,
    }));
  };

  return (
    <div className="min-h-screen bg-grey">
      <NavBar />
      <div>
        <div className="py-10">
          <h1 className="text-2xl font-normal pl-36 mt-12">Configure a car</h1>
          <p className="text-sm mt-2 pl-36 text-light-grey">Pick your favorite model and start configuring.</p>
        </div>
        
        
        <div className="flex mt-6 pl-36">
          <Swiper
              spaceBetween={32}
              slidesPerView={2.3}  
              grabCursor={true}  
              loop={false}  
              style={
                {
                  paddingLeft: '144px',
                  marginLeft: '-144px',
                }
              }
            >
              {cars.map((car) => (
                <SwiperSlide key={car.id}>
                <div className="bg-white w-full h-fit flex-none mb-28 pb-10">
                  <div className="overflow-hidden">
                    <img src={car.image} alt={car.name} className="h-96 relative right-60 bottom-4 object-cover" />
                  </div>
                  <p className="text-light-grey text-3xl pl-10 font-optician">{car.year}</p>
                  <h2 className="text-5xl text-dark-grey font-semibold pl-10 font-optician">{car.name}</h2>
                  <Link href="/configurationView">
                    <button className="mt-4 ml-10 bg-blue-500 font-bold text-white py-3 px-9 hover:bg-blue-600"
                    onClick={() => handleCarSelect(car)}
                    >
                      Configure Now
                    </button>
                  </Link>
                </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
  

export default CarSelect;
