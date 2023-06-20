import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "../features/habitSlice.js";

export const store = configureStore({
    reducer: {
        habit: habitReducer,
    },
});