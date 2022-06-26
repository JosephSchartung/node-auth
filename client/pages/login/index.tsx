import type { NextPage } from 'next';
import Head from 'next/head';
import { FormSubmitButton, TextInput } from '../../components';

const Login: NextPage = () => {
    return (
<>
            <Head>
                <title>Login</title>
                <meta />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img 
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <h1 className='text-3xl font-bold px-6 py-12'>
                                Login
                            </h1>
                            <form>
                                <TextInput
                                    inputType="text"
                                    name="username"
                                    id="username"
                                    placeHolder="Username" 
                                />
                                <TextInput
                                    inputType="password"
                                    name="password"
                                    id="password"
                                    placeHolder="Password"
                                />
                                <FormSubmitButton
                                    text="Login"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;