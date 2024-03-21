import { useEffect, useState } from "react";
import Header from "./2-Components/1-Header";
import Main from "./2-Components/2-Main";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./3-Hooks/reducer";
import { Fetch_Data } from "./3-Hooks/actions";

const url = "https://dummyjson.com/products?limit=12";

const fetchProducts = async (url, options) => {
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

fetchProducts(url).then((data) =>
    store.dispatch({ type: Fetch_Data, payload: data }),
);

const initialStore = {
    products: [],
    cart: [],
    total: 0,
    amount: 0,
};

const store = createStore(
    reducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function index() {
    return (
        <Provider store={store}>
            <Header />
            <Main />
        </Provider>
    );
}

export default index;
