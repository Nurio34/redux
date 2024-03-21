import { useContext } from "react";
import { GlobalContext } from "../GlobalApp";
import CartProduct from "../Components/CartProduct";

function Cart() {
    const { cart, price, amount } = useContext(GlobalContext);

    return (
        <section>
            {cart.length > 0 ? (
                <ul className="border-b-2 border-gray-400 shadow-lg py-[2vh] px-[4vw] grid grid-cols-2 gap-[2vw] md:grid-cols-3 xl:grid-cols-4">
                    {cart.map((product) => {
                        return (
                            <CartProduct key={product.id} product={product} />
                        );
                    })}
                </ul>
            ) : (
                <p className=" text-center">Your Cart is Empty</p>
            )}

            {price > 0 && (
                <div className="px-[4vw]">Tota Amount : ${price}</div>
            )}
        </section>
    );
}

export default Cart;
