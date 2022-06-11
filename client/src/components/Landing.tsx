import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
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

export default Landing;