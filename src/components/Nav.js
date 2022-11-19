import React from "react";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light px-4 py-3">
            <a className="navbar-brand font-weight-bold" href="#">JANAE WELSH</a>
            <div className="navbar-toggler collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <button className="navbar-toggler navbar-burger px-0" id="burger" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="container px-0 mx-0" id="flexBar"> 
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <div className="navbar-nav" id="navbar-links">
                        <a className="nav-link" href="#">ABOUT ME</a>
                        <a className="nav-link" href="#">PORTFOLIO</a>
                        <a className="nav-link" href="#">CONTACT</a>
                        <a className="nav-link" href="#">RESUME</a>
                    </div>
                </div>
            </div>
        </nav>
    )
} 

export default Nav;