import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {},
  reducers: {
    stepTo(state, action) {
      state.modalState = null;
      state.modalState[`${action.payload.type}`].step = action.payload.step;
    },
  },
});

export const { stepTo } = appSlice.actions;
export default appSlice.reducer;
