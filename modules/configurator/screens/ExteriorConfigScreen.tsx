import React from "react";
import NavBar from "../../../components/NavBar"; 
import { useRouter } from 'next/router';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWheels, setColor, setColorFull, setWheelsFull, setColorPrice, setWheelsPrice } from "modules/configurator/state/carConfigSlice";
import { carColorsPrice, carWheelsPrice, carWheelsOptions, carWheelsName, carColorsFull, carColorsShort } from "modules/configurator";
import StepNavigation from "../components/stepNavigation";
import CarViews from "../components/carViews";
import SelectionModal from "../components/selectionModal";

const ConfigurationExterior = () => {
  const dispatch = useDispatch();
  const carInfo = useSelector((state: RootState) => state.carConfig);
  const finalConfig = useSelector((state: RootState) => state.carConfig.finalConfig);
  const views = ["Front Left","Back Left","Side","Front","Back"];
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const totalPrice = carInfo.price + carInfo.colorPrice + carInfo.wheelsPrice + carInfo.interiorPrice;
  const formattedTotalPrice = totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  const [totalPriceWheels, setTotalPriceWheels] = useState(carInfo.price + carInfo.colorPrice + carInfo.interiorPrice);
  const [totalPriceColor, setTotalPriceColor] = useState(carInfo.price + carInfo.wheelsPrice + carInfo.interiorPrice);
  const formattedTotalPriceWheels = totalPriceWheels.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  const formattedTotalPriceColor = totalPriceColor.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

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

  
  
  const fullColorOptions = carColorsFull[carInfo.carType];
  const shortColorOptions = carColorsShort[carInfo.carType];
  const wheelsOptions = carWheelsOptions[carInfo.carType];
  const wheelsOptionsName = carWheelsName[carInfo.carType];
  const colorPriceOptions = carColorsPrice[carInfo.carType];
  const wheelPriceOptions = carWheelsPrice[carInfo.carType];

  const [selectedColorIndex, setSelectedColorIndex] = useState(() => {
    return carColorsFull[finalConfig.carType]?.indexOf(finalConfig.colorFull) ?? 0;
  });
  
  const [selectedWheelIndex, setSelectedWheelIndex] = useState(() => {
    return carWheelsOptions[finalConfig.carType]?.indexOf(finalConfig.wheels) ?? 0;
  });
  

  const [tempColorIndex, setTempColorIndex] = useState<number | null>(null); 
  const [tempWheelsIndex, setTempWheelsIndex] = useState<number | null>(null); 

  const handleColorDone = () => {
    if (tempColorIndex !== null) {
      setSelectedColorIndex(tempColorIndex); 
      dispatch(setColor(shortColorOptions[tempColorIndex])); 
      dispatch(setColorFull(fullColorOptions[tempColorIndex])); 
      dispatch(setColorPrice(colorPriceOptions[tempColorIndex])); 
      setTotalPriceWheels(carInfo.price + colorPriceOptions[tempColorIndex] + carInfo.interiorPrice + carInfo.wheelsPrice);
    }
    setSelectedOption("main"); 
  };

  const handleColorSelect = (index: number) => {  
    setTempColorIndex(index);   
    setTotalPriceColor(carInfo.price + carInfo.wheelsPrice + carInfo.interiorPrice + colorPriceOptions[index]);
  };

  const handleWheelsSelect = (index: number) => {  
    setTempWheelsIndex(index);   
    setTotalPriceWheels(carInfo.price + carInfo.colorPrice + carInfo.interiorPrice + wheelPriceOptions[index]);
  };

  const handleColorExit = () => {
    setTempColorIndex(null);
    setSelectedOption("main"); 
  };

  const handleWheelsExit = () => {
    setTempWheelsIndex(null);
    setSelectedOption("main"); 
  };

  const handleWheelsDone = () => {
    if (tempWheelsIndex !== null) {
      setSelectedWheelIndex(tempWheelsIndex); 
      dispatch(setWheels(wheelsOptions[tempWheelsIndex])); 
      dispatch(setWheelsFull(wheelsOptionsName[tempWheelsIndex])); 
      dispatch(setWheelsPrice(wheelPriceOptions[tempWheelsIndex])); 
      setTotalPriceColor(carInfo.price + carInfo.colorPrice + carInfo.interiorPrice + wheelPriceOptions[tempWheelsIndex]);
    }
    setSelectedOption("main"); 
  };
  const displayedColorIndex = tempColorIndex !== null ? tempColorIndex : selectedColorIndex;
  const displayedWheelsIndex = tempWheelsIndex !== null ? tempWheelsIndex : selectedWheelIndex;

  return (
    <div className="max-h-screen bg-gray-600 flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center py-6 px-10 bg-white border-b-2 border-gray-500 z-0 relative">
        <div className="flex items-center gap-3">
          <Link href="/configurationView">
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4  w-auto" />
          </Link>
          <p className="text-gray-300 text-2xl font-optician">{carInfo.year}</p>
          <p className=" text-gray-100 text-2xl font-semibold font-optician">{carInfo.name}</p>
        </div>
        {selectedOption === "main" && (
          <StepNavigation currentStep={1} />
        )}
      </div>

      <div className="flex h-svh">
        {/* lijevi dio */}
        <div className="flex flex-col flex-1 justify-center items-center bg-gray-600 align-middle gap-10">
          <div className="overflow-hidden">
          <img src={`/${carInfo.name}/View=${views[currentViewIndex]}, Color=${shortColorOptions[displayedColorIndex]}, Wheel Style=${wheelsOptions[displayedWheelsIndex]}.png`} alt="Car Configuration" className="h-96 w-auto object-contain"/>          </div>
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

        {/* desni dio */}

        <div className="bg-white border-l-2 border-gray-500 w-80">
          <div className="flex flex-col p-10 gap-10">
            {selectedOption === "main" && (
              <div className="flex items-center cursor-pointer" onClick={function(event){ setSelectedOption("colors"); setTempColorIndex(displayedColorIndex); handleColorSelect(displayedColorIndex);}}>
                <img src={`/Color/Color=${finalConfig.colorFull}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                <div>
                  <p className="text-base">{finalConfig.colorFull}</p>
                  <p className="text-xs text-gray-300">PAINT COLOR</p>
                </div>
              </div>
            )}

            {selectedOption === "main" && (
              <div className="flex items-center cursor-pointer" onClick={function(event){ setSelectedOption("wheels"); setTempWheelsIndex(displayedWheelsIndex); handleWheelsSelect(displayedWheelsIndex);}}>
                <img src={`/Wheels/Car=${carInfo.carType}, Style=${finalConfig.wheels}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
                <div>
                  <p className="text-base">{finalConfig.wheelsFull}</p>
                  <p className="text-xs text-gray-300">WHEELS</p>
                </div>
              </div>
            )}
            {selectedOption === "main" && (
              <div className="absolute  bottom-0 right-0 w-80">
                <div className="flex items-center justify-between gap-10 px-6 pb-6">
                  <div className="flex items-center">
                    <p className="text-sm tracking-widest text-gray-300">TOTAL</p>
                    <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-2xl">{formattedTotalPrice}</p> 
                </div>
                <Link href="/configurationInterior">
                  <div className="flex items-center justify-center gap-2 py-5 bg-blue-400">
                    <p className=" text-white font-bold py-2 rounded-md">
                      Interior
                    </p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.14645 0.146447C3.95118 0.341709 3.95118 0.658291 4.14645 0.853553L11.2929 8L4.14645 15.1464C3.95118 15.3417 3.95118 15.6583 4.14645 15.8536C4.34171 16.0488 4.65829 16.0488 4.85355 15.8536L12.3536 8.35355C12.5488 8.15829 12.5488 7.84171 12.3536 7.64645L4.85355 0.146447C4.65829 -0.0488155 4.34171 -0.0488155 4.14645 0.146447Z" fill="currentColor"/>
                    </svg>
                  </div>
                </Link>
              </div> 
            )}

            {selectedOption === "colors" && (
                <SelectionModal
                    title="Paint Color"
                    options={fullColorOptions}
                    selectedOptionIndex={selectedColorIndex}
                    tempOptionIndex={tempColorIndex}
                    priceOptions={colorPriceOptions}
                    onSelect={handleColorSelect}
                    onDone={handleColorDone}
                    onExit={handleColorExit}
                    formattedTotalPrice={formattedTotalPriceColor}
                    imagePath={(index) => `/Color/Color=${fullColorOptions[index]}.png`}
                />
            )}

            {selectedOption === "wheels" && (
                <SelectionModal
                    title="Wheels"
                    options={wheelsOptionsName}
                    selectedOptionIndex={selectedWheelIndex}
                    tempOptionIndex={tempWheelsIndex}
                    priceOptions={wheelPriceOptions}
                    onSelect={handleWheelsSelect}
                    onDone={handleWheelsDone}
                    onExit={handleWheelsExit}
                    formattedTotalPrice={formattedTotalPriceWheels}
                    imagePath={(index) => `/Wheels/Car=${carInfo.carType}, Style=${wheelsOptions[index]}.png`}
                />
            )}
          </div>
        </div>
      </div>   
    </div>
  );
};
  

export default ConfigurationExterior;
