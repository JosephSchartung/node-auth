import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import { MdMenu, MdEnhancedEncryption, MdSupervisedUserCircle } from "react-icons/md";
import NavbarItem from "./NavbarItem";

const Navbar: NextPage = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    }
    return (
        <>
            <nav className="flex items-center flex-wrap bg-purple-400 p-3">
                <Link href="/" >
                    <a className="inline-flex items-center p-2 mr-4">
                        <MdEnhancedEncryption size={50}/>
                        <span className="text-xl text-white font-bold uppercase tracking-wide">
                            Node-Auth
                        </span>
                    </a>
                </Link>
                <button
                    className="inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
                    onClick={toggleNavbar}
                >
                    <MdMenu />
                </button>
                <div className={`${showNavbar ? "" : "hidden" } w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                        <NavbarItem link={"/login"} text={"Login"} />
                        <NavbarItem link={"/register"} text={"Register"} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;