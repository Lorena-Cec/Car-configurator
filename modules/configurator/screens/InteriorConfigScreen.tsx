import React, { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar"; 
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setInterior, setInteriorFull, setInteriorPrice } from "modules/configurator/state/carConfigSlice";
import { carInteriorFull, carInteriorShort, carInteriorPrice } from "../const/carInterior";
import StepNavigation from "../components/stepNavigation";
import CarViews from "../components/carViews";
import SelectionModal from "../components/selectionModal";

const ConfigurationInterior = () => {
  const carInfo = useSelector((state: RootState) => state.carConfig)
  const finalConfig = useSelector((state: RootState) => state.carConfig.finalConfig);
  const dispatch = useDispatch();
  const views = ["Dash", "Seats"];
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<"main" | "interior">("main");
  const totalPrice = carInfo.price + carInfo.colorPrice + carInfo.wheelsPrice + carInfo.interiorPrice;
  const formattedTotalPrice = totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  const [totalPriceInterior, setTotalPriceInterior] = useState(carInfo.price + carInfo.colorPrice + carInfo.wheelsPrice);
  const formattedTotalPriceInterior = totalPriceInterior.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

  const fullInteriorOptions = carInteriorFull[carInfo.carType];
  const shortInteriorOptions = carInteriorShort[carInfo.carType];
  const carInteriorOptionsPrice = carInteriorPrice[carInfo.carType];

  const [selectedInteriorIndex, setSelectedInteriorIndex] = useState(() => {
    return carInteriorFull[finalConfig.carType]?.indexOf(finalConfig.interiorFull) ?? 0;
  });

  const [tempInteriorIndex, setTempInteriorIndex] = useState<number | null>(null); 

  const handleInteriorSelect = (index: number) => {  
    setTempInteriorIndex(index);   
    setTotalPriceInterior(carInfo.price + carInfo.wheelsPrice + carInfo.colorPrice + carInteriorOptionsPrice[index]);
  };

  const handleDone = () => {
    if (tempInteriorIndex !== null) {
      setSelectedInteriorIndex(tempInteriorIndex); 
      dispatch(setInterior(shortInteriorOptions[tempInteriorIndex])); 
      dispatch(setInteriorFull(fullInteriorOptions[tempInteriorIndex])); 
      dispatch(setInteriorPrice(carInteriorOptionsPrice[tempInteriorIndex]))
    }
    setSelectedOption("main"); 
  };

  const handleExit = () => {
    setTempInteriorIndex(null);
    setSelectedOption("main");
  }


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
  const displayedInteriorIndex = tempInteriorIndex !== null ? tempInteriorIndex : selectedInteriorIndex;

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
            <StepNavigation currentStep={2} />
        )}
      </div>

      <div className="flex h-svh">
        {/* lijevi dio */}
        <div className="flex flex-col flex-1 justify-center items-center bg-gray-600 align-middle gap-10">
          <img src={`/Interior/Car=${carInfo.carType}, Color=${shortInteriorOptions[displayedInteriorIndex]}, View=${views[currentViewIndex]}.png`} 
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
              <div className="flex items-center cursor-pointer" onClick={function(event){ setSelectedOption("interior"); setTempInteriorIndex(displayedInteriorIndex); handleInteriorSelect(displayedInteriorIndex);}}>
                <img src={`/Interior Color/Color=${shortInteriorOptions[displayedInteriorIndex]}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                <div>
                  <p className="text-base">{fullInteriorOptions[displayedInteriorIndex]}</p>
                  <p className="text-xs text-gray-300">COLOR</p>
                </div>
              </div>
            )}

            {selectedOption === "main" && (
              <div className="absolute bottom-0 right-0 w-80">
                <div className="flex items-center justify-between px-6 mb-6 gap-10">
                  <div className="flex items-center">
                    <p className="text-sm tracking-widest text-gray-300">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-2xl">{formattedTotalPrice}</p> 
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
                <SelectionModal
                    title="Color"
                    options={fullInteriorOptions}
                    selectedOptionIndex={selectedInteriorIndex}
                    tempOptionIndex={tempInteriorIndex}
                    priceOptions={carInteriorOptionsPrice}
                    onSelect={handleInteriorSelect}
                    onDone={handleDone}
                    onExit={handleExit}
                    formattedTotalPrice={formattedTotalPriceInterior}
                    imagePath={(index) =>`/Interior Color/Color=${shortInteriorOptions[index]}.png`}
                />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
  

export default ConfigurationInterior;
