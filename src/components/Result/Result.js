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
import Loading from "../Loading/Loading";
import "./index.css";
// Result component that displays the result of a currency conversion
function Result(_a) {
    var loading = _a.loading, result = _a.result, rate = _a.rate, into = _a.into, from = _a.from, amount = _a.amount, update = _a.update;
    // Extracts the base currency code from the 'from' field (e.g., "USD" from "USD Dollar")
    var fromField = from.split(" ")[0].trim().toUpperCase();
    // Extracts the target currency code from the 'into' field (e.g., "EUR" from "Euro")
    var intoField = into.split(" ")[0].trim().toUpperCase();
    return (_jsx(_Fragment, { children: loading ? (
        // Display a loading spinner if data is being loaded
        _jsx(Loading, {})) : (
        // Only render the result if it's a valid number for both result and rate
        !isNaN(result) &&
            !isNaN(rate) && (_jsxs(_Fragment, { children: [_jsxs("p", __assign({ className: "currency-value" }, { children: [amount, " ", fromField, " ", _jsx("span", { className: "currency-flag currency-flag-sm currency-flag-".concat(from.toLowerCase()) })] })), _jsxs("p", __assign({ className: "currency-result" }, { children: [result, " (", intoField.toUpperCase(), ")", " ", _jsx("span", { className: "currency-flag currency-flag-lg currency-flag-".concat(intoField.toLowerCase()) })] })), _jsxs("p", __assign({ className: "currency-rate" }, { children: ["Rate=", rate, " ", _jsx("span", { className: "currency-flag currency-flag-sm currency-flag-".concat(intoField.toLowerCase()) })] })), _jsxs("p", __assign({ className: "currency-update" }, { children: ["Last updated on: ", update] }))] }))) }));
}
export default Result;
