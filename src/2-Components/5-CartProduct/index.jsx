import { connect } from "react-redux";
import { Decrease, Increase, Remove_Cart } from "../../3-Hooks/actions";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function index({ product, removeCart, increase, decrease }) {
    const { title, thumbnail, price, amount } = product;

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
                    className=" text-center py-1 px-4 bg-green-500 text-white rounded-md hover:scale-105 hover:bg-green-300 hover:font-semibold hover:text-black active:scale-100 active:bg-green-500"
                    onClick={() => removeCart()}
                >
                    Remove
                </button>
            </div>
            <div className="grid gap-4 justify-center">
                <button onClick={() => increase()}>
                    <FaChevronUp />
                </button>
                <p className="text-center">{amount}</p>
                <button onClick={amount === 1 ? removeCart : decrease}>
                    <FaChevronDown />
                </button>
            </div>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps.product;

    return {
        removeCart: () => dispatch({ type: Remove_Cart, payload: { id } }),
        increase: () => dispatch({ type: Increase, payload: { id } }),
        decrease: () => dispatch({ type: Decrease, payload: { id } }),
    };
};

export default connect(null, mapDispatchToProps)(index);
