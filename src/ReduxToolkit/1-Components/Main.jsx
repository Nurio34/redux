import { Route, Routes } from "react-router-dom";
import Home from "../2-Pages/Home";
import Cart from "../2-Pages/Cart";
import AuthForm from "../2-Pages/AuthForm";

function index() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/auth" element={<AuthForm />} />
            </Routes>
        </main>
    );
}

export default index;
