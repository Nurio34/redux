import { connect } from "react-redux";

function index({ amount }) {
    return (
        <div className=" absolute -z-10 bg-green-500 text-white w-6 text-center aspect-square rounded-full -top-1/2 -right-1/2 translate-x-1 -translate-y-1">
            {amount}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        amount: state.amount,
    };
};

export default connect(mapStateToProps)(index);
