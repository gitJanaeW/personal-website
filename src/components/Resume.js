import LazyLoad from "react-lazyload";
import technologies from "../assets/technologies.jpg";

const Resume = () => {
    return(
        <section id="resume" className="col-lg-8 mx-auto my-4 text-center">
            <h1>Resume</h1>
            {/* <a href={resumePDF} download="janae-welsh-resume"
                className="w-fit h-fit text-sm font-bold tracking-wide bg-gradient-to-r from-cyan-500 text- to-teal-500 p-2 md:p-3 rounded-lg">
                <IoMdDownload/>
            </a> */}
            <div>
                <div>
                    <h2 className="my-4">TECHNICAL SKILLS</h2>  
                    <img src={technologies} className="mx-auto mb-5" alt="" style={{minWidth:"265px"}}/>
                    {/* <div id={`${skill.name}`}>
                        <>{skill.icon}</>
                        <p>{skill.name}</p>
                    </div> */}
                </div>
                <div className="col-9 col-lg-8 mx-auto">
                    <h2 className="my-4">EDUCATION</h2>
                    <LazyLoad height={300} offset={0} once>
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
                            <p className="mb-5 mt-2">
                                Consistent Dean's List honoree, specializing in Technical Writing.
                            </p>
                        </div>
                    </LazyLoad>
                    <h2 className="my-4 pt-3">EXPERIENCE</h2>
                    <LazyLoad height={300} offset={0} once>
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
                    </LazyLoad>
                </div>
            </div>
        </section>
    );
};

export default Resume;