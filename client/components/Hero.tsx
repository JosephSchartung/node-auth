import type { NextPage } from "next";
import HeroButton from "./HeroButton";

const Hero: NextPage = () => {
    return(
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img 
                        src="https://dummyimage.com/720x600" 
                        alt="Hero Image"
                        className="object-cover object-center rounded"
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Node Auth
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ab quibusdam, provident distinctio perspiciatis iusto delectus dolore eum veritatis veniam hic vero nesciunt dolor libero, tenetur eos recusandae exercitationem doloremque!
                    </p>
                    <div className="mb-8 leading-relaxed">
                        <div className="flex justify-center">
                            <HeroButton 
                                text="Register"
                                link="/register"
                                bgColor="purple"
                                textColor="white"
                            />
                            <HeroButton
                                text="Login"
                                link="/login"
                                bgColor="gray"
                                textColor="white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;