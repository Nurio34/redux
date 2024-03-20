import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../1-Pages/1-Home";
import Cart from "../../1-Pages/2-Cart";

function index() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    );
}

export default index;
