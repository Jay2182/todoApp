import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src={process.env.PUBLIC_URL + "/logo.png"}
                        alt=""
                        width="30"
                        height="24"
                    />
                    <span className="px-2">{props.title}</span>
                </Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    title: "TODO",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
