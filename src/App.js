import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
    return(
        <div>
            <Nav/>
            <h1>Hello, React, Webpack and Bootstrap</h1>
            <button className="btn bg-primary bg-gradient">Primary button</button>
            <Footer/>
        </div>
    );
}
export default App;