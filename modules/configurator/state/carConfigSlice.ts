import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarConfigState {
  id: string;
  name: string;
  year: number;
  color: string;
  colorFull: string;
  wheels: string;
  interior: string;
  carType: string;
}

const initialState: CarConfigState = {
    id: '',
    name: '',
    year: 0,
    color: '',
    colorFull: '',
    wheels: '',
    interior: '',
    carType: '',
  };

const carConfigSlice = createSlice({
  name: 'carConfig',
  initialState,
  reducers: {
    setCarInfo: (state, action: PayloadAction<{ id: string; name: string; year: number; color: string; colorFull: string; wheels: string; interior:string; carType:string;}>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.year = action.payload.year;
      state.color = action.payload.color;
      state.colorFull = action.payload.colorFull;
      state.wheels = action.payload.wheels;
      state.interior = action.payload.interior;
      state.carType = action.payload.carType;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setColorFull: (state, action: PayloadAction<string>) => {
        state.colorFull = action.payload;
    },
    setWheels: (state, action: PayloadAction<string>) => {
      state.wheels = action.payload;
    },
    setInterior: (state, action: PayloadAction<string>) => {
      state.interior = action.payload;
    },
    resetCarConfig: () => initialState,
  },
});

export const { setCarInfo, setColor, setColorFull, setWheels, setInterior, resetCarConfig } = carConfigSlice.actions;

export default carConfigSlice.reducer;
