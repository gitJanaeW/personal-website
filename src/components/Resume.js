import React from "react";
// icons
import {GrMysql} from 'react-icons/gr';
import {BiCodeCurly} from 'react-icons/bi';
import {IoMdDownload} from 'react-icons/io';
import { AiOutlineTable, AiFillFolderOpen} from 'react-icons/ai';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {
    SiHtml5,
    SiCss3, 
    SiJavascript, 
    SiMongodb, 
    SiExpress, 
    SiSequelize,
    SiJest,
    SiHandlebarsdotjs,
    SiWebpack
} from 'react-icons/si';

const Resume = () => {
    return(
        <section id="resume" className="col-9 col-lg-8 mx-auto my-4 text-center">
            <div>
                <div>
                    <h1>Resume</h1>
                    {/* <a href={resumePDF} download="janae-welsh-resume"
                        className="w-fit h-fit text-sm font-bold tracking-wide bg-gradient-to-r from-cyan-500 text- to-teal-500 p-2 md:p-3 rounded-lg">
                        <IoMdDownload/>
                    </a> */}
                </div>
                <div>
                    <div>
                        <div>
                            <h2 className="mb-4">TECHNICAL SKILLS</h2>
                            <div className="d-flex flex-wrap flex-column text-secondary" style={{height: "400px"}}>
                                <div>
                                    <SiJavascript size={28}/>
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <SiHtml5 size={28}/>
                                    <p>HTML</p>
                                </div>
                                <div>
                                    <SiCss3 size={28}/>
                                    <p>CSS</p>
                                </div>
                                <div>
                                    <SiMongodb size={28}/>
                                    <p>MongoDB</p>
                                </div>
                                <div>
                                    <SiExpress size={28}/>
                                    <p>Express</p>
                                </div>
                                <div>
                                    <FaReact size={28}/>
                                    <p>React</p>
                                </div>
                                <div>
                                    <FaNodeJs size={28}/>
                                    <p>Node.js</p>
                                </div>
                                <div>
                                    <GrMysql size={28}/>
                                    <p>MySQL</p>
                                </div>
                                <div>
                                    <SiSequelize size={28}/>
                                    <p>Sequelize</p>
                                </div>
                                <div>
                                    <SiJest size={28}/>
                                    <p>Jest</p>
                                </div>
                                <div>
                                    <SiWebpack size={28}/>
                                    <p>Webpack</p>
                                </div>
                                <div>
                                    <BiCodeCurly size={28}/>
                                    <p>OOP</p>
                                </div>
                                <div>
                                    <AiOutlineTable size={28}/>
                                    <p>ORM</p>
                                </div>
                                <div>
                                    <AiFillFolderOpen size={28}/>
                                    <p>MVC</p>
                                </div>
                                <div>
                                    <SiHandlebarsdotjs size={28}/>
                                    <p>Handlebars</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div>
                    <h2 className="mb-4">EDUCATION</h2>
                        <div className="text-wrap">
                                <h5 className="mb-0">Carelton University Full-Stack Development Boot Camp</h5>
                                <p>(May 2022 - Nov 2022)</p>
                                <p className="mb-3 mt-2">
                                    Cultivated comprehensive skill set in full-stack technologies through assigned and independent research. Avid participant and team player in class and during projects. Respected by peers and faculty.
                                </p>
                                <h5 className="mb-0">Ryerson University</h5>
                                <p>(Sept 2019 - Apr 2022)</p>
                                <p className="mb-3 mt-2">
                                    Consistent Dean's List honoree, achieving a BA in English with distinction.
                                </p>
                                <h5 className="mb-0">University of Waterloo</h5>
                                <p>(Sept 2017 - Dec 2018)</p>
                                <p className="mb-3 mt-2">
                                    Consistent Dean's List honoree, specializing in Technical Writing.
                                </p>
                        </div>
                        <h2>EXPERIENCE</h2>
                        <div className="text-wrap">
                            <h5 className="mb-0">English Tutor & Essay Reviewer</h5>
                            <span>Paper Co. </span>
                            <span>(Jan 2022 - Present)</span>
                                <p className="mb-3 mt-2">
                                    Empowering students to synthesize their own answers with question-based prompting. Efficiently employing on-the-fly research skills in live sessions. Adapting conceptual explanations to the needs of each student.
                                </p>
                            <h5 className="mb-0">Educational Consultant</h5>
                            <span>Sarah Fewson Consulting Co. </span>
                            <span className="text-nowrap">(Oct 2019 - Present)</span>
                            <p className="mb-3 mt-2">Providing detailed curriculum-based feedback for children's TV scripts. Delivering criticism constructively, kindly and professionally.</p>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;