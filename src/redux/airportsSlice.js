import { createSlice } from '@reduxjs/toolkit';
import airports from '../common/consts/airports';

export const airportsSlice = createSlice({
  name: 'airports',
  initialState: {
    list: [],
    selectedAirport: null,
  },
  reducers: {
    loadAirports: (state) => {
      state.list = airports;
    },
    removeAirports: (state) => {
      state.list = [];
    },
    setSelectedAirport: (state, value) => {
      state.selectedAirport = value.payload;
    },
  },
});

export const { loadAirports, removeAirports, setSelectedAirport } =
  airportsSlice.actions;

export default airportsSlice.reducer;
