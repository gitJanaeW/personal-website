import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light px-4 py-3">
            <Link to="/">
                <h1 className="navbar-brand font-weight-bold"><strong>JANAE WELSH</strong></h1>
            </Link>
            <div className="navbar-toggler collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <button className="navbar-toggler navbar-burger px-0" id="burger" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="container px-0 mx-0" id="flexBar"> 
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <div className="navbar-nav" id="navbar-links">
                        <Link to="/">
                            <h2 className="nav-link" href="#">ABOUT ME</h2>
                        </Link>
                        <Link to="/portfolio">
                            <h2 className="nav-link" href="#">PORTFOLIO</h2>
                        </Link>
                        <Link to="/contact">
                            <h2 className="nav-link" href="#">CONTACT</h2>
                        </Link>
                        <Link to="/resume">
                            <h2 className="nav-link" href="#">RESUME</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
} 

export default Nav;