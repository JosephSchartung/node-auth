import Link from "next/link";
import React from "react";

import { MdEnhancedEncryption } from "react-icons/md";
import AuthenticatedNavbarItems from "./AuthenticatedNavbarItems";
import DefaultNavbarItems from "./DefaultNavbarItems";

interface NavbarProps { 
    isAuthenticated: boolean
}
class Navbar extends React.Component<NavbarProps>{
    constructor(props: NavbarProps){
        super(props);
    }
    render() {
        const { isAuthenticated } = this.props;
        return (
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <MdEnhancedEncryption size={50} />
                            <span className="ml-3 text-xl">
                                Node-Auth
                            </span>
                        </a>     
                    </Link>
                    {!isAuthenticated && <DefaultNavbarItems />}
                    {isAuthenticated && <AuthenticatedNavbarItems />}
                </div>
            </header>
        )
    }
}
export default Navbar;