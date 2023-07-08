import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    destination: '',
  },
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    clearDestination: (state) => {
      state.destination = '';
    },
  },
});

export const { setDestination, clearDestination } = searchSlice.actions;
export default searchSlice.reducer;