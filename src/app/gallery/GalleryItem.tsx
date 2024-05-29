import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProps {
    id: number;
    img: StaticImageData;
    name: string;
    price: number;
    classes?: string;
}

export default function GalleryItem({
    id,
    img,
    name,
    price,
    classes
}: IProps) {
    return (
        <li className={`snap-start ${classes}`}>
            <Link href={`/gallery/${id}`}>
                <Image className="w-[300px] h-[400px] object-cover" src={img} alt="фото" width={300} height={400} priority />
                <p>{name}</p>
                <p>{price} P</p>
            </Link>
        </li>
    )
}