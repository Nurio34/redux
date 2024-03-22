import { useDispatch, useSelector } from "react-redux";
import {
    toggleForm,
    handleUsername,
    handlePassword,
    handleAuth,
} from "../0-Store/auth";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
    const { isLoginForm, formData } = useSelector((store) => store.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const FirstInp = useRef();
    useEffect(() => {
        FirstInp.current.focus();
        dispatch(handleUsername(""));
        dispatch(handlePassword(""));
    }, [isLoginForm]);

    const signup = () => {
        const users = JSON.parse(localStorage.getItem("auth")) || [];
        users.push(formData);
        localStorage.setItem("auth", JSON.stringify(users));
    };

    const ErrorEl = useRef();

    const login = () => {
        const users = JSON.parse(localStorage.getItem("auth")) || [];

        const user = formData.username;
        const password = formData.password;
        const isSignup = users.filter((item) => item.username === user);

        if (isSignup[0]?.password === password) {
            dispatch(handleAuth());
            navigate("/reduxtoolkit");
        } else {
            ErrorEl.current.style.visibility = "visible";
        }
    };

    return (
        <form
            className=" my-[2vh] mx-[4vw] py-[2vh] px-[4vw]
            grid gap-[2vh] rounded-lg shadow-lg border border-gray-400
        "
        >
            <legend
                className=" text-2xl font-bold capitalize text-center"
                style={{ fontVariant: "small-caps" }}
            >
                {isLoginForm ? "Login" : "Signup"}
            </legend>
            <fieldset className=" grid gap-[1vh]">
                <label htmlFor="userInp" className="grid">
                    Username
                    <input
                        type="text"
                        name="user"
                        id="userInp"
                        placeholder="Type your username..."
                        className="py-1 px-2 rounded-md border border-gray-300 shadow-md"
                        ref={FirstInp}
                        value={formData.username}
                        onChange={(e) =>
                            dispatch(handleUsername(e.target.value))
                        }
                        onFocus={(e) => {
                            ErrorEl.current.style.visibility = "hidden";
                        }}
                    />
                </label>
                <label htmlFor="passInp" className="grid">
                    Password
                    <input
                        type="password"
                        name="pass"
                        id="passInp"
                        placeholder="Type your password..."
                        className="py-1 px-2 rounded-md border border-gray-300 shadow-md"
                        value={formData.password}
                        onChange={(e) =>
                            dispatch(handlePassword(e.target.value))
                        }
                        onFocus={(e) => {
                            ErrorEl.current.style.visibility = "hidden";
                        }}
                    />
                </label>
                <p
                    className=" text-red-500 font-semibold text-center"
                    style={{ visibility: "hidden" }}
                    ref={ErrorEl}
                >
                    Worng username or password !
                </p>
                <button
                    type="submit"
                    className=" py-1 bg-green-500 rounded-md font-semibold"
                    onClick={(e) => {
                        e.preventDefault();
                        {
                            isLoginForm ? login() : signup();
                        }
                    }}
                >
                    {isLoginForm ? "Login" : "Signup"}
                </button>
            </fieldset>

            <div className="flex justify-between px-[1vw] ">
                <p>
                    {isLoginForm
                        ? "Don't you have an account?"
                        : "You already have an account?"}
                </p>
                <button
                    type="button"
                    className=" py-1 px-2 bg-blue-500 text-white rounded-md"
                    onClick={() => dispatch(toggleForm())}
                >
                    {isLoginForm ? "Signup" : "Login"}
                </button>
            </div>
        </form>
    );
}

export default AuthForm;
