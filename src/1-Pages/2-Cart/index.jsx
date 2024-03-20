import { connect } from "react-redux";
import CartProduct from "../../2-Components/5-CartProduct";

function index({ cart }) {
    return (
        <section>
            {cart.length ? (
                <ul className=" px-[4vw] grid grid-cols-2 gap-[2vw] md:grid-cols-3 xl:grid-cols-4">
                    {cart.map((product) => {
                        return (
                            <CartProduct key={product.id} product={product} />
                        );
                    })}
                </ul>
            ) : (
                <p className=" text-center">Your Cart is Empty</p>
            )}
        </section>
    );
}

const mapStateToProps = (state) => {
    return { cart: state.cart };
};

export default connect(mapStateToProps)(index);
