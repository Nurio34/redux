import { connect } from "react-redux";
import { Add_Cart } from "../../3-Hooks/actions";

function index({ product, addCart }) {
    const { title, price, thumbnail } = product;
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
                className=" text-center py-1 px-4 bg-green-500 text-white rounded-md hover:scale-105 hover:bg-green-300 hover:font-semibold hover:text-black active:scale-100 active:bg-green-500"
                onClick={() => addCart()}
            >
                Add Cart
            </button>
        </div>
    );
}

const mapDispacthToProps = (dispatch, ownProps) => {
    const { id } = ownProps.product;

    return {
        addCart: () => dispatch({ type: Add_Cart, payload: { id } }),
    };
};

export default connect(null, mapDispacthToProps)(index);
