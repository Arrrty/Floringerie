import Image from "next/image";
import Link from "next/link";
import arrowIcon from "../../../assets/icons/arrow-swap-right.svg";



export default async function Page({ params }: { params: { item: string } }) {
    const data = await Promise.all([
        require(`../../../assets/img/main/main${params.item}.jpg`),
        require(`../../../assets/img/main/main${params.item}.jpg`),
        require(`../../../assets/img/main/main2.jpg`),
    ]);

    console.log(data);
    
    return (
        <div className="relative flex gap-4 overflow-x-scroll scroll-none snap-x snap-mandatory w-full h-full">
            {data.map((item, index) => (
                <Image className="snap-center min-w-full h-full object-cover" key={index} src={data[index]} alt=""/>
            ))}
            <div className="flex flex-col items-center justify-center snap-center min-w-full h-full">
                <h2>Описание</h2>
                <p>Цена</p>
                <p>Комментарии</p>
                <Link className="text-2xl text-[#c3899b] border rounded-full border-[#c3899b] px-4 py-2" href={`/contacts`}>Заказать</Link>
            </div>
            <Image
                className="absolute top-4 right-0 animate-pulse dark:invert h-[50px] opacity-0"
                src={arrowIcon}
                width={80}
                height={100}
                alt=">>"
                priority
            />
        </div>
    )
}