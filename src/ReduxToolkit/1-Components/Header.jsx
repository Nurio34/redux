import { FaShoppingCart } from "react-icons/fa";
import CartItems from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function index() {
    const { isLoggedIn } = useSelector((store) => store.auth);
    const { formData } = useSelector((store) => store.auth);

    const { username } = formData;
    return (
        <header className=" flex items-center justify-between py-[4vh] px-[10vw] ş">
            <Link
                to="/reduxtoolkit"
                className=" font-extrabold text-2xl capitalize"
                style={{ fontVariant: "small-caps" }}
            >
                redux toolkit
            </Link>

            {isLoggedIn ? (
                <Link to="/reduxtoolkit/cart" className="flex relative ">
                    {username}
                    <FaShoppingCart size={24} />
                    <CartItems />
                </Link>
            ) : (
                <Link
                    to="/reduxtoolkit/auth"
                    className=" text-purple-600 underline underline-offset-2"
                >
                    LogIn
                </Link>
            )}
        </header>
    );
}

export default index;
