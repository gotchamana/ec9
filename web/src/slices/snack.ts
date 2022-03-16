import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Snack {
  isShow: boolean;
  errorMsg: string;
}

const initialState = {
  isShow: false,
  errorMsg: "",
};

const snackSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {
    setSnack(state, action: PayloadAction<Snack>) {
      return action.payload;
    },
  },
});

export const { setSnack } = snackSlice.actions;
export default snackSlice.reducer;
