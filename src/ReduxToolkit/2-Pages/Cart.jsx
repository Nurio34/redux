import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../1-Components/CartProduct";
import { toggleModal } from "../0-Store/modal";
function index() {
    const { cart, price } = useSelector((store) => store.cart);

    const dispatch = useDispatch();

    return (
        <section className="grid py-[2vh] ">
            {cart.length ? (
                <ul className="border-b-2 border-gray-400 shadow-lg py-[2vh] px-[4vw] grid grid-cols-2 gap-[2vw] md:grid-cols-3 xl:grid-cols-4">
                    {cart.map((product) => {
                        return <CartProduct key={product.id} {...product} />;
                    })}
                </ul>
            ) : (
                <p className=" text-center">Your Cart is Empty</p>
            )}

            {price > 0 && (
                <div className="px-[4vw] py-[2vh] text-end">
                    Total Amount : ${price}
                </div>
            )}

            {cart.length > 0 && (
                <button
                    type="button"
                    className=" justify-self-center py-1 px-[4vw] bg-red-500 font-semibold"
                    onClick={(e) => dispatch(toggleModal())}
                >
                    Clear Cart
                </button>
            )}
        </section>
    );
}

export default index;
