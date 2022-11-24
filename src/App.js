import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));
const Resume =  React.lazy(() => import('./components/Resume'));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Nav/>
                    <Routes>
                        <Route path="/" element={
                            <Suspense fallback={<div style={{minHeight:"60vh"}}></div>}><About/></Suspense>
                        }/>
                        <Route path="/portfolio" element={
                            <Suspense fallback={<div style={{minHeight:"60vh"}}></div>}><Portfolio/></Suspense>
                        }/>
                        <Route path="/contact" element={
                            <Suspense fallback={<div style={{minHeight:"60vh"}}></div>}><Contact/></Suspense>
                        }/>
                        <Route path="/resume" element={
                            <Suspense fallback={<div style={{minHeight:"60vh"}}></div>}><Resume/></Suspense>
                        }/>
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;