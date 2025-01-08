// Importing necessary dependencies for the React app
import React from "react"; // React library for building the user interface
import ReactDOM from "react-dom/client"; // ReactDOM for rendering the app into the DOM
import "currency-flags/dist/currency-flags.min.css"; // Importing CSS for currency flags (styles for currency flag icons)
import App from "./App"; // Importing the main App component
import "./index.css"; // Importing the global CSS file for styling

// Creating a root element where the React app will be rendered
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Grabbing the HTML element with id 'root' to mount the app
);

// Rendering the React app inside the root element
root.render(
  <React.StrictMode>
    {/* React.StrictMode helps to identify potential problems in the application during development */}
    <App />
  </React.StrictMode>
);
