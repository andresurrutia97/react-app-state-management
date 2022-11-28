import { createSlice } from '@reduxjs/toolkit';

const initialState = { isDarkMode: false };

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

// this is for dispatch
export const { toggleDarkMode } = darkModeSlice.actions;

// this is for configureStore
export default darkModeSlice.reducer;
