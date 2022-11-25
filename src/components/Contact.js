import {useState, useRef} from "react";
import {captializeFirstChar, validateEmail} from "../utils/helpers";
import {TbConfetti} from "react-icons/tb";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [errorMsg, setErrorMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();
    const getEmailState = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMsg('Your email is invalid');
            } else {
                setErrorMsg('');
            }
            return;
        } 
        if (!e.target.value.length) {
            setErrorMsg(`${e.target.name} is required.`);
        } else {
            setErrorMsg('');
        }
    };
    const clearToast = (e) => {
        e.preventDefault();
        if(e.target.value==="╳"){
            e.currentTarget.setAttribute("hidden", true);
        }
    };
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('janae_gmail', 'template_ed06vlo', form.current, 'IRyGugxNdMef1SXwi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setSuccessMsg("Thanks for reaching out!");
        form.current.reset();
    }
    return(
        <section id="contact" className="d-flex flex-wrap col-9 mx-auto my-5">
            <div className="col-11 col-lg-5 mx-auto text-center text-md-start">
                <h1>Reach Out</h1>
                <p>
                    I'm eager to become an asset to your team! Reach out to me on whatever platform is most convenient and I will be happy to connect with you.
                </p>    
                <div className="text-lg mt-4 max-sm:text-base">
                    <div className="d-flex flex-column flex-md-row">
                        <p className="mt-2 mt-md-0 mb-0 mx-1">Phone:</p>
                        <a href="tel:289-200-2721">289-200-2721</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                        <p className="mt-2 mt-md-0 mb-0 mx-1">Email:</p>
                        <a href="mailto: janae.wel@gmail.com" target="blank"> janae.wel@gmail.com</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                        <p className="mt-2 mt-md-0 mb-0 mx-1">GitHub:</p>
                        <a href="https://githubcom/gitJanaeW?tab=repositories" target="blank">GitHub</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                        <p className="mt-2 mt-md-0 mb-0 mx-1">LinkedIn:</p>
                        <a href="https://www.linkedin.com/in/janae-welsh-01a52a23a/" target="blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            <form className="col-11 col-lg-4 mx-auto mt-3" ref={form} onSubmit={sendEmail}>
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
                    <button className="bg-info bg-gradient rounded border-0 text-white fw-bold px-3 py-2" type="submit">SEND</button>
                </div>
                {successMsg && (
                    <div onClick={clearToast} className="bg-secondary text-black rounded fixed-bottom" role="alert" style={{position: "sticky", bottom:"10px", boxShadow:"0 2px 10px black"}}>
                        <div className="my-4 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center px-2">
                                <TbConfetti/>
                                <strong>: Email sent!</strong>
                            </div>
                            <input type="button" className="bg-primary border-0 p-3 text-white" style={{borderRadius:"0 5px 5px 0"}} value="╳"></input>
                        </div>
                    </div>
                )}
                <div onClick={clearToast} className="bg-secondary text-black rounded fixed-bottom" role="alert" style={{position: "sticky", bottom:"10px", boxShadow:"0 2px 10px black"}}>
                        <div className="my-4 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center px-2">
                                <TbConfetti/>
                                <strong>: Email sent!</strong>
                            </div>
                            <input type="button" className="bg-primary border-0 p-3 text-white" style={{borderRadius:"0 5px 5px 0"}} value="╳"></input>
                        </div>
                    </div>
            </form>
        </section>
    );
};

export default Contact;