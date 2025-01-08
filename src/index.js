import { jsx as _jsx } from "react/jsx-runtime";
// Importing necessary dependencies for the React app
import React from "react"; // React library for building the user interface
import ReactDOM from "react-dom/client"; // ReactDOM for rendering the app into the DOM
import "currency-flags/dist/currency-flags.min.css"; // Importing CSS for currency flags (styles for currency flag icons)
import App from "./App"; // Importing the main App component
import "./index.css"; // Importing the global CSS file for styling
// Creating a root element where the React app will be rendered
var root = ReactDOM.createRoot(document.getElementById("root") // Grabbing the HTML element with id 'root' to mount the app
);
// Rendering the React app inside the root element
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
