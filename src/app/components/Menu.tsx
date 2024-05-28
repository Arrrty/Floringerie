import { menu } from "../../utils/consts";
import Link from "next/link";
import cls from "classnames";


export const Menu = () => {

    return (
        <nav className={cls(`hidden gap-2 list-none`, {
            'md:flex': true
        })}>
            {menu.map((item) => (
                <li key={item.name}>
                    <Link
                        className="block p-4 w-full border-t border-transparent hover:text-[#c3899b] hover:border-[#c3899b] cursor-pointer transition-all duration-500"
                        href={item.path}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </nav>
    );
}