import { createReducer } from "@reduxjs/toolkit";
import { changeLoginStateAction } from "./actions";

const initialState = { isLogin: false, email: undefined, pass: undefined }

export const AuthReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeLoginStateAction, (state, action) => {
        // state.isLogin = sessionStorage.userIsLogin;
        state.isLogin = action.payload.isLogin;
        state.user = action.payload.email;
        state.pass = action.payload.pass;
    })

})


