var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// Importing necessary components and CSS
import Header from "./components/Header/Header"; // Header component to display the app's header
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter"; // CurrencyConverter component to handle currency conversion
import "./index.css"; // Importing the CSS file for styling
// Main App component
function App() {
    // The return statement renders the main application structure
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: "main-app" }, { children: [_jsx(Header, {}), _jsx(CurrencyConverter, {})] })) }));
}
// Exporting the App component to be used in other parts of the application
export default App;
