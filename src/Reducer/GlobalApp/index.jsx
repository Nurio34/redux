import { createContext, useContext, useEffect, useReducer } from "react";
import { useFetch } from "../Hooks/useFetch";
import { initialState } from "../Store/initialState";
import { reduce } from "../Store/reduce";
import {
    Add,
    Amount,
    Decrease,
    Fetch_Products,
    Increase,
    Remove,
    Total,
} from "../Store/action";
const url = "https://dummyjson.com/products";
export const GlobalContext = createContext();

function index({ children }) {
    const [state, dispatch] = useReducer(reduce, initialState);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () =>
        useFetch(url).then((data) =>
            dispatch({ type: Fetch_Products, payload: data }),
        );

    const add = (product) => dispatch({ type: Add, payload: { product } });

    const increase = (id) => dispatch({ type: Increase, payload: { id } });

    const decrease = (id) => dispatch({ type: Decrease, payload: { id } });

    const remove = (id) => dispatch({ type: Remove, payload: { id } });

    const totalPrice = () => dispatch({ type: Total, payload: {} });

    const totalAmount = () => dispatch({ type: Amount, payload: {} });

    return (
        <GlobalContext.Provider
            value={{
                ...state,
                add,
                increase,
                decrease,
                remove,
                totalPrice,
                totalAmount,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default index;
