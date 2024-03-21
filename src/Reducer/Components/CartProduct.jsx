import { useContext, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GlobalContext } from "../GlobalApp";

function CartProduct({ product }) {
    const { title, price, thumbnail, amount, id } = product;

    const { increase, decrease, remove, totalPrice, totalAmount } =
        useContext(GlobalContext);

    useEffect(() => {
        totalPrice();
        totalAmount();
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
                        remove(id);
                        totalPrice();
                        totalAmount();
                    }}
                >
                    Remove
                </button>
            </div>
            <div className="grid gap-4 justify-center">
                <button
                    onClick={() => {
                        increase(id);
                    }}
                >
                    <FaChevronUp />
                </button>
                <p className="text-center">{amount}</p>
                <button
                    onClick={() => {
                        decrease(id);
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

export default CartProduct;
