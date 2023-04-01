import { createSlice } from '@reduxjs/toolkit';
import airports from '../common/consts/airports';

export const airportsSlice = createSlice({
  name: 'airports',
  initialState: {
    list: airports,
  },
  reducers: {},
});

export const {} = airportsSlice.actions;

export default airportsSlice.reducer;
