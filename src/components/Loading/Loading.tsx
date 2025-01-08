import React from "react"; // Importing React to create the component
import "./index.css"; // Importing the associated CSS for styling

/**
 * Loading Component
 * This functional component renders a loading animation.
 */
function Loading() {
  return (
    <div className="loading"> {/* Main container for the loading component */}
      <div className="loadings"> {/* Wrapper for the animated lines */}
        {/* Animated lines representing the loading effect */}
        <div className="line hw1"></div> {/* First line of the loading animation */}
        <div className="line hw2"></div> {/* Second line of the loading animation */}
        <div className="line hw3"></div> {/* Third line of the loading animation */}
        <div className="line hw4"></div> {/* Fourth line of the loading animation */}
      </div>
    </div>
  );
}

export default Loading; // Exporting the Loading component for use in
