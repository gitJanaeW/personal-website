import React from "react";
import LazyLoad from "react-lazyload";
import mainProjects from "../data/mainProjects";
import {BiChevronDown} from "react-icons/bi";

const Portfolio = () => {
    return(
            <section id="portfolio" className="col-9 col-lg-8 mx-auto my-4 text-center">
                <h2 className="">
                  Portfolio
                </h2>
                <div className="d-flex flex-column flex-wrap">
                    {mainProjects.map((mainProject) => (
                        <div className="d-flex flex-column" key={mainProject.key}>
                            <a href={mainProject.link} target="_blank" rel="noreferrer">
                                <LazyLoad height={300} offset={0} once>
                                    <img className="rounded-xl w-100" style={{objectFit:"cover"}} src={mainProject.img}
                                    alt={mainProject.imgAlt}/>
                                </LazyLoad>
                            </a>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex max-sm:flex-col mt-1">
                                        <a href={mainProject.link} target="_blank" rel="noreferrer">
                                            <h2 className="text-2xl max-sm:text-lg max-sm:font-medium mr-2 text-white">{mainProject.name}</h2>
                                        </a>
                                        <h3 className="w-fit text-sm text-center flex-none p-1 px-2 rounded-full text-white bg-gradient-to-r from-cyan-500 text- to-teal-500">
                                            {mainProject.status}
                                        </h3>
                                    </div>
                                    <p className="text-slate-400 pt-2 text-lg">{mainProject.technologies}</p>
                                </div>
                                <LazyLoad height={300} offset={0} once>
                                    <BiChevronDown/>
                                </LazyLoad>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    );
};

export default Portfolio;