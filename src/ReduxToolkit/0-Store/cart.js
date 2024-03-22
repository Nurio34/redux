import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://dummyjson.com/products?limit=12";

//todo : altta cart yerine zart yaz bakalım nooluyo

export const fetchProducts = createAsyncThunk(
    "cart/fetchProducts",
    async () => {
        try {
            const res = await axios(url);
            return res.data.products.map((product) => ({
                ...product,
                amount: 0,
            }));
        } catch (error) {
            console.log(error);
            return error.message;
        }
    },
);

const initialState = {
    isLoading: false,
    products: [],
    cart: [],
    amount: 0,
    price: 0,
};

const cart = createSlice({
    name: "cart",

    initialState,

    reducers: {
        addToCart: (state, { payload }) => {
            state.products = state.products.map((product) =>
                product.id === payload.id ? { ...product, amount: 1 } : product,
            );
            state.cart = [...state.cart, { ...payload, amount: 1 }];
        },

        increaseAmount: (state, { payload }) => {
            state.cart = state.cart.map((product) =>
                product.id === payload
                    ? { ...product, amount: product.amount + 1 }
                    : product,
            );
        },

        decreaseAmount: (state, { payload }) => {
            state.cart = state.cart.map((product) =>
                product.id === payload
                    ? { ...product, amount: product.amount - 1 }
                    : product,
            );
        },

        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter((product) => product.id !== payload);
        },

        handleTotal: (state) => {
            state.amount = state.cart.reduce(
                (sum, product) => sum + product.amount,
                0,
            );
            state.price = state.cart.reduce(
                (sum, product) => sum + product.price * product.amount,
                0,
            );
        },

        clearCart: (state) => {
            state.cart = [];
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const {
    addToCart,
    increaseAmount,
    decreaseAmount,
    removeFromCart,
    handleTotal,
    clearCart,
} = cart.actions;

export const cartReducer = cart.reducer;
