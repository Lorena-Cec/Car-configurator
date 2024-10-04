import React, { useState } from "react";
import NavBar from "../components/NavBar"; 
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setInterior, setInteriorFull } from "modules/configurator/state/carConfigSlice";

const ConfigurationInterior = () => {
  const carInfo = useSelector((state: RootState) => state.carConfig)
  const finalConfig = useSelector((state: RootState) => state.carConfig.finalConfig);
  const dispatch = useDispatch();
  const views = ["Dash", "Seats"];
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<"main" | "interior">("main");

  const carInteriorFull: { [key: string]: string[] } = {
    RS5: ["Black and grey", "Black and red", "Lunar Silver"],
    RS6: ["Black and grey", "Black and red", "Cognac Brown"],
    "e-tron": ["Black", "Red"]
  };
  
  const carInteriorShort: { [key: string]: string[] } = {
    RS5: ["Black&grey", "Black&red", "Lunar Silver"],
    RS6: ["Black&grey", "Black&red", "Brown"],
    "e-tron": ["Black", "Red"]
  };

  const fullInteriorOptions = carInteriorFull[carInfo.carType];
  const shortInteriorOptions = carInteriorShort[carInfo.carType];

  const [selectedInteriorIndex, setSelectedInteriorIndex] = useState(0);

  const selectedFullInterior = fullInteriorOptions[selectedInteriorIndex];
  const selectedShortInterior = shortInteriorOptions[selectedInteriorIndex];

  const handleInteriorSelect = (index: number) => {
    setSelectedInteriorIndex(index);
    dispatch(setInterior(shortInteriorOptions[index])); 
    dispatch(setInteriorFull(fullInteriorOptions[index])); 
  };

  const handleDone = () => {
    setSelectedOption("main"); 
    console.log(finalConfig);
  };


  const handlePrevClick = () => {
    setCurrentViewIndex((prevIndex) =>
      prevIndex === 0 ? views.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    setCurrentViewIndex((prevIndex) =>
      prevIndex === views.length - 1 ? 0 : prevIndex + 1
    )
  }

  function previousPage(){
    window.history.back()
  }

  return (
    <div className="max-h-screen bg-gray-600 flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center py-6 px-10 bg-white border-b-2 border-gray-500 z-0">
        <div className="flex items-center gap-3">
          <img src="/arrowleft.png" alt="Arrow Left" className="h-4 w-auto cursor-pointer" onClick={previousPage}/>
          <p className="text-gray-300 text-2xl font-optician">{carInfo.year}</p>
          <p className=" text-gray-100 text-2xl font-semibold font-optician">{carInfo.name}</p>
        </div>
        {selectedOption === "main" && (
          <div className="flex items-center gap-10">
          <div className="flex gap-1">
            <p className="text-gray-300 text-base">01</p>
            <p className="text-gray-300 text-base">Exterior</p>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-300 font-bold text-base">02</p>
            <p className="text-gray-100 font-bold text-base">Interior</p>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-300 text-base">03</p>
            <p className="text-gray-300 text-base">Summary</p>
          </div>
        </div>
        )}
      </div>

      <div className="flex h-svh">
        {/* lijevi dio */}
        <div className="flex flex-col flex-1 justify-center items-center bg-gray-600 align-middle gap-10">
          <img src={`/Interior/Car=${carInfo.carType}, Color=${selectedShortInterior}, View=${views[currentViewIndex]}.png`} 
          alt="Car Configuration" 
          className="h-110 w-250 relative object-cover"
          />
          <div className="flex items-center gap-4">
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4 w-auto cursor-pointer" onClick={handlePrevClick}/>
            <div className="flex items-center gap-1">
              <p className="text-gray-100 text-lg">{currentViewIndex + 1}</p>
              <p className="text-gray-300 text-lg">/</p>
              <p className="text-gray-300 text-lg">{views.length}</p>
            </div>
            <img src="/arrowright.png" alt="Arrow Right" className="h-4 w-auto cursor-pointer" onClick={handleNextClick} />
          </div>
        </div>

        {/* desni dio */}

        <div className="bg-white border-l-2 border-gray-500 w-80">
          <div className="flex flex-col p-10 gap-10">
            {selectedOption === "main" && (
              <div className="flex items-center cursor-pointer" onClick={() => setSelectedOption("interior")}>
                <img src={`/Interior Color/Color=${selectedShortInterior}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                <div>
                  <p className="text-base">{selectedFullInterior}</p>
                  <p className="text-xs text-gray-300">COLOR</p>
                </div>
              </div>
            )}

            {selectedOption === "main" && (
              <div className="absolute bottom-0 right-0">
                <div className="flex items-center justify-between px-7 mb-6 gap-14">
                  <div className="flex items-center">
                    <p className="text-sm tracking-widest text-gray-300">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-2xl">120,000.12€</p> 
                </div>
                <Link href="/configurationSummary">
                  <div className="flex items-center justify-center gap-2 py-5 bg-blue-400">
                    <p className=" text-white font-bold py-2 rounded-md">
                      Summary
                    </p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.14645 0.146447C3.95118 0.341709 3.95118 0.658291 4.14645 0.853553L11.2929 8L4.14645 15.1464C3.95118 15.3417 3.95118 15.6583 4.14645 15.8536C4.34171 16.0488 4.65829 16.0488 4.85355 15.8536L12.3536 8.35355C12.5488 8.15829 12.5488 7.84171 12.3536 7.64645L4.85355 0.146447C4.65829 -0.0488155 4.34171 -0.0488155 4.14645 0.146447Z" fill="currentColor"/>
                    </svg>
                  </div>
                </Link>
              </div> 
            )}

            {selectedOption === "interior" && (
              <div className="w-80 border-gray-500 border-l-2 absolute top-20 right-0 bottom-0 bg-white z-10">
                <div className="flex items-center justify-between pl-10 pb-16 pt-6 pr-10">
                  <p className="text-2xl text-gray-100  ">Paint Color</p>      
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-100" onClick={handleDone} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L7 5.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.6 7L0.3 12.3C-0.1 12.7 -0.1 13.3 0.3 13.7C0.5 13.9 0.7 14 1 14C1.3 14 1.5 13.9 1.7 13.7L7 8.4L12.3 13.7C12.5 13.9 12.8 14 13 14C13.2 14 13.5 13.9 13.7 13.7C14.1 13.3 14.1 12.7 13.7 12.3L8.4 7L13.7 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex flex-col px-10 gap-10">
                  {fullInteriorOptions.map((interior, index) => (
                    <div key={interior} className="cursor-pointer flex gap-5 items-center" onClick={() => handleInteriorSelect(index)}>
                      <img
                        src={`/Interior Color/Color=${shortInteriorOptions[index]}.png`} 
                        alt={`${interior} choice`}
                        className="h-14 w-auto rounded-full"
                      />
                      <p className="text-sm mt-2">{fullInteriorOptions[index]}</p> 
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0">
                    <div className="flex items-center justify-between px-7 mb-6 gap-14">
                      <div className="flex items-center">
                        <p className="text-sm tracking-widest text-gray-300">TOTAL</p>
                        <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300 cursor-pointer"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <p className="text-2xl">120,000.12€</p> 
                    </div>

                    <div className="text-center py-5 bg-blue-400 cursor-pointer" onClick={handleDone}>
                      <p className=" text-white font-bold px-4 rounded-md">
                        Done
                      </p>
                    </div>
                </div> 
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
  

export default ConfigurationInterior;
