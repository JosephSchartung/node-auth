import type { NextPage } from "next";

import NavbarItem from "./NavbarItem";
import NavbarButton from "./NavbarButton";
import { MdArrowRight } from "react-icons/md";

const DefaultNavbarItems: NextPage = () => {
    return (
        <>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <NavbarItem text="Login" link="/login" />
            </nav>
            <NavbarButton text="Register" link="/register" icon={<MdArrowRight />} />
        </>

    )
}

export default DefaultNavbarItems;