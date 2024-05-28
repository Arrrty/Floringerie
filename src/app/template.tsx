'use client';

import { useSelector } from "react-redux";

export default function Template({ children }: { children: React.ReactNode }) {
    const theme = useSelector((state: any) => state.theme.value);

    return (
        <main className={`flex-grow w-screen overflow-hidden dark:bg-slate-800 dark:text-white ${theme ? 'dark' : ''}`}>
            {children}
        </main>
    )
}