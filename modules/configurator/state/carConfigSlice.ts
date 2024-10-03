import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FinalConfig {
  id: string;
  name: string;
  year: number;
  color: string;
  colorFull: string;
  wheels: string;
  interior: string;
  interiorFull: string;
  carType: string;
}

interface CarConfigState {
  id: string;
  name: string;
  year: number;
  color: string;
  colorFull: string;
  wheels: string;
  interior: string;
  interiorFull: string;
  carType: string;
  finalConfig: FinalConfig;
}

const initialState: CarConfigState = {
  id: '',
  name: '',
  year: 0,
  color: '',
  colorFull: '',
  wheels: '',
  interior: '',
  interiorFull: '',
  carType: '',
  finalConfig: {
    id: '',
    name: '',
    year: 0,
    color: '',
    colorFull: '',
    wheels: '',
    interior: '',
    interiorFull: '',
    carType: '',
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
        interior: string;
        interiorFull: string;
        carType: string;
      }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.year = action.payload.year;
      state.color = action.payload.color;
      state.colorFull = action.payload.colorFull;
      state.wheels = action.payload.wheels;
      state.interior = action.payload.interior;
      state.interiorFull = action.payload.interiorFull;
      state.carType = action.payload.carType;

      state.finalConfig = {
        id: state.id,
        name: state.name,
        year: state.year,
        color: state.color,
        colorFull: state.colorFull,
        wheels: state.wheels,
        interior: state.interior,
        interiorFull: state.interiorFull,
        carType: state.carType,
      };
    },

    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;

      // Automatically update finalConfig when color changes
      if (state.finalConfig) {
        state.finalConfig.color = action.payload;
      }
    },

    setColorFull: (state, action: PayloadAction<string>) => {
      state.colorFull = action.payload;

      // Automatically update finalConfig when full color name changes
      if (state.finalConfig) {
        state.finalConfig.colorFull = action.payload;
      }
    },

    setWheels: (state, action: PayloadAction<string>) => {
      state.wheels = action.payload;

      // Automatically update finalConfig when wheels change
      if (state.finalConfig) {
        state.finalConfig.wheels = action.payload;
      }
    },

    setInterior: (state, action: PayloadAction<string>) => {
      state.interior = action.payload;

      // Automatically update finalConfig when interior changes
      if (state.finalConfig) {
        state.finalConfig.interior = action.payload;
      }
    },

    setInteriorFull: (state, action: PayloadAction<string>) => {
      state.interiorFull = action.payload;

      // Automatically update finalConfig when full interior name changes
      if (state.finalConfig) {
        state.finalConfig.interiorFull = action.payload;
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
  setInterior,
  setInteriorFull,
  resetCarConfig,
} = carConfigSlice.actions;

export default carConfigSlice.reducer;
