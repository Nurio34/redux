import { connect } from "react-redux";
import { Add_Cart, Amount, Price } from "../../3-Hooks/actions";

function index({ product, addCart, totalAmount }) {
    const { title, price, thumbnail, amount } = product;
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
                className={`text-center py-1 px-4  text-white rounded-md hover:scale-105 hover:bg-green-300 hover:font-semibold hover:text-black active:scale-100 active:bg-green-500 
                    ${
                        amount > 0
                            ? "pointer-events-none bg-blue-500"
                            : "bg-green-500"
                    }
                `}
                onClick={() => {
                    addCart();
                    totalAmount();
                }}
            >
                {amount === 0 ? "Add Cart" : "In Cart"}
            </button>
        </div>
    );
}

const mapDispacthToProps = (dispatch, ownProps) => {
    const { id } = ownProps.product;

    return {
        addCart: () => dispatch({ type: Add_Cart, payload: { id } }),
        totalAmount: () => dispatch({ type: Amount }),
    };
};

export default connect(null, mapDispacthToProps)(index);
