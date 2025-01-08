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
import Select, { components } from "react-select";
import { currency } from "../../config/currency"; // Import currency options
import { customStyles } from "./index"; // Import custom styles for the Select component
var Option = components.Option; // Destructure the Option component from react-select
// Custom Option component for the dropdown, which includes a currency flag
var OptionComponent = function (props) {
    return (_jsxs(Option, __assign({}, props, { children: [_jsx("span", { className: "currency-flag currency-flag-".concat(props.data.value) }), " ", props.data.label] })));
};
// Main Dropdowns component
var Dropdowns = function (props) {
    var handleChange = props.handleChange, placeholder = props.placeholder, value = props.value;
    // Find the selected value from the currency options based on the current value
    var selectValue = currency.find(function (option) { return option.value === value || option.label === value; });
    return (_jsx(Select, { options: currency, onChange: handleChange, placeholder: placeholder, styles: customStyles, value: selectValue, components: { Option: OptionComponent } }));
};
export default Dropdowns; // Export the Dropdowns component as default
