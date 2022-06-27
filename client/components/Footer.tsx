import Link from "next/link";
import React from "react";
import { MdEmail, MdEnhancedEncryption } from "react-icons/md";
import { SiGithub } from "react-icons/si";

class Footer extends React.Component {
    render() {
        return (
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <MdEnhancedEncryption size={50}/>
                            <span className="ml-3 text-xl">
                                Node-Auth
                            </span>
                        </a>
                    </Link>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                        &copy; 2022 Joseph Schartung - 
                        <a href="https://github.com/JosephSchartung" target="_blank" rel="noopener noreferrer" 
                            className="text-gray-500 ml-1 hover:text-purple-500 hover:underline"
                        >
                            @JosephSchartung
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://github.com/JosephSchartung" target="_blank" rel="noopener noreferrer"  className="text-gray-400">
                            <SiGithub />
                        </a>
                        <a href="mailto:joseph.schartung@gmail.com" className="ml-3 text-gray-400">
                            <MdEmail />
                        </a>
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer;