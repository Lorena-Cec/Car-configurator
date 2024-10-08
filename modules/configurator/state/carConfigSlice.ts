import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FinalConfig {
  id: string;
  name: string;
  year: number;
  color: string;
  colorFull: string;
  wheels: string;
  wheelsFull: string;
  interior: string;
  interiorFull: string;
  carType: string;
  price: number;
  colorPrice: number;
  wheelsPrice: number;
  interiorPrice: number;
}

interface CarConfigState {
  id: string;
  name: string;
  year: number;
  color: string;
  colorFull: string;
  wheels: string;
  wheelsFull: string;
  interior: string;
  interiorFull: string;
  carType: string;
  price: number;
  colorPrice: number;
  wheelsPrice: number;
  interiorPrice: number;
  finalConfig: FinalConfig;
}

const initialState: CarConfigState = {
  id: '',
  name: '',
  year: 0,
  color: '',
  colorFull: '',
  wheels: '',
  wheelsFull: '',
  interior: '',
  interiorFull: '',
  carType: '',
  price: 0, 
  colorPrice: 0, 
  wheelsPrice: 0, 
  interiorPrice: 0,
  finalConfig: {
    id: '',
    name: '',
    year: 0,
    color: '',
    colorFull: '',
    wheels: '',
    wheelsFull: '',
    interior: '',
    interiorFull: '',
    carType: '',
    price: 0, 
    colorPrice: 0, 
    wheelsPrice: 0, 
    interiorPrice: 0,
  },
};

const carConfigSlice = createSlice({
  name: 'carConfig',
  initialState,
  reducers: {
    setCarInfo: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        year: number;
        color: string;
        colorFull: string;
        wheels: string;
        wheelsFull: string;
        interior: string;
        interiorFull: string;
        carType: string;
        price: number;
        colorPrice: number;
        wheelsPrice: number;
        interiorPrice: number;
      }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.year = action.payload.year;
      state.color = action.payload.color;
      state.colorFull = action.payload.colorFull;
      state.wheels = action.payload.wheels;
      state.wheelsFull = action.payload.wheelsFull;
      state.interior = action.payload.interior;
      state.interiorFull = action.payload.interiorFull;
      state.carType = action.payload.carType;
      state.price = action.payload.price;
      state.colorPrice = action.payload.colorPrice;
      state.wheelsPrice = action.payload.wheelsPrice;
      state.interiorPrice = action.payload.interiorPrice;

      state.finalConfig = {
        id: state.id,
        name: state.name,
        year: state.year,
        color: state.color,
        colorFull: state.colorFull,
        wheels: state.wheels,
        wheelsFull: state.wheelsFull,
        interior: state.interior,
        interiorFull: state.interiorFull,
        carType: state.carType,
        price: state.price,
        colorPrice: state.colorPrice,
        wheelsPrice: state.wheelsPrice,
        interiorPrice: state.interiorPrice,
      };
    },

    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;

      if (state.finalConfig) {
        state.finalConfig.color = action.payload;
      }
    },

    setColorFull: (state, action: PayloadAction<string>) => {
      state.colorFull = action.payload;

      if (state.finalConfig) {
        state.finalConfig.colorFull = action.payload;
      }
    },

    setWheels: (state, action: PayloadAction<string>) => {
      state.wheels = action.payload;

      if (state.finalConfig) {
        state.finalConfig.wheels = action.payload;
      }
    },

    setWheelsFull: (state, action: PayloadAction<string>) => {
      state.wheelsFull = action.payload;

      if (state.finalConfig) {
        state.finalConfig.wheelsFull = action.payload;
      }
    },

    setInterior: (state, action: PayloadAction<string>) => {
      state.interior = action.payload;

      if (state.finalConfig) {
        state.finalConfig.interior = action.payload;
      }
    },

    setInteriorFull: (state, action: PayloadAction<string>) => {
      state.interiorFull = action.payload;

      if (state.finalConfig) {
        state.finalConfig.interiorFull = action.payload;
      }
    },

    setColorPrice: (state, action: PayloadAction<number>) => {
      state.colorPrice = action.payload; 

      if (state.finalConfig) {
        state.finalConfig.colorPrice = action.payload;
      }
    },
    setWheelsPrice: (state, action: PayloadAction<number>) => {
      state.wheelsPrice = action.payload; 

      if (state.finalConfig) {
        state.finalConfig.wheelsPrice = action.payload;
      }
    },
    setInteriorPrice: (state, action: PayloadAction<number>) => {
      state.interiorPrice = action.payload; 

      if (state.finalConfig) {
        state.finalConfig.interiorPrice = action.payload;
      }
    },

    resetCarConfig: () => initialState,
  },
});

export const {
  setCarInfo,
  setColor,
  setColorFull,
  setWheels,
  setWheelsFull,
  setInterior,
  setInteriorFull,
  setColorPrice,
  setWheelsPrice,
  setInteriorPrice,
  resetCarConfig,
} = carConfigSlice.actions;

export default carConfigSlice.reducer;
