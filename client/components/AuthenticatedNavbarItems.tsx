import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import NavbarButton from "./NavbarButton";

import NavbarItem from "./NavbarItem";

const AuthenticatedNavbarItems: NextPage = () => {
    return (
        <>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <NavbarItem text="Dashboard" link="/dashboard" />
            </nav>
            <NavbarButton text="Github" link="https://github.com/JosephSchartung/node-auth" icon={<GoMarkGithub />} />
        </>
    )
}

export default AuthenticatedNavbarItems;