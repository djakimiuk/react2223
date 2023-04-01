import { configureStore } from '@reduxjs/toolkit';
import airportsReducer from './airportsSlice';

export default configureStore({
  reducer: {
    airports: airportsReducer,
  },
});
