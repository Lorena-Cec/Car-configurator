import React from "react";
import NavBar from "../components/NavBar"; 

const cars = [
  {
    id: 1,
    name: "AUDI RS6 AVANT",
    year: "2022",
    image: "audirs6avant.png", 
  },
  {
    id: 2,
    name: "AUDI RS5",
    year: "2022",
    image: "audirs5.png",
  },
  {
    id: 3,
    name: "AUDI E-TRON GT",
    year: "2022",
    image: "audietronGT.png",
  },
];

const CarSelect = () => {
  return (
    <div className="min-h-screen bg-grey">
      <NavBar />
      <div className="p-10">
        <h1 className="text-2xl font-normal pl-36 mt-12">Configure a car</h1>
        <p className="text-sm mt-2 pl-36 text-light-grey">Pick your favorite model and start configuring.</p>
        
        <div className="flex overflow-x-auto mt-6 pl-36">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md m-2 w-1/3 h-130 flex-none">
                <div className="overflow-hidden">
                    <img src={car.image} alt={car.name} className="h-96 relative right-44 object-cover" />
                </div>
              <p className="text-gray-500 pl-10">{car.year}</p>
              <h2 className="text-lg font-semibold mt-2 pl-10">{car.name}</h2>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Configure now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSelect;
