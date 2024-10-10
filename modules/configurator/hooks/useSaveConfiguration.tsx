import React, { useState } from "react";
import { useRouter } from 'next/router';
import { getAuth } from "firebase/auth";
import { doc, updateDoc, arrayUnion, collection, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/firebaseConfig"; 
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FinalConfig } from "../models/FinalConfigModel";


const useSaveConfiguration = () => {
  const router = useRouter();

  const handleSaveConfiguration = async (finalConfig: FinalConfig) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userDocRef = doc(db, "users", user.uid);

      try {
        const userDocSnapshot = await getDoc(userDocRef);

        if (!userDocSnapshot.exists()) {
          await setDoc(userDocRef, {
            savedConfigurations: [],
          });
        }

        const updatedUserDocSnapshot = await getDoc(userDocRef);
        const userData = updatedUserDocSnapshot.data();

        if (!userData) {
          console.error("User data is undefined.");
          return;
        }

        const existingConfigs = userData.savedConfigurations || [];

        const duplicateConfig = existingConfigs.find((config: any) => {
          return (
            config.carName === finalConfig.name &&
            config.carYear === finalConfig.year &&
            config.color === finalConfig.color &&
            config.colorFull === finalConfig.colorFull &&
            config.wheels === finalConfig.wheels &&
            config.interior === finalConfig.interior &&
            config.interiorFull === finalConfig.interiorFull &&
            config.carType === finalConfig.carType &&
            config.price === finalConfig.price &&
            config.colorPrice === finalConfig.colorPrice &&
            config.wheelsPrice === finalConfig.wheelsPrice &&
            config.interiorPrice === finalConfig.interiorPrice
          );
        });

        if (duplicateConfig) {
          console.error("You already have this configuration.");
          toast.error(
            <div className="flex gap-4 items-center">
              <strong className="text-xs font-bold p-3">ERROR</strong>
              <div className="text-xs">You already have this configuration.</div>
            </div>,
            {
              closeButton: ({ closeToast }) => (
                <button className="custom-close-button" onClick={closeToast}>
                  &#10006;
                </button>
              ),
            }
          );
          return; 
        }

        const existingConfigIndex = existingConfigs.findIndex(
          (config: { id: string }) => config.id === finalConfig.id
        );

        if (existingConfigIndex > -1) {
          existingConfigs[existingConfigIndex] = {
            ...existingConfigs[existingConfigIndex],
            carName: finalConfig.name,
            carYear: finalConfig.year,
            color: finalConfig.color,
            colorFull: finalConfig.colorFull,
            wheels: finalConfig.wheels,
            interior: finalConfig.interior,
            interiorFull: finalConfig.interiorFull,
            carType: finalConfig.carType,
            price: finalConfig.price,
            colorPrice: finalConfig.colorPrice,
            wheelsPrice: finalConfig.wheelsPrice,
            interiorPrice: finalConfig.interiorPrice,
            timestamp: new Date(),
          };
        } else {
          const newConfig = {
            id: Date.now().toString(),
            carName: finalConfig.name,
            carYear: finalConfig.year,
            color: finalConfig.color,
            colorFull: finalConfig.colorFull,
            wheels: finalConfig.wheels,
            interior: finalConfig.interior,
            interiorFull: finalConfig.interiorFull,
            carType: finalConfig.carType,
            price: finalConfig.price,
            colorPrice: finalConfig.colorPrice,
            wheelsPrice: finalConfig.wheelsPrice,
            interiorPrice: finalConfig.interiorPrice,
            timestamp: new Date(),
          };
          existingConfigs.push(newConfig);
        }

        await updateDoc(userDocRef, {
          savedConfigurations: existingConfigs,
        });

        console.log("Configuration saved/updated successfully.");
        toast.success(
          <div className="flex gap-4 items-center">
            <strong className="text-xs font-bold p-3">SUCCESS</strong>
            <div className="text-xs">Configuration saved/updated successfully.</div>
          </div>,
          {
            closeButton: ({ closeToast }) => (
              <button className="custom-close-button" onClick={closeToast}>
                &#10006;
              </button>
            ),
          }
        );
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      } catch (error) {
        console.error("Error saving configuration: ", error);
      }
    } else {
      console.error("User is not logged in");
    }
  };

  return { handleSaveConfiguration };
};

export default useSaveConfiguration;
