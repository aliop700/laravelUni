import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-light navbar-laravel mb-5">
        <div className="container">
            <Link className="navbar-brand" to="/">
                Universities
            </Link>
        </div>
    </nav>
);

export default Header;
