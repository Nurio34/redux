import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../0-Store/cart";
import { useEffect } from "react";
import Product from "../1-Components/Product";
import { Link } from "react-router-dom";

function index() {
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.cart);
    const { isLoggedIn } = useSelector((store) => store.auth);

    return (
        <>
            {isLoggedIn ? (
                <section className=" px-[4vw] grid grid-cols-2 gap-[2vw] md:grid-cols-3 xl:grid-cols-4">
                    {products?.map((product) => {
                        return <Product key={product.id} product={product} />;
                    })}
                </section>
            ) : (
                <div className="px-[4vw] text-xl text-center ">
                    Please{" "}
                    <Link
                        to="/reduxtoolkit/auth"
                        className=" text-purple-600 underline underline-offset-2 font-semibold"
                    >
                        LogIn
                    </Link>{" "}
                    to see prodcuts
                </div>
            )}
        </>
    );
}

export default index;
