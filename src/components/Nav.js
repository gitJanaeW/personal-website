import React from "react";

const Nav = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light px-4 py-3">
            <a className="navbar-brand font-weight-bold" href="#">JANAE WELSH</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="container d-flex justify-content-between"> 
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">RESUME</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 

export default Nav;