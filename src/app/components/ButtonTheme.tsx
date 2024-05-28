"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/features/theme/themeSlice";

export default function ButtonTheme() {
    const theme = useSelector((state: any) => state.theme.value);
    const dp = useDispatch();

    return (
        <button
            className="text-2xl font-sans transition-all"
            onClick={() => dp(toggleTheme())}
        >
            {theme ? <>&#9728;</> : <>&#127762;</>}
        </button>
    )
}