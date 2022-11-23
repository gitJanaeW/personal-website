import React, {useState} from "react";
import LazyLoad from "react-lazyload";
import mainProjects from "../data/mainProjects";
import {FiChevronDown} from "react-icons/fi";

const Portfolio = () => {
    const dropdown = (e) => {
        e.preventDefault();
        const description = document.getElementById("dropdown")
        if(description.hasAttribute("hidden")) {
            description.removeAttribute("hidden");
            return;
        }
        description.setAttribute("hidden", true);
        
        // description = childDiv.getElementsByTagName('div')[1];
        // console.log(description)
        // if(e.target.value==="╳"){
        //     e.currentTarget.className = "hide toast"
        // }
    };
    return( 
        <section id="portfolio" className="col-9 col-lg-6 mx-auto my-4">
            <div className="text-center">
                <h1>
                    Portfolio
                </h1>
                <p>
                    Check out my most pivotal projects from newest to oldest in their respective categories. You can also browse through my large collection of projects on 
                    <a href="https://github.com/gitJanaeW?tab=repositories" target="_blank" rel="noreferrer"> Github</a>!
                </p>
                <p className="text-primary">***Please note that, I am currently touching up kinks in my main projects. These changes have not been deployed.***</p>
            </div>
            
            <div className="d-flex flex-column flex-wrap">
                <h2 className="text-center my-4">MAIN PROJECTS</h2>
                {mainProjects.map((mainProject) => (
                    <div className="d-flex flex-column pb-3 mb-3" key={mainProject.key}>
                        <a href={mainProject.link} target="_blank" rel="noreferrer">
                                <img className="rounded w-100" style={{objectFit:"cover"}} src={mainProject.img}
                                alt={mainProject.imgAlt}/>
                        </a>
                        <div className="d-flex justify-content-between align-items-start p-2">
                            <div>
                                <div className="d-md-flex flex-column flex-md-row my-1">
                                    <a href={mainProject.link} target="_blank" onClick={dropdown} rel="noreferrer">
                                        <h4 className="text-white my-2">{mainProject.name}</h4>
                                    </a>
                                    <p className="bg-info bg-gradient badge text-start text-md-center w-fit p-2 m-md-2">
                                        {mainProject.status}
                                    </p>
                                </div>
                                <p className="text-secondary">{mainProject.technologies}</p>
                            </div>
                                <LazyLoad height={300} offset={0} once>
                                    <div className="bg-black" onClick={dropdown}>
                                        <FiChevronDown size={28}/>
                                        <p id="dropdown" hidden>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                                    </div>
                                </LazyLoad>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;