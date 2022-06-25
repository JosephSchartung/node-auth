import type { NextPage } from "next";
import Link from "next/link";

import { MdMenu, MdEnhancedEncryption, MdArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import AuthenticatedNavbarItems from "./AuthenticatedNavbarItems";
import NavbarButton from "./NavbarButton";
import NavbarItem from "./NavbarItem";

const Navbar: NextPage = () => {
    const state: State = useSelector((state: State) => state);
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="" >
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <MdEnhancedEncryption size={50} />
                        <span className="ml-3 text-xl">
                            Node-Auth
                        </span>
                    </a>     
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavbarItem text="Login" link="/login" />
                    {state.auth.isAuthenticated && <AuthenticatedNavbarItems />}
                </nav>
                <NavbarButton text="Register" link="/register" icon={<MdArrowRight/>} />
            </div>
        </header>
    )
}

export default Navbar;