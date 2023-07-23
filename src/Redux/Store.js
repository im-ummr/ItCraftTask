import { configureStore } from '@reduxjs/toolkit';
import recordReducer from './Slices/AddRecordSlice';

const store = configureStore({
  reducer: {
    records: recordReducer,
  },
});

export default store;
