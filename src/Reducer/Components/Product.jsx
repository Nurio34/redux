import { useContext } from "react";
import { GlobalContext } from "../GlobalApp";

function Product({ product }) {
    const { title, price, thumbnail, amount } = product;
    const { add, totalAmount } = useContext(GlobalContext);

    return (
        <div className=" border-double border-2 rounded-md border-black p-4 grid gap-1">
            <p className=" truncate">{title}</p>
            <img
                src={thumbnail}
                alt={title}
                className=" aspect-square object-cover rounded-md"
            />
            <p className=" text-end">${price}</p>
            <button
                className={`text-center py-1 px-4  text-white rounded-md hover:scale-105 hover:bg-green-300 hover:font-semibold hover:text-black active:scale-100 active:bg-green-500 
                    ${
                        amount > 0
                            ? "pointer-events-none bg-blue-500"
                            : "bg-green-500"
                    }
                `}
                onClick={() => {
                    add(product);
                    totalAmount();
                }}
            >
                {amount === 0 ? "Add Cart" : "In Cart"}
            </button>
        </div>
    );
}

export default Product;
