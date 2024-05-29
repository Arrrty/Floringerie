"use client";

import { menu } from "@/utils/consts";
import Image from "next/image";
import Link from "next/link";

import cls from "classnames";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";



export default function Footer() {
    const theme = useSelector((state: any) => state.theme.value);
    const pathName = usePathname();

    return (
        <nav className={cls("flex list-none items-center justify-evenly text-xs w-full", {
            'dark': theme,
            'dark:bg-slate-800 dark:text-white': true,
            'md:hidden': true
        })}>
            {menu.map((item) => (
                <li key={item.name}>
                    <Link 
                        className={cls("flex flex-col items-center justify-center cursor-pointer transition-all duration-500 px-2 py-1 tracking-wider", {
                            'bg-[#dd87a25b]': pathName === item.path,
                        })}
                        href={item.path}
                    >
                        <Image
                            className="dark:invert"
                            width={20}
                            height={20}
                            src={item.icon}
                            alt={item.name}
                        />
                        {item.name}
                    </Link>
                </li>
            ))}
        </nav>
    );
}