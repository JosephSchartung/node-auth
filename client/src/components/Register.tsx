import React, { Component } from "react";
import { Link, NavigateFunction } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { registerUser } from "../actions/authActions";
import withRouter from '../utils/withRouter';

interface Props {
    history: NavigateFunction
}

interface IMapStateToProps {
    auth: IAuth,
    errors: object,
}
interface IMapDispatchToProps {
    registerUser: RegisterUser
}
interface State {
    name:string,
    username:string
    password:string,
    password2:string,
    errors:any,
}

class Register extends Component<Props&IMapStateToProps&IMapDispatchToProps, State> {
    static propTypes = {
        registerUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
    }
    constructor(props: Props & IMapStateToProps & IMapDispatchToProps) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            password2: "",
            errors: {},
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history("/dashboard");
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        this.setState({
            ...this.state,
            [id]: value
        })
    }
    onSubmit = (e:any) => {
        e.preventDefault();
        const newUser: IRegisterUser = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
        }
        this.props.registerUser(newUser, this.props.history);
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

const mapStateToProps = (state:any) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect<IMapStateToProps,IMapDispatchToProps>(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));