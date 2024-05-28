
interface IProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function Button({ children, onClick }: IProps) {
    return (
        <button
            className="text-black dark:text-white"
            onClick={onClick}
        >{children}</button>
    )
}