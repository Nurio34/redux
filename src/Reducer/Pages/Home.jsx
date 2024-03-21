import { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalApp";
import Product from "../Components/Product";
function Home() {
    const { products } = useContext(GlobalContext);

    return (
        <section className=" px-[4vw] grid grid-cols-2 gap-[2vw] md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
                return <Product key={product.id} product={product} />;
            })}
        </section>
    );
}

export default Home;
