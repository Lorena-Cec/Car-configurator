import React from "react";
import NavBar from "../components/NavBar"; 
import { useRouter } from 'next/router';
import Link from "next/link";

const CarSelect = () => {
  const router = useRouter();
  const { id, name, year } = router.query;
  let view = "Front Left";
  let color = "Blue";
  let colorChoice = "Turbo Blue";
  let wheelsChoice = "22” Magnesium 5-spoke";
  let wheel = "Two";

  return (
    <div className="max-h-screen bg-grey flex flex-col">
      <NavBar />
      <div className="flex justify-between items-center py-6 px-10 bg-white border-b-2 border-border-grey">
        <div className="flex items-center gap-3">
          <Link href={`/configurationView?id=${id}&name=${name}&year=${year}`}>
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
      <div className="flex h-svh">
        {/* lijevi dio */}
        <div className="flex flex-col flex-1 justify-center items-center bg-grey align-middle">
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

        {/* desni dio */}
        <div className="bg-white border-l-2 border-border-grey ">
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
            <div className="flex items-center justify-between px-8 mb-6 gap-14">
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

        </div>
      </div>   
    </div>
  );
};
  

export default CarSelect;
