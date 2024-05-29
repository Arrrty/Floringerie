import picture1 from "../../assets/img/main/main1.jpg";
import picture2 from "../../assets/img/main/main2.jpg";
import picture3 from "../../assets/img/main/main3.jpg";
import GalleryItem from "./GalleryItem";

import cls from "classnames";


export default function Page() {
    const listProducts = [
        {
            id: 1,
            name: "Трусики",
            price: 2000,
            img: picture1
        },
        {
            id: 2,
            name: "Трусики",
            price: 2000,
            img: picture2
        },
        {
            id: 3,
            name: "Трусики",
            price: 2000,
            img: picture3
        },
        {
            id: 4,
            name: "Трусики",
            price: 2000,
            img: picture1
        },
        {
            id: 5,
            name: "Трусики",
            price: 2000,
            img: picture2
        },
        {
            id: 6,
            name: "Трусики",
            price: 2000,
            img: picture3
        },
    ]
    return (
        <ul className={cls("flex flex-col gap-4 items-center w-full h-full overflow-y-scroll scroll-none snap-mandatory snap-y scroll-py-4 py-4", {
            "sm:flex-row sm:justify-evenly sm:flex-wrap sm:gap-x-0 sm:gap-y-4": true
        })}>
            {listProducts.map((item, index, l) => (
                <GalleryItem
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    img={item.img}
                />
            ))}
        </ul>
    )
}