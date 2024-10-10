import React, { useState } from "react";
import NavBar from "../../../components/NavBar"; 
import { useRouter } from 'next/router';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from '../../../store'; 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CarViews from "../components/carViews";
import StepNavigation from "../components/stepNavigation";
import useSaveConfiguration from "modules/configurator/hooks/useSaveConfiguration";

const SummaryPage = () => {
  const router = useRouter();
  const { handleSaveConfiguration } = useSaveConfiguration();
  const finalConfig = useSelector((state: RootState) => state.carConfig.finalConfig);
  const { price, colorPrice, wheelsPrice, interiorPrice } = useSelector(
    (state:RootState) => state.carConfig
  );

  const totalPrice = price + colorPrice + wheelsPrice + interiorPrice;
  const formattedTotalPrice = totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';


  function previousPage(){
    window.history.back()
  }
  
  const saveConfiguration = () => {
    handleSaveConfiguration(finalConfig);
  };

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center py-6 px-10 bg-white border-b-2 border-gray-500 z-0">
        <div className="flex items-center gap-3">
          <img src="/arrowleft.png" alt="Arrow Left" className="h-4  w-auto" onClick={previousPage}/>
          <p className="text-gray-300 text-2xl font-optician">{finalConfig.year}</p>
          <p className=" text-gray-100 text-2xl font-semibold font-optician">{finalConfig.name}</p>
        </div>
        <StepNavigation currentStep={3} />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 py-10">
        <p className="text-3.5xl text-gray-100 font-bold">Almost Done!</p>
        <p className="text-xl text-gray-100">Review your configuration and save your car.</p>
      </div>
      
      
      <CarViews carInfo={finalConfig} />
        <div className="flex justify-between items-center mx-40 pb-9 border-b-2 border-gray-500">
            <div>
                <p className=" text-gray-100 text-5xl font-semibold font-optician">{finalConfig.name}</p>
                <p className="text-gray-300 text-3xl font-optician">{finalConfig.year}</p>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center justify-center">
                    <p className="text-gray-300 text-base font-semibold">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                </div>
                <p className="text-gray-100 text-2xl">{formattedTotalPrice}</p>
            </div>
        </div>
        

        <div className="flex flex-row mx-40 mb-20 pt-14 gap-40">
            <div>
                <p className="text-gray-100 whitespace-nowrap text-2xl">Your configuration details</p>
            </div>
            <div className="flex flex-col gap-14 w-full">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl text-gray-200">Exterior</p>
                    <Link href="/configurationExterior">
                      <p className="text-sm text-blue-400">Edit</p>
                    </Link>
                  </div>
                    <hr className="bg-gray-500 h-0.5"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Color/Color=${finalConfig.colorFull}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                            <p className="flex flex-col justify-center">{finalConfig.colorFull}</p>
                        </div>
                        <p className="text-gray-300">{colorPrice} €</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Wheels/Car=${finalConfig.carType}, Style=${finalConfig.wheels}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
                            <p className="text-base flex flex-col justify-center">{finalConfig.wheelsFull}</p>
                        </div>
                        <p className="text-gray-300">{wheelsPrice} €</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl text-gray-200">Interior</p>
                      <Link href="/configurationInterior">
                        <p className="text-sm text-blue-400">Edit</p>
                      </Link>
                    </div>
                    <hr className="bg-gray-500 h-0.5"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Interior Color/Color=${finalConfig.interior}.png`} alt="Interior choice" className="h-14 w-auto mr-5 rounded-full" />
                            <p className="text-base flex flex-col justify-center">{finalConfig.interiorFull}</p>
                        </div>
                        <p className="text-gray-300">{interiorPrice} €</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-200">Total</p>
                    <p className="text-2xl text-gray-100 font-semibold">{formattedTotalPrice}</p> 
                </div>
            </div>
        </div>   

        <div className="flex w-full h-20 justify-between items-center py-6 bg-white border-t-2 border-gray-500">
            <div className="flex items-center gap-3 pl-10">
                <p className="text-gray-300 text-2xl font-optician">{finalConfig.year}</p>
                <p className=" text-gray-100 text-2xl font-semibold font-optician">{finalConfig.name}</p>
            </div>
            <div className="flex items-center">
                <div className="flex items-center justify-between px-7 gap-14">
                    <div className="flex items-center">
                    <p className="text-sm tracking-widest text-gray-300">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                    </div>
                    <p className="text-2xl">{formattedTotalPrice}</p> 
                </div>
                <p className="py-7 px-24 bg-blue-400 text-white font-bold cursor-pointer" onClick={() => saveConfiguration()} >
                    Save your configuration
                </p>
            </div>
        </div>
        <ToastContainer position="top-center" className="whitespace-nowrap w-fit" autoClose={3000} hideProgressBar />
    </div>
  );
};
  

export default SummaryPage;

