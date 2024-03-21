import { FaShoppingCart } from "react-icons/fa";
import CartItems from "../3-CartItem";
import { Link } from "react-router-dom";

function index() {
    return (
        <header className=" flex items-center justify-between py-[4vh] px-[10vw] ş">
            <Link
                to="/redux"
                className=" font-extrabold text-2xl capitalize"
                style={{ fontVariant: "small-caps" }}
            >
                redux
            </Link>

            <Link to="/redux/cart" className="flex relative ">
                <FaShoppingCart size={24} />
                <CartItems />
            </Link>
        </header>
    );
}

export default index;
