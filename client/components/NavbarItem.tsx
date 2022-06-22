import type { NextPage } from "next";
import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
    text: string,
    link: string,
}

const NavbarItem: NextPage<Props> = ({ text, link }) => {
    return (
        <Link href={link}>
        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-900 hover:text-white">
            <>
                {text}
            </>
        </a>
    </Link>
    )
}

export default NavbarItem;