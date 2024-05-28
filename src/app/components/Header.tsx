"use client";

import { useSelector } from "react-redux";
import ButtonTheme from "./ButtonTheme";
import cls from "classnames";
import { Menu } from "./Menu";


export default function Header() {
    const theme = useSelector((state: any) => state.theme.value);

    return (
        <header className={cls(`relative flex items-center justify-between p-1`, {
            'dark': theme,
            'dark:bg-slate-800 dark:text-white': true
        })} >
            <a href="/" className="text-3xl animate-logo flex items-center dark:animate-logo-dark">
                F<span className="text-[#c3899b]">L</span>OR<span className="text-2xl">&#10048;</span><span className="text-[#c3899b]">INGERIE</span>
            </a>
            <div className="flex items-center gap-2 cursor-pointer">
                <Menu />
                <ButtonTheme />
            </div>
        </header>
    );
}