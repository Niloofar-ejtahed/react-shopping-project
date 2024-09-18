import { createReducer } from "@reduxjs/toolkit";
import { changeLoginStateAction } from "./authActions";

const initialState = { isLogin: false , user:undefined , pass:undefined }

export const AuthReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeLoginStateAction, (state, action) => {
        state.isLogin = action.payload.isLogin;
        state.user = action.payload.user;
        state.pass = action.payload.pass;
    })

})