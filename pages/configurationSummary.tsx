import React, { useState } from "react";
import NavBar from "../components/NavBar"; 
import { useRouter } from 'next/router';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from '../store'; 
import { getAuth } from "firebase/auth";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../lib/firebaseConfig"; 

interface FinalConfig {
    name: string;
    year: number;
    color: string;
    colorFull: string;
    wheels: string;
    interior: string;
    interiorFull: string;
    carType: string;
  }

const SummaryPage = () => {
  const views = ["Front Left","Back Left","Side","Front","Back"];
  const router = useRouter();
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const finalConfig = useSelector((state: RootState) => state.carConfig.finalConfig);

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


const handleSaveConfiguration = async (finalConfig: FinalConfig) => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (user) {
      try {
        // Reference to the user's document
        const userDocRef = doc(db, "users", user.uid);
  
        // Update the user's document, add the new configuration to "Saved Configurations"
        await updateDoc(userDocRef, {
          savedConfigurations: arrayUnion({
            carName: finalConfig.name,
            carYear: finalConfig.year,
            color: finalConfig.color,
            colorFull: finalConfig.colorFull,
            wheels: finalConfig.wheels,
            interior: finalConfig.interior,
            interiorFull: finalConfig.interiorFull,
            carType: finalConfig.carType,
            // Add more fields if needed
            timestamp: new Date(), // Add timestamp
          }),
        });
  
        console.log("Configuration saved successfully");
        router.push("/home");
      } catch (error) {
        console.error("Error saving configuration: ", error);
      }
    } else {
      console.error("User is not logged in");
    }
  };


  return (
    <div className="min-h-screen bg-grey flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center py-6 px-10 bg-white border-b-2 border-border-grey">
        <div className="flex items-center gap-3">
          <Link href={"/carselect"}>
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4  w-auto" />
          </Link>
          <p className="text-light-grey text-2xl font-optician">{finalConfig.year}</p>
          <p className=" text-dark-grey text-2xl font-semibold font-optician">{finalConfig.name}</p>
        </div>
        <div className="flex items-center gap-10">
            <Link href="/configurationExterior">
                <p className="text-blue-400 text-base">Edit Configuration</p>
            </Link>
            <p className="text-red-error text-base">Delete</p>
        </div>
      </div>
    
      
        <div className="flex flex-col items-center bg-grey pb-24 gap-10">
          <img src={`/${finalConfig.name}/View=${views[currentViewIndex]}, Color=${finalConfig.color}, Wheel Style=${finalConfig.wheels}.png`} alt="Car Configuration" className="h-96 w-auto p-4"/>
          <div className="flex items-center gap-4">
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4 w-auto cursor-pointer" onClick={handlePrevClick} />
            <div className="flex items-center gap-1">
              <p className="text-dark-grey text-lg">{currentViewIndex + 1}</p>
              <p className="text-light-grey text-lg">/</p>
              <p className="text-light-grey text-lg">{views.length}</p>
            </div>
            <img src="/arrowright.png" alt="Arrow Right" className="h-4 w-auto cursor-pointer" onClick={handleNextClick} />
          </div>
        </div>
        <div className="flex justify-between items-center mx-40 pb-9 border-b-2 border-border-grey">
            <div>
                <p className=" text-dark-grey text-5xl font-semibold font-optician">{finalConfig.name}</p>
                <p className="text-light-grey text-3xl font-optician">{finalConfig.year}</p>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center justify-center">
                    <p className="text-light-grey text-base font-semibold">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-light-grey"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                </div>
                <p className="text-dark-grey text-2xl">120,000.12 €</p>
            </div>
        </div>
        

        <div className="flex flex-row mx-40 mb-20 pt-14 gap-40">
            <div>
                <p className="text-dark-grey whitespace-nowrap text-2xl">Your configuration details</p>
            </div>
            <div className="flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-5">
                    <p className="text-2xl text-medium-grey">Exterior</p>
                    <hr className="bg-dark-grey h-px"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Color/Color=${finalConfig.colorFull}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                            <p className="flex flex-col justify-center">{finalConfig.colorFull}</p>
                        </div>
                        <p className="text-light-grey">2,500 €</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Wheels/Car=${finalConfig.carType}, Style=${finalConfig.wheels}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
                            <p className="text-base flex flex-col justify-center">{finalConfig.wheels}</p>
                        </div>
                        <p className="text-light-grey">0 €</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-2xl text-medium-grey">Interior</p>
                    <hr className="bg-dark-grey h-px"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Interior Color/Color=${finalConfig.interior}.png`} alt="Interior choice" className="h-14 w-auto mr-5 rounded-full" />
                            <p className="text-base flex flex-col justify-center">{finalConfig.interiorFull}</p>
                        </div>
                        <p className="text-light-grey">0 €</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-medium-grey">TOTAL</p>
                    <p className="text-2xl text-dark-grey font-semibold">120,000.12€</p> 
                </div>
            </div>
        </div>   

        <div className="flex w-full h-20 justify-between items-center py-6 bg-white border-t-2 border-border-grey">
            <div className="flex items-center gap-3 pl-10">
                <p className="text-light-grey text-2xl font-optician">{finalConfig.year}</p>
                <p className=" text-dark-grey text-2xl font-semibold font-optician">{finalConfig.name}</p>
            </div>
            <div className="flex items-center">
                <div className="flex items-center justify-between px-7 gap-14">
                    <div className="flex items-center">
                    <p className="text-sm tracking-widest text-light-grey">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-light-grey"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                    </div>
                    <p className="text-2xl">120,000.12€</p> 
                </div>
                <p className="py-7 px-24 bg-blue-400 text-white font-bold" onClick={() => handleSaveConfiguration(finalConfig)} >
                    Save your configuration
                </p>
            </div>
        </div>
    </div>
  );
};
  

export default SummaryPage;

