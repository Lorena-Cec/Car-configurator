import React from "react";
import NavBar from "../components/NavBar"; 
import { useRouter } from 'next/router';
import Link from "next/link";

const CarSelect = () => {
  const router = useRouter();
  const { id, name, year } = router.query;
  let view = "Back Left";
  let color = "Blue";
  let colorChoice = "Turbo Blue";
  let wheelsChoice = "22” Magnesium 5-spoke";
  let wheel = "Two";

  return (
    <div className="min-h-screen bg-grey flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center py-6 px-10 bg-white border-b-2 border-border-grey">
        <div className="flex items-center gap-3">
          <Link href={"/carselect"}>
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4  w-auto" />
          </Link>
          <p className="text-light-grey text-2xl font-optician">{year}</p>
          <p className=" text-dark-grey text-2xl font-semibold font-optician">{name}</p>
        </div>
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
      </div>
    
      <div className="flex">
        <div className="flex flex-col flex-1 justify-center items-center bg-grey">
          <img src={`/${name}/View=${view}, Color=${color}, Wheel Style=${wheel}.png`} alt="Car Configuration" className="h-96 w-auto object-contain"/>
          <div className="flex items-center gap-4">
            <img src="/arrowleft.png" alt="Arrow Left" className="h-4  w-auto" />
            <div className="flex items-center gap-1">
              <p className="text-dark-grey text-lg">1</p>
              <p className="text-light-grey text-lg">/</p>
              <p className="text-light-grey text-lg">5</p>
            </div>
            <img src="/arrowright.png" alt="Arrow Right" className="h-4  w-auto" />
          </div>
        </div>

        <div className="w-96 bg-white border-l-2 border-border-grey ">

          <div className="flex flex-col p-10 gap-10">
             <div className="flex">
              <img src={`/Color/Color=${colorChoice}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
              <div className="flex flex-col justify-center">
                <p>{colorChoice}</p>
                <p className="text-xs">PAINT COLOR</p>
              </div>
            </div>
            <div className="flex">
              <img src={`/Wheels/Car=${name}, Style=${wheel}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
              <div className="flex flex-col justify-center">
                <p className="text-base">{wheelsChoice}</p>
                <p className="text-xs">WHEELS</p>
              </div>
            </div>
          </div>


          <div className="absolute bottom-0 right-0">
            <div className="flex items-center justify-between px-10 mb-6">
              <div className="flex items-center">
                <p className="text-lg font-semibold">TOTAL</p>
                <img src="/info.png" alt="Info" className="h-4 w-auto ml-2" />
              </div>
              <p className="text-lg font-semibold">120,000.12€</p> 
            </div>

            <div className="flex items-center w-96 py-5 bg-blue-400 ">
              <p className=" text-white font-bold py-2 px-4 rounded-md">
                Interior
              </p>
              <img src="/arrowright.png" alt="Arrow Right" className="h-4 w-auto text-white" />
            </div>
         </div>
        </div>
      </div>      
    </div>
  );
};
  

export default CarSelect;
