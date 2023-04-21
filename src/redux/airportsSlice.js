import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

export const airportsSlice = createSlice({
  name: 'airports',
  initialState: {
    list: [],
    selectedAirport: null,
    airportsLoadingState: 'initial',
    responseError: ''
  },
  reducers: {
    loadAirports: (state, value) => {
      state.list = value.payload.map((airport) => ({
        ...airport,
        id: uniqueId(),
      }));
    },
    removeAirports: (state) => {
      // state.list = [];
    },
    setSelectedAirport: (state, value) => {
      state.selectedAirport = value.payload;
    },
    removeAirport: (state, value) => {
      // const airportToRemove = value.payload;
      // state.list = state.list.filter(
      //   (airport) => airport.id !== airportToRemove.id
      // );
    },
    setAirportsLoadingState: (state, value) => {
      state.airportsLoadingState = value.payload;
    },
    setResponseError: (state, value) => {
      state.responseError = value.payload;
    },
  },
});

export const {
  loadAirports,
  removeAirports,
  setSelectedAirport,
  removeAirport,
  setAirportsLoadingState,
  setResponseError
} = airportsSlice.actions;

export default airportsSlice.reducer;
