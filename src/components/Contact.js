import React, {useState} from "react";
import {captializeFirstChar, validateEmail} from "../utils/helpers";
import {AiFillPhone, AiFillGithub} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {FaLinkedinIn} from 'react-icons/fa';

const Contact = () => {
    const [emailObj, setEmailObj] = useState();
    const [errorMsg, setErrorMsg] = useState();
    // check for live changes to the state of the form
    const getEmailState = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMsg('Your email is invalid');
            } else {
                setErrorMsg('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMsg(`${e.target.name} is required.`);
            } else {
                setErrorMsg('');
            }
        }
        if(!errorMsg) {
            // the spread operator ensures we have access to formState as a whole while also singling out each attribute's
            // value.
            // [e.target.name] refers to the name attribute in the preceeding JSX, meaning when the name, email or message
            // changes, we'll update the target (by its attribute name) with its new value
            return setEmailObj({...emailObj, [e.target.name]: e.target.value});
        }
    };
    const sendEmail = () => {
        
    }
    const logEmail = (e) => {
        e.preventDefault();
        console.log(emailObj);
    };
    return(
        <section id="contact" className="d-flex flex-wrap col-9 mx-auto my-4">
            <div className="col-11 col-lg-5 mx-auto text-center text-md-start">
                <h2>
                    Reach Out
                </h2>
                <p>
                    I'm eager to become an asset to your team! Reach out to me on whatever platform is most convenient and I will be happy to connect with you.
                </p>    
                <div className="text-lg mt-4 max-sm:text-base">
                    <div className="d-flex align-items-center">
                        <AiFillPhone/>
                        <a href="tel:289-200-2721" className="px-2 my-lg-2">289-200-2721</a>
                    </div>
                    <div className="d-flex align-items-center">
                        <MdEmail/>
                        <a className="px-2 my-lg-2" href="mailto: janae.wel@gmail.com" target="blank"> janae.wel@gmail.com</a>
                    </div>
                    <div className="d-flex align-items-center">
                        <AiFillGithub/>
                        <a className="px-2 my-lg-2" href="https://githubcom/gitJanaeW?tab=repositories" target="blank">GitHub</a>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaLinkedinIn/>
                        <a className="px-2 my-lg-2" href="https://www.linkedin.com/in/janae-welsh-01a52a23a/" target="blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            <form className="col-11 col-lg-4 mx-auto mt-3" onSubmit={logEmail}>
                <div>
                    <label htmlFor='name' className="fw-bold mb-2">FULL NAME:</label>
                    <br/>
                    <input id='name' onBlur={getEmailState} type='text' name='name'
                        className="w-100 p-1 rounded border-0"/>
                </div>
                <div className="mt-3">
                    <label htmlFor='email' className="fw-bold mb-2">EMAIL:</label>
                    <br/>
                    <input id='email' onBlur={getEmailState} type='email' name='email'
                        className="w-100 p-1 rounded border-0"/>
                </div>
                <div className="mt-3">
                    <label htmlFor='message' className="fw-bold mb-2">MESSAGE</label>
                    <br/>
                    <textarea id='message' onBlur={getEmailState} name='message'
                        className="w-100 p-1 rounded border-0" style={{height: "100px"}}></textarea>
                </div>
                {errorMsg && (<p>{captializeFirstChar(errorMsg)}</p>)}
                <div className="mt-3">
                    <button className="btn bg-info bg-gradient border-0">SEND</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;