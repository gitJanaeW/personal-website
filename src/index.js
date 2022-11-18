// import React
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Import our custom CSS, BS alerts and BS Toast & Popover
import './scss/styles.scss';
import Alert from 'bootstrap/js/dist/alert';
import { Toast, Popover } from 'bootstrap';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
