import { combineReducers } from "@reduxjs/toolkit";
import test from "../slices/test";

const rootReducer = combineReducers({ test });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
