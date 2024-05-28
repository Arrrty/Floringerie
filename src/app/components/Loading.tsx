'use client';

import Image from "next/image";
// import darkTrusi from "@/assets/icons/trusi-dark.png";
import lightTrusi from "@/assets/icons/trusi-light.png";


export default function Loading({
    width=100,
    height=100,
}) {

    return (
        <div className="animate-pulse">
            <Image
                className="animate-spin-slow"
                src={lightTrusi}
                alt="трусики"
                width={width}
                height={height}
                priority
            />
        </div>
    )
}