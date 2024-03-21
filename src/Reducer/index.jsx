import GlobalApp from "./GlobalApp";
import Header from "./Components/Header";
import Main from "./Components/Main";

function index() {
    return (
        <GlobalApp>
            <Header />
            <Main />
        </GlobalApp>
    );
}

export default index;
