import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GlobalContext } from "../GlobalApp";

function CartItem() {
    const { amount } = useContext(GlobalContext);

    return (
        <div className=" relative">
            <FaShoppingCart size={24} />
            <div
                className="w-6 flex place-content-center aspect-square bg-green-500 text-white rounded-full text-center 
                absolute -top-1/2 -right-1/2 -z-10 -translate-y-1 translate-x-1
            "
            >
                {amount}
            </div>
        </div>
    );
}

export default CartItem;
