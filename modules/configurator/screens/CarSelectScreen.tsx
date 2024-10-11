import React from "react";
import NavBar from "../../../components/NavBar"; 
import {db} from "../../../lib/firebaseConfig";
import { useEffect, useState, useRef } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/swiper-bundle.css"; 
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCarInfo } from "../state/carConfigSlice"; 
import { Car } from "../models/CarModel";


const CarSelect = () => {
  const [cars, setCars] = useState<Car[]>([]); 
  const [slidesPerView, setSlidesPerView] = useState(1); 

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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if(width>=770){
        setSlidesPerView(2.3);
      }
      else if (width < 500) {
        setSlidesPerView(1.4); 
      } else if (width < 770) {
        setSlidesPerView(1.8); 
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();

  const handleCarSelect = (car: Car) => {
    dispatch(setCarInfo({
      id: car.id,
      name: car.name,
      year: car.year, 
      color: car.defaultColor,
      colorFull: car.defaultColorFull,
      wheels: car.defaultWheels,
      wheelsFull: car.defaultWheelsFull,
      interior: car.defaultInterior,
      interiorFull: car.defaultInteriorFull,
      carType: car.carType,
      price: car.price,
      colorPrice: car.colorPrice,
      wheelsPrice: car.wheelsPrice,
      interiorPrice: car.interiorPrice,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-600">
      <NavBar />
      <div>
        <div className="sm:py-10 py-8">
          <h1 className="text-2xl font-normal lg:pl-36 sm:pl-20 pl-4 sm:mt-12 mt-4">Configure a car</h1>
          <p className="text-sm mt-2 lg:pl-36 sm:pl-20 pl-4 text-gray-300">Pick your favorite model and start configuring.</p>
        </div>
        
        <div className="flex mt-6 lg:pl-36 sm:pl-20 pl-4">
        <Swiper
    spaceBetween={32}
    grabCursor={true}
    loop={false}
    slidesPerView={slidesPerView} 
  >
              {cars.map((car) => (
                <SwiperSlide key={car.id}>
                <div className="bg-white w-full h-fit flex-none mb-28 pb-10">
                  <div className="overflow-hidden">
                    <img src={car.image} alt={car.name} className="xl:h-96 lg:h-80 h-64 relative lg:right-60 lg:bottom-4 right-20 object-cover" />
                  </div>
                  <p className="text-gray-300 sm:text-3xl text-xl md:pl-10 pl-3 font-optician">{car.year}</p>
                  <h2 className="xl:text-5xl lg:text-4xl text-3xl text-gray-100 font-semibold md:pl-10 pl-3 font-optician">{car.name}</h2>
                  <Link href="/configurationView">
                    <button className="mt-4 md:ml-10 ml-3 bg-blue-500 font-bold text-white sm:text-base text-sm sm:py-3 sm:px-9 p-3 hover:bg-blue-600"
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
