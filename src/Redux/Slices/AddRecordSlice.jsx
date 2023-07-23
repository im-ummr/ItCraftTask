import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const recordSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.push(action.payload);
    },
    deleteRecord: (state, action) => {
      const recordIndex = action.payload;
      state.splice(recordIndex, 1);
    },
    updateRecord: (state, action) => {
      const { index, updatedRecord } = action.payload;
      state[index] = updatedRecord;
    },
  },
});

export const { addRecord,deleteRecord,updateRecord } = recordSlice.actions;
export default recordSlice.reducer;
