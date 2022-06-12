import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GiAstronautHelmet } from "react-icons/gi";

class Navbar extends Component {
    render() {
        return(
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper deep-purple darken-4">
                        <Link to="/"
                            style={{
                                fontFamily: "monospace"
                            }}
                        >
                            <span className="brand-logo center">
                                <GiAstronautHelmet />
                                Node-Auth   
                            </span>
                        </Link>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;