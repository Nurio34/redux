import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Reducer from "./Reducer";
import Redux from "./Redux";
import ReduxToolkit from "./ReduxToolkit";

function Content() {
    return (
        <main>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path="/redux/*" element={<Redux />} />
                <Route path="/reducer/*" element={<Reducer />} />
                <Route path="/reduxtoolkit/*" element={<ReduxToolkit />} />
            </Routes>
        </main>
    );
}

export default Content;
