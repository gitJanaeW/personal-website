import React from "react";
// icons
import {GrMysql} from 'react-icons/gr';
import {BiCodeCurly} from 'react-icons/bi';
import { AiOutlineTable, AiFillFolderOpen} from 'react-icons/ai';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {
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
        <section id="resume" className="col-9 col-lg-8 mx-auto my-4">
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
                            {/* <img className="my-5 w-40 max-sm:w-1/3 object-cover rounded-full" src={headshot} alt="A headshot of Janae smiling in business casual wear" layout="fill"/> */}
                            <h2>TECHNICAL SKILLS</h2>
                            <div className="d-flex flex-wrap flex-column text-center text-secondary" style={{height: "400px"}}>
                                <div>
                                    <SiJavascript size={28}/>
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"></path></svg>
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
                    <h2>EDUCATION</h2>
                        <div className="text-wrap">
                                <h3>Carelton University Full-Stack Development Boot Camp</h3>
                                <p>(May 2022 - Nov 2022)</p>
                                <p>
                                    Cultivated comprehensive skill set in full-stack technologies through prescribed and independent research. Avid participant and team player in class and during projects. Respected by peers and faculty.
                                </p>
                                <h3>Ryerson University</h3>
                                <p>(Sept 2019 - Apr 2022)</p>
                                <p>
                                    Consistent Dean's List honoree, achieving a BA in English with distinction.
                                </p>
                                <h3>University of Waterloo</h3>
                                <p>(Sept 2017 - Dec 2018)</p>
                                <p>
                                    Consistent Dean's List honoree, specializing in Technical Writing.
                                </p>
                        </div>
                        <h2>EXPERIENCE</h2>
                        <div className="text-wrap">
                            <h3>English Tutor & Essay Reviewer</h3>
                            <p>Paper Co. <span>(Jan 2022 - Present)</span></p>
                                <p>Empowering students to synthesize their own answers with question-based prompting. Efficiently employing on-the-fly research skills in live sessions. Adapting conceptual explanations to the needs of each student.
                            </p>
                            <h3>Educational Consultant</h3>
                            <p>Sarah Fewson Consulting Co. <span>(Oct 2019 - Present)</span></p>
                            <p>Providing detailed curriculum-based feedback for children's TV scripts. Delivering criticism constructively, kindly and professionally.</p>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;