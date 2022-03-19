import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  userId: string;
  name: string;
  account: string;
}

export interface User {
  token: string;
  userData: UserData;
}

const initialState = {
  token: "",
  userData: {
    userId: "",
    name: "",
    account: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
