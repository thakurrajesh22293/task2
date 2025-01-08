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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { heading } from "../../config/api"; // Importing 'heading' from the API configuration
import "./index.css"; // Importing CSS file for styling the component
// Header component definition
function Header() {
    // JSX returned by the Header component
    return (_jsxs("div", __assign({ className: "currency-header" }, { children: [" ", _jsx("div", { children: heading }), " "] })));
}
// Exporting Header component for use in other parts of the application
export default Header;
