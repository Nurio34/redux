import {
    Add_Cart,
    Decrease,
    Fetch_Data,
    Increase,
    Remove_Cart,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case Fetch_Data:
            return { ...state, products: action?.payload?.products };

        case Add_Cart:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    ...state.products
                        .filter((item) => item.id === action.payload.id)
                        .map((item) => ({ ...item, amount: 1 })),
                ],
            };

        case Remove_Cart:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id,
                ),
            };

        case Increase:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, amount: item.amount + 1 }
                        : item,
                ),
            };

        case Decrease:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, amount: item.amount - 1 }
                        : item,
                ),
            };

        default:
            return state;
    }
};
