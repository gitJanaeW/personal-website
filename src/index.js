import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import './scss/styles.scss';
import {Toast} from 'bootstrap';

createRoot(document.getElementById("root")).render(<App/>);
