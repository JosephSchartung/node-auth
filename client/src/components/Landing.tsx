import React, { Component } from "react";
import { Link, NavigateFunction } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import withRouter from '../utils/withRouter';

interface Props {
    history: NavigateFunction
}
interface State {

}

interface IMapStateToProps {
    auth: IAuth,
    errors: object
}

class Landing extends Component<Props & IMapStateToProps, State> {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
    }

    constructor(props: Props&IMapStateToProps) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history("/dashboard");
        }
    }
    render() {
        return (
            <div className="container">
                <div className="valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                <b>Authentication</b> with Node and React 🔒
                            </h4>
                            <p className="flow-text black-text text-darken-1">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt expedita quae, laboriosam quo praesentium voluptates omnis. Vitae officia, voluptas fuga quidem distinctio, dolor exercitationem nisi veritatis tempora sunt eius.
                            </p>
                            <br />
                            <div className="col s6">
                                <Link
                                    to="/register"
                                    style={{
                                        borderRadius:"5px"
                                    }}
                                    className="btn-large waves-effect waves-light hoverable green"
                                >
                                    Register
                                </Link>
                            </div>
                            <div className="col s6">
                                <Link
                                    to="/login"
                                    style={{
                                        borderRadius:"5px"
                                    }}
                                    className="btn-large waves-effect waves-light hoverable blue"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    errors: state.errors,
})

export default connect<IMapStateToProps, {}>(
    mapStateToProps,
    {}
)(withRouter(Landing));