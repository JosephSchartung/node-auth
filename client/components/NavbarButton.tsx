import Link from "next/link";
import React from "react";
import { ReactElement } from "react";

type NavbarButtonProps = {
    text: string,
    link: string,
    icon?: ReactElement<any>
}

class NavbarButton extends React.Component<NavbarButtonProps> {
    constructor(props: NavbarButtonProps){
        super(props);
    }
    render() {
        const { link, text, icon } = this.props;
        return(
            <Link href={link}>
            <button 
                className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
                {text}
                {icon}
        </button>
        </Link>
        )
    }
}

export default NavbarButton;