import React from "react";
import Nav from "./components/Nav";

const App = () => {
    return(
        <div>
            <Nav/>
            <h1>Hello, React, Webpack and Bootstrap</h1>
            <button className="btn bg-primary bg-gradient">Primary button</button>
        </div>
    );
}
export default App;