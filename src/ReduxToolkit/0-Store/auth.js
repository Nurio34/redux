import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: true,
    isLoginForm: true,
    formData: {
        username: "",
        password: "",
    },
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleForm: (state) => {
            state.isLoginForm = !state.isLoginForm;
        },
        handleUsername: (state, { payload }) => {
            state.formData.username = payload;
        },
        handlePassword: (state, { payload }) => {
            state.formData.password = payload;
        },
        handleAuth: (state) => {
            state.isLoggedIn = true;
        },
    },
});

export const authReducer = auth.reducer;
export const { toggleForm, handleUsername, handlePassword, handleAuth } =
    auth.actions;
