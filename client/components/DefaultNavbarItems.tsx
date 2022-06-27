import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarButton from "./NavbarButton";
import { MdArrowRight } from "react-icons/md";


class DefaultNavbarItems extends React.Component {
    render() {
        return(
            <>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavbarItem text="Login" link="/login" />
                </nav>
                <NavbarButton text="Register" link="/register" icon={<MdArrowRight />} />
            </>
        )
    }
}

export default DefaultNavbarItems;