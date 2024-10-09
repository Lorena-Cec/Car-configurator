import React from "react";
import NavBar from "../components/NavBar"; 
import { useRouter } from 'next/router';
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWheels, setColor, setColorFull, setWheelsFull, setColorPrice, setWheelsPrice } from "modules/configurator/state/carConfigSlice";

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

  const carColorsPrice: { [key: string]: number[] } = {
    RS5: [2500, 1000, 500],
    RS6: [2500, 1500, 1000],
    "e-tron": [2700, 3000]
  };
  
  const carWheelsOptions: { [key: string]: string[] } = {
    RS5: ["One", "Two"],
    RS6: ["One", "Two"],
    "e-tron": ["One", "Two"],
  };

  const carWheelsPrice: { [key: string]: number[] } = {
    RS5: [100, 50],
    RS6: [0, 50],
    "e-tron": [100, 75],
  };
  
  const carWheelsName: { [key: string]: string[] } = {
    RS5: ["19” Alloy 5-spoke", "22” Magnesium 10-spoke"],
    RS6: ["19” Alloy 5-spoke", "22” Magnesium 10-spoke"],
    "e-tron": ["19” Alloy 5-spoke", "22” Magnesium 5-spoke"]
  };
  
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
          <div className="flex items-center gap-10">
            <div className="flex gap-1">
              <p className="text-gray-300 font-bold text-base">01</p>
              <p className="text-gray-100 font-bold text-base">Exterior</p>
            </div>
            <div className="flex gap-1">
              <p className="text-gray-300 text-base">02</p>
              <p className="text-gray-300 text-base">Interior</p>
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
          <img src={`/${carInfo.name}/View=${views[currentViewIndex]}, Color=${shortColorOptions[displayedColorIndex]}, Wheel Style=${wheelsOptions[displayedWheelsIndex]}.png`} alt="Car Configuration" className="h-96 w-auto object-contain"/>
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
              <div className="w-80 border-gray-500 border-l-2 absolute top-20 right-0 bottom-0 bg-white z-10">
                <div className="flex items-center justify-between pl-10 pb-16 pt-6 pr-10">
                  <p className="text-2xl text-gray-100  ">Paint Color</p>      
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-100" onClick={handleColorExit} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L7 5.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.6 7L0.3 12.3C-0.1 12.7 -0.1 13.3 0.3 13.7C0.5 13.9 0.7 14 1 14C1.3 14 1.5 13.9 1.7 13.7L7 8.4L12.3 13.7C12.5 13.9 12.8 14 13 14C13.2 14 13.5 13.9 13.7 13.7C14.1 13.3 14.1 12.7 13.7 12.3L8.4 7L13.7 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex flex-col px-10 gap-10">
                  {fullColorOptions.map((color, index) => (
                    <div key={color} className="cursor-pointer flex gap-5 items-center" onClick={() => handleColorSelect(index)}>
                      <div className="relative">
                        <img
                        src={`/Color/Color=${fullColorOptions[index]}.png`} 
                        alt={`${color} choice`}
                        className="h-14 w-auto rounded-full"
                      />
                      {tempColorIndex === index && ( 
                        <div className="absolute bottom-0 right-0 w-5 h-5 flex items-center justify-center rounded-full bg-green-500">
                          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.99998 10.9996C3.73479 10.9995 3.48047 10.8941 3.29298 10.7066L0.29298 7.70657C0.110822 7.51797 0.0100274 7.26537 0.0123059 7.00317C0.0145843 6.74098 0.119753 6.49016 0.305161 6.30476C0.490569 6.11935 0.741382 6.01418 1.00358 6.0119C1.26578 6.00962 1.51838 6.11042 1.70698 6.29258L3.90698 8.49257L10.21 0.385575C10.3728 0.176054 10.6122 0.0398036 10.8755 0.00679716C11.1388 -0.0262092 11.4045 0.0467322 11.614 0.209575C11.8235 0.372418 11.9598 0.611823 11.9928 0.875124C12.0258 1.13843 11.9528 1.40405 11.79 1.61357L4.78998 10.6136C4.70302 10.7259 4.59312 10.8185 4.46759 10.885C4.34206 10.9516 4.20378 10.9906 4.06198 10.9996H3.99998Z" fill="currentColor"/>
                          </svg>
                        </div>
                      )}
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <p className="text-sm">{color}</p> 
                        {tempColorIndex === index && ( 
                          <p className="text-sm text-gray-300">{colorPriceOptions[index]} €</p> 
                        )}
                      </div> 
                      
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0 w-80">
                    <div className="flex items-center justify-between px-6 mb-6 gap-10">
                      <div className="flex items-center">
                        <p className="text-sm tracking-widest text-gray-300">TOTAL</p>
                        <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300 cursor-pointer"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <p className="text-2xl">{formattedTotalPriceColor}</p> 
                    </div>

                    <div className="text-center py-5 bg-blue-400 cursor-pointer" onClick={handleColorDone}>
                      <p className=" text-white font-bold py-2 px-4 rounded-md">
                        Done
                      </p>
                    </div>
                </div> 
              </div>
            )}

            {selectedOption === "wheels" && (
              <div className="w-80 border-gray-500 border-l-2 absolute top-20 right-0 bottom-0 bg-white z-10">
                <div className="flex items-center justify-between pl-10 pb-16 pt-6 pr-10">
                  <p className="text-2xl text-gray-100  ">Wheels</p>      
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-100 cursor-pointer" onClick={handleWheelsExit} xmlns="http://www.w3.org/2000/svg">
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
                      <div className="relative">
                        <img
                          src={`/Wheels/Car=${carInfo.carType}, Style=${wheelsOptions[index]}.png`}
                          alt={`${wheel} choice`}
                          className="h-14 w-auto"
                        />
                        {tempWheelsIndex === index && ( 
                          <div className="absolute bottom-0 right-0 w-5 h-5 flex items-center justify-center rounded-full bg-green-500">
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.99998 10.9996C3.73479 10.9995 3.48047 10.8941 3.29298 10.7066L0.29298 7.70657C0.110822 7.51797 0.0100274 7.26537 0.0123059 7.00317C0.0145843 6.74098 0.119753 6.49016 0.305161 6.30476C0.490569 6.11935 0.741382 6.01418 1.00358 6.0119C1.26578 6.00962 1.51838 6.11042 1.70698 6.29258L3.90698 8.49257L10.21 0.385575C10.3728 0.176054 10.6122 0.0398036 10.8755 0.00679716C11.1388 -0.0262092 11.4045 0.0467322 11.614 0.209575C11.8235 0.372418 11.9598 0.611823 11.9928 0.875124C12.0258 1.13843 11.9528 1.40405 11.79 1.61357L4.78998 10.6136C4.70302 10.7259 4.59312 10.8185 4.46759 10.885C4.34206 10.9516 4.20378 10.9906 4.06198 10.9996H3.99998Z" fill="currentColor"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <p className="text-sm">{wheelsOptionsName[index]}</p> 
                        {tempWheelsIndex === index && ( 
                          <p className="text-sm text-gray-300">{wheelPriceOptions[index]} €</p> 
                        )}
                      </div> 

                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0 w-80">
                    <div className="flex items-center justify-between px-6 mb-6 gap-10">
                      <div className="flex items-center">
                        <p className="text-sm tracking-widest text-gray-300">TOTAL</p>
                        <svg width="16" fill="none" className="h-4 w-auto ml-2 text-gray-300"  height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <p className="text-2xl">{formattedTotalPriceWheels}</p> 
                    </div>

                    <div className="text-center py-5 bg-blue-400 cursor-pointer" onClick={handleWheelsDone}>
                      <p className=" text-white font-bold py-2 px-4 rounded-md">
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
  

export default ConfigurationExterior;
