import { configureStore } from "@reduxjs/toolkit";
//  Reducers
import useReducer from "../features/cart/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: useReducer, //useReducer: equivale al inicialState que esta en cartSlice.js
  },
});
