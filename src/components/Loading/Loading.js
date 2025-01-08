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
import "./index.css"; // Importing the associated CSS for styling
/**
 * Loading Component
 * This functional component renders a loading animation.
 */
function Loading() {
    return (_jsxs("div", __assign({ className: "loading" }, { children: [" ", _jsxs("div", __assign({ className: "loadings" }, { children: [" ", _jsx("div", { className: "line hw1" }), " ", _jsx("div", { className: "line hw2" }), " ", _jsx("div", { className: "line hw3" }), " ", _jsx("div", { className: "line hw4" }), " "] }))] })));
}
export default Loading; // Exporting the Loading component for use in
