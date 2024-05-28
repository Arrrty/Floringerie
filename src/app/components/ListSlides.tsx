"use client";

import { useEffect, useState } from "react";
// import Loading from "./components/Loading";
import img1 from "../../assets/img/main/main1.jpg";
import img2 from "../../assets/img/main/main2.jpg";
import img3 from "../../assets/img/main/main3.jpg";

import cls from "classnames";

import Image from "next/image";


export default function ListSlides() {

    const listImg = [
        {
          src: img1,
          id: 0,
        },
        {
          src: img2,
          id: 1,
        },
        {
          src: img3,
          id: 2,
        },
        {
          src: img1,
          id: 3,
        },
        {
          src: img2,
          id: 4,
        },
        {
          src: img3,
          id: 5,
        },
        {
          src: img1,
          id: 6,
        },
        {
          src: img2,
          id: 7,
        },
        {
          src: img3,
          id: 8,
        },
    ];
      const [imgStage, setImgStage] = useState(1);
    
      useEffect(() => {
        if (imgStage > listImg.length) {
          setImgStage(0);
        }

        setTimeout(() => {
          setImgStage((prev) => prev + 1);
        }, 5000);
      }, [imgStage, listImg.length]);

    return (
        <ul className="relative w-full h-full flex items-center">
            {listImg.map((item, index) => (
                <li
                    key={item.id}
                    className={cls("h-full flex overflow-hidden transition-all duration-1000", {
                    "w-0": imgStage % listImg.length !== item.id,
                    "w-full h-full": imgStage % listImg.length === item.id,
                    })}
                >
                    <Image
                        className="object-cover w-full"
                        src={item.src}
                        alt="трусики"
                        priority
                    />
                </li>
            ))}
        </ul>
    )
}