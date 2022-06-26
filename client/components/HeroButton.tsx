import type { NextPage } from "next";
import Link from "next/link";

type ButtonProps = {
    text: string,
    link: string,
    bgColor: string,
    textColor: string,
}

const HeroButton: NextPage<ButtonProps> = ({ link, text, bgColor, textColor }) => {
    return(
        <Link href={link} >
            <button className={`inline-flex text-${textColor} bg-${bgColor}-600 border-0 py-2 px-6 focus:outline-none hover:bg-${bgColor}-800 rounded text-lg uppercase`}>
                {text}
            </button>
        </Link>
        
    )
}

export default HeroButton;