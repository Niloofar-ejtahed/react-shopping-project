import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/auth";

export const Store = configureStore({
    reducer:{
        auth : AuthReducer
    }
})