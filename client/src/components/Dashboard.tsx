import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../actions/authActions";
import withRouter from "../utils/withRouter";

interface Props {

}
interface State {

}
interface IMapStateToProps {
    auth: IAuth
}

class Dashboard extends Component<Props & IMapStateToProps, State> {
    static propTypes = {
        logoutUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
    }
    constructor(props:Props & IMapStateToProps) {
        super(props);
    }
    onLogoutClick = (e:any) => {
        e.preventDefault();
        logoutUser();
    }

    render() {
        const { user } = this.props.auth;
        return (
            <div className="container">
                <div className="valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                <b>Hey</b>, {user.name}
                                <p className="flow-text black-text">
                                    You are authenticated 👍
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