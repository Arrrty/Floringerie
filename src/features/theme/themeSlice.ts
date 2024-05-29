import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value;
      localStorage.setItem("theme", JSON.stringify(state.value));
    },
    setTheme: (state, action) => {
      state.value = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;