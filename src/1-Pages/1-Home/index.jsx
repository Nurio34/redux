import { connect } from "react-redux";
import Product from "../../2-Components/4-Product";

function index({ products }) {
    return (
        <section className=" px-[4vw] grid grid-cols-2 gap-[2vw] md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
                return <Product key={product.id} product={product} />;
            })}
        </section>
    );
}

const mapStateToProps = (state) => {
    return { products: state.products };
};

export default connect(mapStateToProps)(index);
