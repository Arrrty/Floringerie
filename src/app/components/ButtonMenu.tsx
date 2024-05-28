"use client";

interface IProps {
    onClick: () => void
}

export function ButtonMenu({
    onClick
}: IProps) {

    return (
        <button
            className={`flex flex-col justify-between w-[18px] h-[18px] transition-all md:hidden`}
            onClick={onClick}
        >
            <span className="w-full min-h-0.5 bg-black dark:bg-white"></span>
            <span className="w-full min-h-0.5 bg-black dark:bg-white"></span>
            <span className="w-full min-h-0.5 bg-black dark:bg-white"></span>
        </button>
    );
}