import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart";
import { authReducer } from "./auth";
import { modalReducer } from "./modal";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        modal: modalReducer,
    },
});
