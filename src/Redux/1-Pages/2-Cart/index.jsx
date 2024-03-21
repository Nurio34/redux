import { connect } from "react-redux";
import CartProduct from "../../2-Components/5-CartProduct";

function index({ cart, total }) {
    return (
        <section>
            {cart.length ? (
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

            {total > 0 && (
                <div className="px-[4vw]">Tota Amount : ${total}</div>
            )}
        </section>
    );
}

const mapStateToProps = (state) => {
    return { cart: state.cart, total: state.total };
};

export default connect(mapStateToProps)(index);
