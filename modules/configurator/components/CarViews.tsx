import React, { useState } from 'react';

interface CarViewsProps {
  carInfo: {
    name: string;
    color: string;
    wheels: string;
  };
}

const CarViews: React.FC<CarViewsProps> = ({ carInfo }) => {
  const views = ["Front Left", "Back Left", "Side", "Front", "Back"];
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentViewIndex((prevIndex) =>
      prevIndex === 0 ? views.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentViewIndex((prevIndex) =>
      prevIndex === views.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center bg-gray-600 align-middle gap-10">
      <div className="overflow-hidden">
        <img
          src={`/${carInfo.name}/View=${views[currentViewIndex]}, Color=${carInfo.color}, Wheel Style=${carInfo.wheels}.png`}
          alt="Car Configuration"
          className="lg:h-96 sm:h-72 h-52 relative object-cover p-4"
        />
      </div>
      <div className="flex items-center gap-4">
        <img
          src="/arrowleft.png"
          alt="Arrow Left"
          className="h-4 w-auto cursor-pointer"
          onClick={handlePrevClick}
        />
        <div className="flex items-center gap-1">
          <p className="text-gray-100 text-lg">{currentViewIndex + 1}</p>
          <p className="text-gray-300 text-lg">/</p>
          <p className="text-gray-300 text-lg">{views.length}</p>
        </div>
        <img
          src="/arrowright.png"
          alt="Arrow Right"
          className="h-4 w-auto cursor-pointer"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default CarViews;
