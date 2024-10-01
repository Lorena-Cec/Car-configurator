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
    <div className="min-h-screen bg-grey flex flex-col">
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
            <p className="text-light-grey text-base">01</p>
            <p className="text-light-grey text-base">Exterior</p>
          </div>
          <div className="flex gap-1">
            <p className="text-light-grey font-bold text-base">02</p>
            <p className="text-dark-grey font-bold text-base">Interior</p>
          </div>
          <div className="flex gap-1">
            <p className="text-light-grey text-base">03</p>
            <p className="text-light-grey text-base">Summary</p>
          </div>
        </div>
      </div>
         
    </div>
  );
};
  

export default CarSelect;
