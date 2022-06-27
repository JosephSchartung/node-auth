import Link from "next/link";
import React from "react";

type HeroButtonProps = {
    text: string,
    link: string,
    bgColor: string,
    textColor: string,
}

class HeroButton extends React.Component<HeroButtonProps> {
    constructor(props: HeroButtonProps) {
        super(props);
    }
    render() {
        const { text, link, bgColor, textColor } = this.props;
        return (
            <Link href={link} >
                <button className={`inline-flex text-${textColor} bg-${bgColor}-600 border-0 py-2 px-6 focus:outline-none hover:bg-${bgColor}-800 rounded text-lg uppercase`}>
                    {text}
                </button>
        </Link>
        )
    }
}

export default HeroButton;