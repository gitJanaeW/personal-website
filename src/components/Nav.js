import {useState} from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    const [clickedAbout, setAbout] = useState(true);
    const [clickedPortfolio, setPortfolio] = useState(false);
    const [clickedContact, setContact] = useState(false);
    const [clickedResume, setResume] = useState(false);
    const highlight = () => {
        const path = window.location.pathname;
        setAbout(path === "/");
        setPortfolio(path === "/portfolio");
        setContact(path === "/contact");
        setResume(path ==="/resume");
    };
    return(
        <nav onClick={highlight} className="navbar navbar-expand-lg navbar-light px-4 py-4">
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
                            <h2 className={`${clickedAbout && "bg-info bg-gradient"} nav-link fw-bold px-2`}>ABOUT ME</h2>
                        </Link>
                        <Link to="/portfolio">
                            <h2 className={`${clickedPortfolio && "bg-info bg-gradient"} nav-link fw-bold px-2`}>PORTFOLIO</h2>
                        </Link>
                        <Link to="/contact">
                            <h2 className={`${clickedContact && "bg-info bg-gradient"} nav-link fw-bold px-2`}>CONTACT</h2>
                        </Link>
                        <Link to="/resume">
                            <h2 className={`${clickedResume && "bg-info bg-gradient"} nav-link fw-bold px-2 ml-2`}>RESUME</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
} 
export default Nav;