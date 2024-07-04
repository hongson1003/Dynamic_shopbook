'use client'
import Link from "next/link";

const MenuSelection = ({ href, title, id }: { href: string, title: string, id: number }) => {
    const handleOnClick = (id: number) => {
        const element = document.getElementById(String(id));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <Link
            href={`#`}
            className="flex items-center justify-center min-w-fit border-t-2 border-x-2 rounded-sm"
            onClick={() => handleOnClick(id)}
        >
            <span className="inline-block px-3 py-1 text-center text-black hover:text-sky-500 sm:text-sm text-sm">
                {title}
            </span>
        </Link>
    )
}

export default MenuSelection;