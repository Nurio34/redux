import { useSelector } from "react-redux";

function index() {
    const { amount } = useSelector((store) => store.cart);

    return (
        <div
            className=" absolute z-10 bg-green-500 text-white w-6 text-center aspect-square rounded-full
            top-0 right-0 translate-x-1/2 -translate-y-1/2
        "
        >
            {amount}
        </div>
    );
}

export default index;
