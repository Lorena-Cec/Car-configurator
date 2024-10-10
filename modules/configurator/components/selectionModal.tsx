// SelectionModal.tsx
import React from 'react';

interface SelectionModalProps {
  title: string;
  options: string[];
  selectedOptionIndex: number;
  tempOptionIndex: number | null;
  priceOptions: number[];
  onSelect: (index: number) => void;
  onDone: () => void;
  onExit: () => void;
  formattedTotalPrice: string;
  imagePath: (index: number) => string;
}

const SelectionModal: React.FC<SelectionModalProps> = ({
  title,
  options,
  selectedOptionIndex,
  tempOptionIndex,
  priceOptions,
  onSelect,
  onDone,
  onExit,
  formattedTotalPrice,
  imagePath,
}) => {
  return (
    <div className="w-80 border-gray-500 border-l-2 absolute top-20 right-0 bottom-0 bg-white z-10">
      <div className="flex items-center justify-between pl-10 pb-16 pt-6 pr-10">
        <p className="text-2xl text-gray-100">{title}</p>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-gray-100 cursor-pointer"
          onClick={onExit}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L7 5.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.6 7L0.3 12.3C-0.1 12.7 -0.1 13.3 0.3 13.7C0.5 13.9 0.7 14 1 14C1.3 14 1.5 13.9 1.7 13.7L7 8.4L12.3 13.7C12.5 13.9 12.8 14 13 14C13.2 14 13.5 13.9 13.7 13.7C14.1 13.3 14.1 12.7 13.7 12.3L8.4 7L13.7 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex flex-col px-10 gap-10">
        {options.map((option, index) => (
          <div key={option} className="cursor-pointer flex gap-5 items-center" onClick={() => onSelect(index)}>
            <div className="relative">
              <img
                src={imagePath(index)} 
                alt={`${option} choice`}
                className="h-14 w-auto rounded-full"
              />
              {tempOptionIndex === index && (
                <div className="absolute bottom-0 right-0 w-5 h-5 flex items-center justify-center rounded-full bg-green-500">
                  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.99998 10.9996C3.73479 10.9995 3.48047 10.8941 3.29298 10.7066L0.29298 7.70657C0.110822 7.51797 0.0100274 7.26537 0.0123059 7.00317C0.0145843 6.74098 0.119753 6.49016 0.305161 6.30476C0.490569 6.11935 0.741382 6.01418 1.00358 6.0119C1.26578 6.00962 1.51838 6.11042 1.70698 6.29258L3.90698 8.49257L10.21 0.385575C10.3728 0.176054 10.6122 0.0398036 10.8755 0.00679716C11.1388 -0.0262092 11.4045 0.0467322 11.614 0.209575C11.8235 0.372418 11.9598 0.611823 11.9928 0.875124C12.0258 1.13843 11.9528 1.40405 11.79 1.61357L4.78998 10.6136C4.70302 10.7259 4.59312 10.8185 4.46759 10.885C4.34206 10.9516 4.20378 10.9906 4.06198 10.9996H3.99998Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm">{option}</p>
              {tempOptionIndex === index && (
                <p className="text-sm text-gray-300">{priceOptions[index]} €</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 w-80">
        <div className="flex items-center justify-between px-6 mb-6 gap-10">
          <div className="flex items-center">
            <p className="text-sm tracking-widest text-gray-300">TOTAL</p>
            <svg
              width="16"
              fill="none"
              className="h-4 w-auto ml-2 text-gray-300"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z" fill="currentColor" />
            </svg>
          </div>
          <p className="text-2xl">{formattedTotalPrice}</p>
        </div>

        <div className="text-center py-5 bg-blue-400 cursor-pointer" onClick={onDone}>
          <p className=" text-white font-bold py-2 px-4 rounded-md">Done</p>
        </div>
      </div>
    </div>
  );
};

export default SelectionModal;
