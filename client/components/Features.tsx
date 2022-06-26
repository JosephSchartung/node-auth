import type { NextPage } from "next";

import { TbBrandNextjs, TbArrowRight } from "react-icons/tb"
import { SiExpress, SiRedux, SiMongodb, SiDocker } from "react-icons/si"
import FeatureCard from "./FeatureCard";

const Features: NextPage = () => {
    return(
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                        Features
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
                        More words
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <FeatureCard 
                        tech="Nextjs"
                        icon={<TbBrandNextjs size={50} />}
                        title="Frontend with Nextjs, Redux, and Tailwindcss"
                        description="lorem ipsum."
                        link="https://nextjs.org"
                    />

                    <FeatureCard
                        tech="Mongodb"
                        icon={<SiMongodb size={50}/>}
                        title="Backend with Mongodb, and Express"
                        description="lorem ipsum."
                        link="https://mongodb.com"

                    />
                    <FeatureCard
                        tech="Docker"
                        icon={<SiDocker size={50} />}
                        title="Docker Container"
                        description="lorem ipsum"
                        link="https://docker.com"
                    />
                </div>
            </div>
        </section>
    )
}

export default Features;