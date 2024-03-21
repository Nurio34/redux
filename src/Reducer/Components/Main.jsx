import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    );
}

export default Main;
