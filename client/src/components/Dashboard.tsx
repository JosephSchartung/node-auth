import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../actions/authActions";
import withRouter from "../utils/withRouter";
import { NavigateFunction } from "react-router-dom";

interface Props {
    history: NavigateFunction
}
interface State {

}
interface IMapStateToProps {
    auth: IAuth
}
interface IMapDispatchToProps {
    logoutUser: LogoutUser;
}

class Dashboard extends Component<Props & IMapStateToProps & IMapDispatchToProps, State> {
    static propTypes = {
        logoutUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
    }
    constructor(props:Props & IMapStateToProps & IMapDispatchToProps) {
        super(props);
    }
    onLogoutClick = (e:any) => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        console.log(user);
        if(!isAuthenticated) {
            this.props.history("/");
        }
        return (
            <div className="container">
                <div className="valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                <b>Hey</b>, {user.name}
                                <p className="flow-text black-text">
                                    You are authenticated 🔓
                                </p>
                            </h4>
                            <button
                                onClick={this.onLogoutClick}
                                className="btn-large waves-effect waves-light hoverable red"
                                style={{
                                    borderRadius:"5px"
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => ({
    auth: state.auth
});

export default connect<{}, {}>(
    mapStateToProps,
    { logoutUser }
)(withRouter(Dashboard));