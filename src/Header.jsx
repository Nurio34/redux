import { Link } from "react-router-dom";

function Header() {
    return (
        <div className=" flex justify-between px-[4vw] py-[2vh] ">
            <Link to="/" className=" text-xl font-semibold">
                Home
            </Link>
            <div className=" flex text-purple-500 underline underline-offset-1 gap-[4vw]">
                <Link to="/reducer"> Reducer</Link>
                <Link to="/redux"> Redux</Link>
                <Link to="/reduxtoolkit"> ReduxToolkit</Link>
            </div>
        </div>
    );
}

export default Header;
