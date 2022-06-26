import type { NextPage } from "next";
import { ReactElement } from "react";
import { TbArrowRight } from "react-icons/tb";

type FeatureCardProps = {
    tech: string,
    icon: ReactElement<any>,
    title: string,
    description: string,
    link: string
}

const FeatureCard: NextPage<FeatureCardProps> = ({ tech, icon, title, description, link }) => {
    return (
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
                    {icon}
                            
                </div>
                <div className="flex-grow">
                    <h2 className="text-white text-lg title-font font-medium mb-3">
                        {title}
                    </h2>
                    <p className="leading-relaxed text-base">
                        {description}
                    </p>
                    <a href={link} className="mt-3 text-purple-400 inline-flex items-center">
                        Learn More about {tech}
                        <TbArrowRight />
                    </a>
                </div>
            </div>
    )
}

export default FeatureCard;