import { createSlice } from '@reduxjs/toolkit';
import airports from '../common/consts/airports';

export const airportsSlice = createSlice({
  name: 'airports',
  initialState: {
    list: [],
  },
  reducers: {
    loadAirports: (state) => {
      state.list = airports;
    },
    removeAirports: (state) => {
      state.list = [];
    },
  },
});

export const { loadAirports, removeAirports } = airportsSlice.actions;

export default airportsSlice.reducer;
