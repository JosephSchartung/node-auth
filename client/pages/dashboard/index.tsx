import Head from "next/head";
import { NextRouter, withRouter } from "next/router";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";

interface DashboardProps extends ReduxProps, WithRouterProps {

}

interface DashboardState {

};

class Dashboard extends React.Component<DashboardProps, DashboardState> {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
    }
    constructor(props: DashboardProps) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.auth.isAuthenticated) {
            this.props.history.push("/login");
        }
    }

    render() {
        return(
            <>
            Hey { this.props.auth.user.username } 👋
            </>
        )
    }
};

const mapStateToProps = (state:any) => ({
    auth: state.auth,
    errors: state.errors,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {})
)(Dashboard);
