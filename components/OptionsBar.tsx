import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { auth, db } from '../lib/firebaseConfig';
import { getAuth } from '@firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { setCarInfo } from 'modules/configurator/state/carConfigSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Car } from 'modules/configurator';
import useHandleDelete from 'modules/configurator/hooks/useHandleDelete';

  interface OptionsBarProps {
    configId: string;
    car: Car;
}

const OptionsBar: React.FC<OptionsBarProps> = ({ configId, car }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const { handleDelete } = useHandleDelete(configId);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };
    

    const handleCarSelect = () => {
        const carData = {
            id: car.id,
            name: car.name,
            year: car.year,
            color: car.defaultColor,
            colorFull: car.defaultColorFull,
            wheels: car.defaultWheels,
            wheelsFull: car.defaultWheelsFull,
            interior: car.defaultInterior,
            interiorFull: car.defaultInteriorFull,
            carType: car.carType,
            price: car.price,
            colorPrice: car.colorPrice,
            wheelsPrice: car.wheelsPrice,
            interiorPrice: car.interiorPrice,
        };

        dispatch(setCarInfo(carData));
        router.push('/configurationView');
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown && !dropdown.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div>

        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" onClick={toggleDropdown} className='absolute top-5 right-5 text-blue-100 cursor-pointer' xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8Z" fill="currentColor"/>
            <path d="M4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14Z" fill="currentColor"/>
            <path d="M4 2C4 0.895431 3.10457 0 2 0C0.89543 0 0 0.895431 0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2Z" fill="currentColor"/>
        </svg>

            {dropdownOpen && (
                <div className="absolute right-5 top-9 bg-white shadow-md z-10 dropdown">
                    <ul>
                        <li className="hover:bg-blue-400">
                            <p className="block whitespace-nowrap px-6 py-4 text-sm text-blue-300 hover:text-white cursor-pointer" onClick={handleCarSelect}>Edit Configuration</p>
                        </li>
                        <li className="border-b gray-500"></li> 
                        <li className="hover:bg-blue-400">
                            <button
                            onClick={handleDelete}
                            className="block w-full text-left px-6 py-4 text-sm text-red-error hover:text-white cursor-pointer"
                            >
                            Delete
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        <ToastContainer position="top-center" className="whitespace-nowrap w-fit" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default OptionsBar;