import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Resume =  lazy(() => import('./components/Resume'));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
    return(
        <BrowserRouter>
            <Nav/>
                <Suspense fallback={<div style={{minHeight:"10vh"}}></div>}>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Routes>
                </Suspense>
            <Footer/>
        </BrowserRouter>
    );
}
export default App;