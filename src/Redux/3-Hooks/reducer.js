import {
    Add_Cart,
    Decrease,
    Fetch_Data,
    Increase,
    Remove_Cart,
    Price,
    Amount,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case Fetch_Data:
            return {
                ...state,
                products: action?.payload?.products.map((item) => ({
                    ...item,
                    amount: 0,
                })),
            };

        case Add_Cart:
            // console.log(action.payload);
            return {
                ...state,
                products: state.products.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, amount: 1 }
                        : item,
                ),
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
                products: state.products.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, amount: 0 }
                        : item,
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

        case Price:
            return {
                ...state,
                total: state.cart.reduce(
                    (sum, item) => sum + item.amount * item.price,
                    0,
                ),
            };

        case Amount:
            return {
                ...state,
                amount: state.cart.reduce((sum, item) => sum + item.amount, 0),
            };

        default:
            return state;
    }
};
