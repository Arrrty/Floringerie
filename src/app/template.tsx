'use client';

import { setTheme } from "@/features/theme/themeSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";

export default function Template({ children }: { children: React.ReactNode }) {
    const theme = useSelector((state: any) => state.theme.value);
    const dp = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const themeStorage = localStorage.getItem("theme");

        if (themeStorage && themeStorage !== theme) {
            dp(setTheme(JSON.parse(themeStorage)));
        }

        setLoading(false);
    }, []);

    return (
        <main className={`flex-grow w-screen overflow-hidden dark:bg-slate-800 dark:text-white ${theme ? 'dark' : ''}`}>
            {loading ? (
                <Loading />
            ) : 
                children
            }
        </main>
    )
}