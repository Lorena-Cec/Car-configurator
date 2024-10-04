import React, { useState } from "react";
import NavBar from "../components/NavBar"; 
import { useRouter } from 'next/router';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from '../store'; 

const configurationView = () => {
  const carInfo = useSelector((state: RootState) => state.carConfig);
  const finalConfig = useSelector((state: RootState) => state.carConfig.finalConfig);
  const views = ["Front Left","Back Left","Side","Front","Back"];
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  console.log(carInfo);

  const handlePrevClick = () => {
    setCurrentViewIndex((prevIndex) =>
        prevIndex === 0 ? views.length - 1 : prevIndex -1
    );
  };

  const handleNextClick = () => {
    setCurrentViewIndex((prevIndex) =>
        prevIndex === views.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center py-6 px-10 bg-white border-b-2 border-gray-500">
        <div className="flex items-center gap-3">
          <Link href={"/carselect"}>
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4  w-auto" />
          </Link>
          <p className="text-gray-300 text-2xl font-optician">{carInfo.year}</p>
          <p className=" text-gray-100 text-2xl font-semibold font-optician">{carInfo.name}</p>
        </div>
        <div className="flex items-center gap-10">
            <Link href="/configurationExterior">
                <p className="text-blue-400 text-base">Edit Configuration</p>
            </Link>
            <p className="text-red-error text-base">Delete</p>
        </div>
      </div>
    
      
        <div className="flex flex-col items-center bg-gray-600 pb-24 gap-10">
          <img src={`/${carInfo.name}/View=${views[currentViewIndex]}, Color=${carInfo.color}, Wheel Style=${carInfo.wheels}.png`} alt="Car Configuration" className="h-96 w-auto p-4"/>
          <div className="flex items-center gap-4">
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4 w-auto cursor-pointer" onClick={handlePrevClick} />
            <div className="flex items-center gap-1">
              <p className="text-gray-100 text-lg">{currentViewIndex + 1}</p>
              <p className="text-gray-300 text-lg">/</p>
              <p className="text-gray-300 text-lg">{views.length}</p>
            </div>
            <img src="/arrowright.png" alt="Arrow Right" className="h-4 w-auto cursor-pointer" onClick={handleNextClick} />
          </div>
        </div>
        <div className="flex justify-between items-center mx-40 pb-9 border-b-2 border-gray-500">
            <div>
                <p className=" text-gray-100 text-5xl font-semibold font-optician">{carInfo.name}</p>
                <p className="text-gray-300 text-3xl font-optician">{carInfo.year}</p>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center justify-center">
                    <p className="text-gray-300 text-base font-semibold">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                </div>
                <p className="text-gray-100 text-2xl">120,000.12 €</p>
            </div>
        </div>
        

        <div className="flex flex-row mx-40 mb-20 pt-14 gap-40">
            <div>
                <p className="text-gray-100 whitespace-nowrap text-2xl">Your configuration details</p>
            </div>
            <div className="flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-5">
                    <p className="text-2xl text-gray-200">Exterior</p>
                    <hr className="bg-gray-100 h-px"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Color/Color=${carInfo.colorFull}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                            <p className="flex flex-col justify-center">{carInfo.colorFull}</p>
                        </div>
                        <p className="text-gray-300">2,500 €</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Wheels/Car=${carInfo.carType}, Style=${carInfo.wheels}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
                            <p className="text-base flex flex-col justify-center">{carInfo.wheelsFull}</p>
                        </div>
                        <p className="text-gray-300">0 €</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-2xl text-gray-200">Interior</p>
                    <hr className="bg-gray-100 h-px"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Interior Color/Color=${carInfo.interior}.png`} alt="Interior choice" className="h-14 w-auto mr-5 rounded-full" />
                            <p className="text-base flex flex-col justify-center">{carInfo.interiorFull}</p>
                        </div>
                        <p className="text-gray-300">0 €</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-200">TOTAL</p>
                    <p className="text-2xl text-gray-100 font-semibold">120,000.12€</p> 
                </div>
            </div>
        </div>      
    </div>
  );
};
  

export default configurationView;
