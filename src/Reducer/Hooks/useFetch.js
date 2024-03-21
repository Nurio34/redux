import { useEffect, useState } from "react";

export const useFetch = async (url, options) => {
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data.products.map((item) => ({ ...item, amount: 0 }));
    } catch (error) {
        console.log(error);
    }
};
