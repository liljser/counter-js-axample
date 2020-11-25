import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;
const counterSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export default counterSlice;
