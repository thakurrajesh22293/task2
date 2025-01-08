import React from "react"; // Importing React library for building components
import { heading } from "../../config/api"; // Importing 'heading' from the API configuration
import "./index.css"; // Importing CSS file for styling the component

// Header component definition
function Header() {
  // JSX returned by the Header component
  return (
    <div className="currency-header"> {/* Main container with 'currency-header' class */}
      <div>{heading}</div> {/* Displays the value of 'heading' */}
    </div>
  );
}

// Exporting Header component for use in other parts of the application
export default Header;
