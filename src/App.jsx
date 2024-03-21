import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Content />
            </BrowserRouter>
        </>
    );
}

export default App;
