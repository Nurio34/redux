import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const modalReducer = modal.reducer;

export const { toggleModal } = modal.actions;
