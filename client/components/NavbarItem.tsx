import type { NextPage } from "next";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
    text: string,
    link: string,
    icon?: ReactElement<any, any>
}

const NavbarItem: NextPage<Props> = ({ text, link, icon }) => {
    return (
        <Link href={link}>
        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-900 hover:text-white">
            <>
                {text}
                {icon}
            </>
        </a>
    </Link>
    )
}

export default NavbarItem;