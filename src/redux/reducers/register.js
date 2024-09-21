import { createReducer } from "@reduxjs/toolkit";
import { RegisterStateAction } from "./authActions";

const initialState = { isRegisterSuccessful: false , user:undefined , pass:undefined , email:undefined }

export const RegisterReducer = createReducer(initialState, (builder) => {
    builder.addCase(RegisterStateAction, (state, action) => {
        state.isRegisterSuccessful = action.payload.isRegisterSuccessful;
        state.user = action.payload.user;
        state.pass = action.payload.pass;
        state.email = action.payload.email;
    })

})