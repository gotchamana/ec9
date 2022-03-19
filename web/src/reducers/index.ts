import { combineReducers } from "@reduxjs/toolkit";
import test from "../slices/test";
import user from "../slices/login";
import snack from "../slices/snack";

const rootReducer = combineReducers({ test, user, snack });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
