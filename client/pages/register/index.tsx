import Head from 'next/head';
import { NextRouter, useRouter, withRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { FormSubmitButton, TextInput } from '../../components';
import { registerUser } from '../../redux/actions/authActions';
import { compose } from 'redux';


interface RegisterProps extends ReduxProps, MapDispatchToProps, WithRouterProps {

}

type RegisterState = {
    name: string,
    username: string,
    password: string,
    password2: string,
}

type MapDispatchToProps = {
    registerUser: RegisterUser;
}

class Register extends React.Component<RegisterProps, RegisterState> {
    static propTypes = {
        registerUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
    }
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            password2: ""
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        const stateToChange = e.currentTarget.id;
        this.setState((prevState) => {
            return {
                ...prevState,
                stateToChange: newValue
            };
        });
    }

    onSubmit = (e:any) => {
        e.preventDefault();
        const newUser: RegisterUserData = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
        }
        this.props.registerUser(newUser, this.props.history)
    }

    render() {
        return (
            <>
                <Head>
                    <title>Register</title>
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
                                    Register
                                </h1>
                                <form noValidate onSubmit={this.onSubmit}>
                                    <TextInput
                                        inputType='text'
                                        name='name'
                                        id='name'
                                        placeHolder='Name'
                                        onChange={this.onChange}
                                    />
                                    <TextInput
                                        inputType="text"
                                        name="username"
                                        id="username"
                                        placeHolder="Username"
                                        onChange={this.onChange}
                                    />
                                    <TextInput
                                        inputType="password"
                                        name="password"
                                        id="password"
                                        placeHolder="Password"
                                        onChange={this.onChange}
                                    />
                                    <TextInput
                                        inputType="password"
                                        name="password2"
                                        id="password2"
                                        placeHolder='Confirm Password'
                                        onChange={this.onChange}
                                    />
                                    <FormSubmitButton
                                        text="Register"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state:any) => ({
    auth: state.auth,
    errors: state.errors
});

export default compose(
    withRouter,
    connect(mapStateToProps, { registerUser })
)(Register);