import React from "react";
import NavBar from "../components/NavBar"; 
import { useRouter } from 'next/router';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWheels, setColor, setColorFull } from "modules/configurator/state/carConfigSlice";

const CarSelect = () => {
  const dispatch = useDispatch();
  const carInfo = useSelector((state: RootState) => state.carConfig);
  const views = ["Front Left","Back Left","Side","Front","Back"];
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

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

  const [selectedOption, setSelectedOption] = useState<"main" | "colors" | "wheels">("main");

  const carColorsFull: { [key: string]: string[] } = {
    RS5: ["Turbo Blue", "Nardo Gray", "Tango Red"],
    RS6: ["Ultra Blue", "Black", "Polar White"],
    "e-tron": ["Tactical Green", "Florett Silver"]
  };
  
  const carColorsShort: { [key: string]: string[] } = {
    RS5: ["Blue", "Nardo Gray", "Red"],
    RS6: ["Blue", "Black", "White"],
    "e-tron": ["Green", "White"]
  };
  
  const carWheelsOptions: { [key: string]: string[] } = {
    RS5: ["One", "Two"],
    RS6: ["One", "Two"],
    "e-tron": ["One", "Two"],
  };
  
  const carWheelsName: { [key: string]: string[] } = {
    RS5: ["20” Alloy 5-spoke", "22” Magnesium 10-spoke"],
    RS6: ["19” Alloy 5-spoke", "22” Magnesium 10-spoke"],
    "e-tron": ["19” Alloy 5-spoke", "22” Magnesium 5-spoke"]
  };
  
  const fullColorOptions = carColorsFull[carInfo.carType];
  const shortColorOptions = carColorsShort[carInfo.carType];
  const wheelsOptions = carWheelsOptions[carInfo.carType];
  const wheelsOptionsName = carWheelsName[carInfo.carType];

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedWheelIndex, setSelectedWheelIndex] = useState(0);

  const selectedFullColor = fullColorOptions[selectedColorIndex];
  const selectedShortColor = shortColorOptions[selectedColorIndex];

  const selectedWheel = wheelsOptions[selectedWheelIndex];
  const selectedWheelName = wheelsOptionsName[selectedWheelIndex];
  
  const handleColorSelect = (index: number) => {
    setSelectedColorIndex(index);
    dispatch(setColor(shortColorOptions[index])); 
    dispatch(setColorFull(fullColorOptions[index])); 
  };

  const handleDone = () => {
    setSelectedOption("main"); 
  };

  const handleWheelsSelect = (index: number) => {
    setSelectedWheelIndex(index);
    dispatch(setWheels(wheelsOptions[index])); 
  };


  return (
    <div className="max-h-screen bg-grey flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center py-6 px-10 bg-white border-b-2 border-border-grey z-0">
        <div className="flex items-center gap-3">
          <Link href="/configurationView">
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4  w-auto" />
          </Link>
          <p className="text-light-grey text-2xl font-optician">{carInfo.year}</p>
          <p className=" text-dark-grey text-2xl font-semibold font-optician">{carInfo.name}</p>
        </div>
        {selectedOption === "main" && (
          <div className="flex items-center gap-10">
            <div className="flex gap-1">
              <p className="text-light-grey font-bold text-base">01</p>
              <p className="text-dark-grey font-bold text-base">Exterior</p>
            </div>
            <div className="flex gap-1">
              <p className="text-light-grey text-base">02</p>
              <p className="text-light-grey text-base">Interior</p>
            </div>
            <div className="flex gap-1">
              <p className="text-light-grey text-base">03</p>
              <p className="text-light-grey text-base">Summary</p>
            </div>
          </div> 
        )}
      </div>
       

      <div className="flex h-svh">
        {/* lijevi dio */}
        <div className="flex flex-col flex-1 justify-center items-center bg-grey align-middle">
          <img src={`/${carInfo.name}/View=${views[currentViewIndex]}, Color=${selectedShortColor}, Wheel Style=${carInfo.wheels}.png`} alt="Car Configuration" className="h-96 w-auto object-contain"/>
          <div className="flex items-center gap-4">
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4 w-auto cursor-pointer" onClick={handlePrevClick}/>
            <div className="flex items-center gap-1">
              <p className="text-dark-grey text-lg">{currentViewIndex + 1}</p>
              <p className="text-light-grey text-lg">/</p>
              <p className="text-light-grey text-lg">{views.length}</p>
            </div>
            <img src="/arrowright.png" alt="Arrow Right" className="h-4 w-auto cursor-pointer" onClick={handleNextClick} />
          </div>
        </div>

        {/* desni dio */}

        <div className="bg-white border-l-2 border-border-grey w-80">
          <div className="flex flex-col p-10 gap-10">
            {selectedOption === "main" && (
              <div className="flex items-center cursor-pointer" onClick={() => setSelectedOption("colors")}>
                <img src={`/Color/Color=${selectedFullColor}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                <div>
                  <p className="text-base">{selectedFullColor}</p>
                  <p className="text-xs text-light-grey">PAINT COLOR</p>
                </div>
              </div>
            )}

            {selectedOption === "main" && (
              <div className="flex items-center cursor-pointer" onClick={() => setSelectedOption("wheels")}>
                <img src={`/Wheels/Car=${carInfo.carType}, Style=${selectedWheel}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
                <div>
                  <p className="text-base">{selectedWheelName}</p>
                  <p className="text-xs text-light-grey">WHEELS</p>
                </div>
              </div>
            )}
            {selectedOption === "main" && (
              <div className="absolute bottom-0 right-0">
                <div className="flex items-center justify-between px-7 mb-6 gap-14">
                  <div className="flex items-center">
                    <p className="text-sm tracking-widest text-light-grey">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-light-grey"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-2xl">120,000.12€</p> 
                </div>

                <div className="flex items-center py-5 bg-blue-400 ">
                  <p className=" text-white font-bold py-2 px-4 rounded-md">
                    Interior
                  </p>
                  <img src="/arrowright.png" alt="Arrow Right" className="h-4 w-auto text-white fill-current" />
                </div>
              </div> 
            )}

            {selectedOption === "colors" && (
              <div className="w-80 border-border-grey border-l-2 absolute top-20 right-0 bottom-0 bg-white z-10">
                <div className="flex items-center justify-between pl-10 pb-16 pt-6 pr-10">
                  <p className="text-2xl text-dark-grey  ">Paint Color</p>      
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-dark-grey" onClick={handleDone} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L7 5.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.6 7L0.3 12.3C-0.1 12.7 -0.1 13.3 0.3 13.7C0.5 13.9 0.7 14 1 14C1.3 14 1.5 13.9 1.7 13.7L7 8.4L12.3 13.7C12.5 13.9 12.8 14 13 14C13.2 14 13.5 13.9 13.7 13.7C14.1 13.3 14.1 12.7 13.7 12.3L8.4 7L13.7 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex flex-col px-10 gap-10">
                  {fullColorOptions.map((color, index) => (
                    <div key={color} className="cursor-pointer flex gap-5 items-center" onClick={() => handleColorSelect(index)}>
                      <img
                        src={`/Color/Color=${fullColorOptions[index]}.png`} 
                        alt={`${color} choice`}
                        className="h-14 w-auto rounded-full"
                      />
                      <p className="text-sm mt-2">{color}</p> 
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0">
                    <div className="flex items-center justify-between px-7 mb-6 gap-14">
                      <div className="flex items-center">
                        <p className="text-sm tracking-widest text-light-grey">TOTAL</p>
                        <svg width="16" fill="none" className="h-4 w-auto ml-2 text-light-grey cursor-pointer"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <p className="text-2xl">120,000.12€</p> 
                    </div>

                    <div className="text-center py-5 bg-blue-400" onClick={handleDone}>
                      <p className=" text-white font-bold px-4 rounded-md">
                        Done
                      </p>
                    </div>
                </div> 
              </div>
            )}

            {selectedOption === "wheels" && (
              <div className="w-80 border-border-grey border-l-2 absolute top-20 right-0 bottom-0 bg-white z-10">
                <div className="flex items-center justify-between pl-10 pb-16 pt-6 pr-10">
                  <p className="text-2xl text-dark-grey  ">Wheels</p>      
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-dark-grey cursor-pointer" onClick={handleDone} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L7 5.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.6 7L0.3 12.3C-0.1 12.7 -0.1 13.3 0.3 13.7C0.5 13.9 0.7 14 1 14C1.3 14 1.5 13.9 1.7 13.7L7 8.4L12.3 13.7C12.5 13.9 12.8 14 13 14C13.2 14 13.5 13.9 13.7 13.7C14.1 13.3 14.1 12.7 13.7 12.3L8.4 7L13.7 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex flex-col px-10 gap-10">
                  {wheelsOptions.map((wheel, index) => (
                    <div
                      key={wheel}
                      className="cursor-pointer flex gap-5 items-center"
                      onClick={() => handleWheelsSelect(index)}
                    >
                      <img
                        src={`/Wheels/Car=${carInfo.carType}, Style=${wheelsOptions[index]}.png`}
                        alt={`${wheel} choice`}
                        className="h-14 w-auto"
                      />
                      <p className="text-sm mt-2">{wheelsOptionsName[index]}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0">
                    <div className="flex items-center justify-between px-7 mb-6 gap-14">
                      <div className="flex items-center">
                        <p className="text-sm tracking-widest text-light-grey">TOTAL</p>
                        <svg width="16" fill="none" className="h-4 w-auto ml-2 text-light-grey"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <p className="text-2xl">120,000.12€</p> 
                    </div>

                    <div className="text-center py-5 bg-blue-400" onClick={handleDone}>
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
  

export default CarSelect;
