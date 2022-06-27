import Link from "next/link";
import React from "react";
import { ReactElement } from "react";

type NavbarItemProps = {
    text: string,
    link: string,
    icon?: ReactElement<any, any>
}

class NavbarItem extends React.Component<NavbarItemProps> {
    constructor(props: NavbarItemProps){
        super(props);
    }
    render() {
        const { link, text, icon } = this.props;
        return(
            <Link href={link}>
                <a className="mr-5 hover:text-white">
                    <>
                        {text}
                        {icon}
                    </>
                </a>
            </Link>
        )
    }
}



export default NavbarItem;