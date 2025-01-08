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
export var customStyles = {
    menuList: function (provided) { return (__assign(__assign({}, provided), { maxHeight: "226px", backgroundColor: "#212529", borderRadius: "7px", padding: "0", color: "#fff", "&::-webkit-scrollbar": {
            width: "2.5px",
        }, "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#2d3338",
        } })); },
    menu: function (provided) { return (__assign(__assign({}, provided), { borderRadius: "15px" })); },
    option: function (provided, state) { return (__assign(__assign({}, provided), { backgroundColor: state.isFocused ? "#262b30" : "", cursor: "pointer", alignItems: "center", padding: "4px 0px 4px 10px" })); },
    control: function (provided, state) { return (__assign(__assign({}, provided), { backgroundColor: state.isFocused ? "#262b30" : "#212529", padding: "4.8px", borderRadius: "7px", border: state.isFocused ? 0 : 0, boxShadow: state.isFocused ? 0 : 0, "&:hover": {
            border: state.isFocused ? 0 : 0,
        } })); },
    singleValue: function (provided) { return (__assign(__assign({}, provided), { color: "white" })); },
    dropdownIndicator: function (provided) { return (__assign(__assign({}, provided), { color: "white", "&:hover": {
            color: "white",
        } })); },
    input: function (provided) { return (__assign(__assign({}, provided), { color: "white" })); },
};
