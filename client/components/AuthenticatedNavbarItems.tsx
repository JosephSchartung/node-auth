import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import NavbarItem from "./NavbarItem";

const AuthenticatedNavbarItems: NextPage = () => {
    return (
        <>
            <NavbarItem link={"/dashboard"} text={"Dashboard"}/>
        </>
    )
}

export default AuthenticatedNavbarItems;