// Importing necessary components and CSS
import Header from "./components/Header/Header";  // Header component to display the app's header
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";  // CurrencyConverter component to handle currency conversion
import "./index.css";  // Importing the CSS file for styling

// Main App component
function App() {
  // The return statement renders the main application structure
  return (
    <>
      {/* Wrapper div for the main application */}
      <div className="main-app">
        {/* Header component */}
        <Header />
        
        {/* CurrencyConverter component */}
        <CurrencyConverter />
      </div>
    </>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;
