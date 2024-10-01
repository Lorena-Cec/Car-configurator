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
  let wheel = "One";

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
            <Link href={`/configurationExterior?id=${id}&name=${name}&year=${year}`}>
                <p className="text-blue-400 text-base">Edit Configuration</p>
            </Link>
            <p className="text-red-error text-base">Delete</p>
        </div>
      </div>
    
      
        <div className="flex flex-col items-center bg-grey pb-24">
          <img src={`/${name}/View=${view}, Color=${color}, Wheel Style=${wheel}.png`} alt="Car Configuration" className="h-96 w-auto p-4"/>
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
        <div className="flex justify-between items-center mx-40 pb-9 border-b-2 border-border-grey">
            <div>
                <p className=" text-dark-grey text-5xl font-semibold font-optician">{name}</p>
                <p className="text-light-grey text-3xl font-optician">{year}</p>
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
                            <img src={`/Color/Color=${colorChoice}.png`} alt="Color choice" className="h-14 w-auto rounded-full mr-5" />
                            <p className="flex flex-col justify-center">{colorChoice}</p>
                        </div>
                        <p className="text-light-grey">2,500 €</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Wheels/Car=${name}, Style=${wheel}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
                            <p className="text-base flex flex-col justify-center">{wheelsChoice}</p>
                        </div>
                        <p className="text-light-grey">0 €</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-2xl text-medium-grey">Interior</p>
                    <hr className="bg-dark-grey h-px"></hr>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={`/Wheels/Car=${name}, Style=${wheel}.png`} alt="Wheel choice" className="h-14 w-auto mr-5" />
                            <p className="text-base flex flex-col justify-center">{wheelsChoice}</p>
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
    </div>
  );
};
  

export default CarSelect;
