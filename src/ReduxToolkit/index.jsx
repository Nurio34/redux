import { store } from "./0-Store";
import { Provider } from "react-redux";
import Header from "./1-Components/Header";
import Main from "./1-Components/Main";
import Modal from "./1-Components/Modal";

function index() {
    return (
        <Provider store={store}>
            <Header />
            <Main />
            <Modal />
        </Provider>
    );
}

export default index;
