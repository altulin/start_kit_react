import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobileOrTablet: false,
  },

  reducers: {
    stepTo(state, action) {
      state.modalState = null;
      state.modalState[`${action.payload.type}`].step = action.payload.step;
    },
    setIsMobileOrTablet(state, action) {
      state.isMobileOrTablet = action.payload;
    },
  },
});

export const { stepTo, setIsMobileOrTablet } = appSlice.actions;
export default appSlice.reducer;
