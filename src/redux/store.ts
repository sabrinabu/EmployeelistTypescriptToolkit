import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import employee from "./employee";
import numberclickslice from "./numberclickslice";

const rootReducer = combineReducers({
  employee:employee,
  numberclick: numberclickslice,
  });

export const store = configureStore({
    reducer:rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;