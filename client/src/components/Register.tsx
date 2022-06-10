import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

interface Props {

}
interface State {
    name:string,
    username:string
    password:string,
    password2:string,
    errors:any,
}

class Register extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            password2: "",
            errors: {}
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
        })
    }
    onSubmit = (e:any) => {
        e.preventDefault();
        const newUser: IRegisterUser = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link
                            to="/"
                            className="btn-flat waves-effect"
                        >
                            <MdArrowBack />
                            Back
                        </Link>
                        <div className="col s12">
                            <h4>
                                <b>Register</b>
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account?{' '}
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input 
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    id="name"
                                    type="text"    
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.username}
                                    type="text"
                                    id="username"
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="input-field col s12">
                                <input 
                                    type="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    id="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    type="password"
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    id="password2"
                                />
                                <label htmlFor="password2">Confirm Password</label>
                            </div>
                            <div className="col s12">
                                <button 
                                    type="submit"
                                    className="btn-large waves-effect waves-light hoverable green"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;