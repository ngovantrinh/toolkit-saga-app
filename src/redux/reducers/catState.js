import { createSlice } from '@reduxjs/toolkit';

export const catSlice = createSlice({
  name: 'cats',
  initialState: {
    cats: [],
    isloading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isloading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isloading = false;
    },
    getCatsFalure: (state) => {
      state.isloading = false;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFalure } = catSlice.actions;

export default catSlice.reducer;
