import { menu } from "../../utils/consts";
import Link from "next/link";
import cls from "classnames";

interface IProps {
    isOpen: boolean,
    setIsOpenMenu: () => void
}

export const MenuMobile = ({
    isOpen,
    setIsOpenMenu
}: IProps) => {

    return (
        <ul className={cls(`absolute top-[calc(100%+1px)] left-0 overflow-hidden w-full border-b border-x rounded-b-xl bg-white dark:bg-slate-800  border-gray-500 transition-all z-10`, {
            'hidden': !isOpen
        })}>
            {menu.map((item) => (
                <li
                    key={item.name}
                    onClick={setIsOpenMenu}
                >
                    <Link className="block p-4 w-full hover:bg-[#c3899b30] cursor-pointer" href={item.path}>{item.name}</Link>
                </li>
            ))}
        </ul>
    );
}