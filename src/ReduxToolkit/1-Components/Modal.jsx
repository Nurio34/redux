import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../0-Store/modal";
import { clearCart, handleTotal } from "../0-Store/cart";

function Modal() {
    const { isOpen } = useSelector((store) => store.modal);

    const dispatch = useDispatch();

    useEffect(() => {
        const body = document.body;

        isOpen
            ? (body.style.overflow = "hidden")
            : (body.style.overflow = "auto");
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(125,125,125,0.6)]  z-10">
                    <aside className=" text-[3vw] grid gap-[2vh] justify-items-center items-center  bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[2vh] px-[4vw] w-3/4 max-w-[48rem] aspect-[16/9] ">
                        <p>Are you sure to discard your cart ?</p>
                        <div className="flex gap-[4vw]">
                            <button
                                className=" py-[2vh] px-[4vw] bg-green-500 text-white"
                                onClick={(e) => {
                                    dispatch(toggleModal());
                                    dispatch(clearCart());
                                    dispatch(handleTotal());
                                }}
                            >
                                Confirm
                            </button>
                            <button
                                className=" py-[2vh] px-[4vw] bg-red-500 text-white"
                                onClick={(e) => {
                                    dispatch(toggleModal());
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
}

export default Modal;
