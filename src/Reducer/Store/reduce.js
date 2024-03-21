import {
    Add,
    Amount,
    Decrease,
    Fetch_Products,
    Increase,
    Remove,
    Total,
} from "./action";

export const reduce = (state, action) => {
    switch (action.type) {
        case Fetch_Products:
            return { ...state, products: action.payload };

        case Add:
            return {
                ...state,
                cart: [...state.cart, { ...action.payload.product, amount: 1 }],
                products: state.products.map((product) =>
                    product.id === action.payload.product.id
                        ? { ...product, amount: 1 }
                        : product,
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

        case Remove:
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

        case Total:
            return {
                ...state,
                price: state.cart.reduce(
                    (sum, item) => sum + item.price * item.amount,
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
