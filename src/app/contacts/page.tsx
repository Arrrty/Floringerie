import Image from "next/image";
import Link from "next/link";
import telegramIcon from "../../assets/icons/telegram.svg";




export default function Page() {
    return (
        <footer className="flex items-center justify-center h-full">
            <Link
                className="flex items-center justify-center gap-2 text-3xl"
                href="https://t.me/Ashes_of_roooses"
            >
                <Image
                    className="dark:invert"
                    src={telegramIcon}
                    alt="логотип"
                    width={100}
                    height={100}
                />
                <span>Telegram</span>
            </Link>
        </footer>
    )
}