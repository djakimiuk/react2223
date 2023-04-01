import { createSlice } from '@reduxjs/toolkit';

export const airportsSlice = createSlice({
  name: 'airports',
  initialState: {
    list: [],
  },
  reducers: {},
});

export const {} = airportsSlice.actions;

export default airportsSlice.reducer;
