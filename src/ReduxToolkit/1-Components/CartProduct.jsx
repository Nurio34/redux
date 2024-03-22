import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseAmount,
    handleTotal,
    increaseAmount,
    removeFromCart,
} from "../0-Store/cart";

function index({ title, thumbnail, price, amount, id }) {
    const dispatch = useDispatch();

    const { cart } = useSelector((store) => store.cart);

    useEffect(() => {
        dispatch(handleTotal());
    }, [amount]);

    return (
        <li
            className=" border-double border-2 rounded-md border-black p-4 
            flex items-center gap-2
        "
        >
            <div className="grid gap-1">
                <p className=" truncate">{title}</p>
                <img
                    src={thumbnail}
                    alt={title}
                    className=" aspect-square object-cover rounded-md"
                />
                <p className=" text-end">${price}</p>
                <button
                    className=" text-center py-1 px-4 bg-red-500 text-white rounded-md hover:scale-105 hover:bg-red-300 hover:font-semibold hover:text-black active:scale-100 active:bg-red-500"
                    onClick={() => {
                        dispatch(removeFromCart(id));
                        dispatch(handleTotal());
                    }}
                >
                    Remove
                </button>
            </div>
            <div className="grid gap-4 justify-center">
                <button
                    onClick={() => {
                        dispatch(increaseAmount(id));
                    }}
                >
                    <FaChevronUp />
                </button>
                <p className="text-center">{amount}</p>
                <button
                    onClick={() => {
                        dispatch(decreaseAmount(id));
                    }}
                    className={`${
                        amount === 1 && "text-gray-400 pointer-events-none"
                    } `}
                >
                    <FaChevronDown />
                </button>
            </div>
        </li>
    );
}

export default index;
