'use client';

import Image from "next/image";
import darkTrusi from "@/assets/icons/trusi-dark.png";
import lightTrusi from "@/assets/icons/trusi-light.png";
import { useContext } from "react";
import { themeContext } from "@/app/components/Providers";


export default function Loading({
    width=100,
    height=100,
}) {
    const [theme] = useContext(themeContext);

    return (
        <div className="animate-pulse">
            <Image
                className="animate-spin-slow"
                src={theme ? lightTrusi : darkTrusi}
                alt="трусики"
                width={width}
                height={height}
                priority
            />
        </div>
    )
}