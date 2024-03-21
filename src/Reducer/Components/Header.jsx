import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Header() {
    return (
        <div className=" flex justify-between items-center py-[2vh] px-[4vw] ">
            <Link to={"/reducer"} className=" text-2xl font-bold ">
                Home
            </Link>
            <Link to={"/reducer/cart"}>
                <CartItem />
            </Link>
        </div>
    );
}

export default Header;
