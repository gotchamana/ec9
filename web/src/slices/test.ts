import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TestState {
  id: string;
  txt: string;
}

const initialState: TestState = {
  id: "0000",
  txt: "111",
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addData(state, action: PayloadAction<TestState>) {
      return action.payload;
    },
  },
});

export const { addData } = testSlice.actions;
export default testSlice.reducer;
