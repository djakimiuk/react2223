import { createSlice } from '@reduxjs/toolkit';
import airports from '../common/consts/airports';
import { uniqueId } from 'lodash';

export const airportsSlice = createSlice({
  name: 'airports',
  initialState: {
    list: [],
    selectedAirport: null,
  },
  reducers: {
    loadAirports: (state) => {
      state.list = airports.map((airport) => ({
        ...airport,
        id: uniqueId(),
      }));
    },
    removeAirports: (state) => {
      state.list = [];
    },
    setSelectedAirport: (state, value) => {
      state.selectedAirport = value.payload;
    },
    removeAirport: (state, value) => {
      const airportToRemove = value.payload;
      state.list = state.list.filter(
        (airport) => airport.id !== airportToRemove.id
      );
    },
  },
});

export const {
  loadAirports,
  removeAirports,
  setSelectedAirport,
  removeAirport,
} = airportsSlice.actions;

export default airportsSlice.reducer;
