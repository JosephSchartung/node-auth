import React, { Component } from "react";
import { Link, NavigateFunction } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { loginUser } from "../actions/authActions";
import withRouter from '../utils/withRouter';

interface Props {
    history: NavigateFunction
}

interface IMapStateToProps {
    auth: IAuth,
    errors: object
}
interface IMapDispatchToProps {
    loginUser: LoginUser
}
interface State {
    username: string,
    password: string,
    errors: any,
}

class Login extends Component<Props & IMapStateToProps & IMapDispatchToProps, State> {
    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
    }

    constructor(props: Props & IMapStateToProps & IMapDispatchToProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {},
        };
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
        });
    }

    onSubmit = (e:any) => {
        e.preventDefault();

        const userData: ILoginUser = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.loginUser(userData);
        this.props.history("/dashboard");
    }

    render() {
        const { errors } = this.state;
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
                                <b>Login</b>
                            </h4>
                            <p className="grey-text text-darken-1">
                                Don't have an account?{' '} 
                                <Link
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input 
                                    onChange={this.onChange}
                                    value={this.state.username}
                                    id="username"
                                    type="text"
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    id="password" 
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col s12">
                                <button 
                                    type="submit"
                                    className="btn-large waves-effect waves-light hoverable blue"
                                >
                                    Login
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
export default connect<IMapStateToProps, IMapDispatchToProps>(
    mapStateToProps,
    { loginUser }
)(withRouter(Login));