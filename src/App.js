import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));
const Resume =  React.lazy(() => import('./components/Resume'));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
    return(
        <div>
            <Router>
                <Nav/>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                        <Route path="/portfolio" element={
                            <Suspense fallback={"Loading..."}><Portfolio/></Suspense>
                        }/>
                        <Route path="/contact" element={
                            <Suspense fallback={"Loading..."}><Contact/></Suspense>
                        }/>
                        <Route path="/resume" element={
                            <Suspense fallback={"Loading..."}><Resume/></Suspense>
                        }/>
                    </Routes>
                <Footer/>
            </Router>
        </div>
    );
}
export default App;