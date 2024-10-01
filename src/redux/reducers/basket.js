import { createReducer } from "@reduxjs/toolkit";
import { BasketStateAction } from "./actions";

const initialState = { userId: null, date: undefined, products: []=[] }

export const BasketReducer = createReducer(initialState, (builder) => {
    builder.addCase(BasketStateAction, (state, action) => {
        state.userId = action.payload.userId;
        state.date = action.payload.date;
        state.products = action.payload.products;
    })

})


