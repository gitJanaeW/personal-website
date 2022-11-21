import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
    return(
        <div>
            <Router>
                <Nav/>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Routes>
                <button className="btn bg-info bg-gradient">Primary button</button>
                <Footer/>
            </Router>
        </div>
    );
}
export default App;