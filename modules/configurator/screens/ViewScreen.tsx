import React, { useState } from "react";
import NavBar from "../../../components/NavBar"; 
import router, { useRouter } from 'next/router';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from '../../../store'; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "lib/firebaseConfig";
import { getAuth } from "@firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CarViews from "../components/carViews";
import useHandleDelete from "../hooks/useHandleDelete";


const configurationView = () => {
  const carInfo = useSelector((state: RootState) => state.carConfig);
  const finalConfig = useSelector((state: RootState) => state.carConfig.finalConfig);
  console.log(carInfo);

  const totalPrice = carInfo.price + carInfo.colorPrice + carInfo.wheelsPrice + carInfo.interiorPrice;
  const formattedTotalPrice = totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

  const { handleDelete } = useHandleDelete(finalConfig.id);
  function previousPage(){
    window.history.back()
  }

  const [dropdownOpen, setDropdownOpen] = useState(false); // State za upravljanje dropdown menijem

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center sm:py-6 sm:px-10 px-5 py-5 bg-white border-b-2 border-gray-500">
        <div className="flex items-center sm:gap-3 gap-2">
          <img src="/arrowleft.png" alt="Arrow Left" className="h-4  w-auto" onClick={previousPage}/>
          <p className="text-gray-300 text-2xl font-optician">{carInfo.year}</p>
          <p className=" text-gray-100 text-2xl font-semibold font-optician">{carInfo.name}</p>
        </div>

        <div className="relative flex items-center gap-2 sm:gap-10">
          <button onClick={toggleDropdown} className="text-blue-400 text-base cursor-pointer sm:hidden">
            <svg width="20" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="14.2858" width="40" height="2.85714" rx="1.42857" fill="black"/>
              <rect y="22.8572" width="31.4286" height="2.85714" rx="1.42857" fill="black"/>
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-4 mt-2 bg-white border rounded shadow-md z-10">
              <Link href="/configurationExterior">
                <p className="text-blue-400 text-base cursor-pointer px-6 py-4 whitespace-nowrap hover:bg-gray-200">Edit Configuration</p>
              </Link>
              <p className="text-red-error text-base cursor-pointer px-6 py-4 hover:bg-gray-200" onClick={handleDelete}>
                Delete
              </p>
            </div>
          )}

          <div className="hidden sm:flex items-center gap-10">
            <Link href="/configurationExterior">
              <p className="text-blue-400 text-base cursor-pointer">Edit Configuration</p>
            </Link>
            <p className="text-red-error text-base cursor-pointer" onClick={handleDelete}>
              Delete
            </p>
          </div>
        </div>
      </div>
    
      
      <CarViews carInfo={carInfo} />
        <div className="flex justify-between items-center mx-5 lg:mx-40 sm:mx-20 pb-9 border-b-2 border-gray-500">
            <div>
                <p className=" text-gray-100 md:text-5xl text-3xl font-semibold font-optician">{carInfo.name}</p>
                <p className="text-gray-300 md:text-3xl text-2xl font-optician">{carInfo.year}</p>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center justify-center">
                    <p className="text-gray-300 md:text-base text-sm font-semibold">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                </div>
                <p className="text-gray-100 lg:text-2xl text-xl">{formattedTotalPrice}</p>
            </div>
        </div>
        

        <div className="flex lg:flex-row flex-col justify-between mx-8 lg:mx-40 sm:mx-20 lg:mb-20 mb-5 lg:pt-14 pt-10 xl:gap-40 lg:gap-20 gap-10">
            <div>
                <p className="text-gray-100 whitespace-nowrap text-2xl">Your configuration details</p>
            </div>
            <div className="flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-5">
                    <p className="lg:text-2xl text-lg text-gray-200">Exterior</p>
                    <hr className="bg-gray-100 h-px"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Color/Color=${carInfo.colorFull}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                            <p className="flex flex-col justify-center">{carInfo.colorFull}</p>
                        </div>
                        <p className="text-gray-300">{carInfo.colorPrice} €</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Wheels/Car=${carInfo.carType}, Style=${carInfo.wheels}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
                            <p className="text-base flex flex-col justify-center">{carInfo.wheelsFull}</p>
                        </div>
                        <p className="text-gray-300">{carInfo.wheelsPrice} €</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="lg:text-2xl text-lg text-gray-200">Interior</p>
                    <hr className="bg-gray-100 h-px"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Interior Color/Color=${carInfo.interior}.png`} alt="Interior choice" className="h-14 w-auto mr-5 rounded-full" />
                            <p className="text-base flex flex-col justify-center">{carInfo.interiorFull}</p>
                        </div>
                        <p className="text-gray-300">{carInfo.interiorPrice} €</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-200">TOTAL</p>
                    <p className="text-2xl text-gray-100 font-semibold">{formattedTotalPrice}</p> 
                </div>
            </div>
            
        </div>     
        <ToastContainer position="top-center" className="whitespace-nowrap w-fit" autoClose={3000} hideProgressBar /> 
    </div>
  );
};
  

export default configurationView;
