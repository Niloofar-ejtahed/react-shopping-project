import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers/auth";
import { RegisterReducer } from "./reducers/register";
import { BasketReducer } from "./reducers/basket";

export const Store = configureStore({
    reducer:{
        register : RegisterReducer,
        auth : AuthReducer,
        basket : BasketReducer
    }
})