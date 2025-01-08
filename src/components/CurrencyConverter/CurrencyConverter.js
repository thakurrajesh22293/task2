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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import { endpointPath } from "../../config/api";
import Dropdowns from "../Dropdown/Dropdown";
import Result from "../Result/Result";
import moment from "moment";
import "./index.css";
var CurrencyConverter = function () {
    // State variables to manage currency selection, amount, and conversion results
    var _a = useState("EUR - Euro (€)"), from = _a[0], setFrom = _a[1];
    var _b = useState("INR - Indian Rupee (₹)"), into = _b[0], setInto = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(1), amount = _d[0], setAmount = _d[1];
    var _e = useState(""), currencyResult = _e[0], setCurrencyResult = _e[1];
    var _f = useState(""), currencyRate = _f[0], setCurrencyRate = _f[1];
    var _g = useState(""), amountValue = _g[0], setAmountValue = _g[1];
    var _h = useState(""), update = _h[0], setUpdate = _h[1];
    /**
     * Converts the currency from one type to another.
     * @param from - The source currency in "CODE - Name (Symbol)" format.
     * @param into - The target currency in "CODE - Name (Symbol)" format.
     * @param amount - The amount to convert, either as a number or string.
     */
    var convertCurrency = function (from, into, amount) { return __awaiter(void 0, void 0, void 0, function () {
        var amountValue, fromValue, intoValue, url, response, parsedData, currencyRate_1, currencyResult_1, parsedUpdate, update_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    amountValue = typeof amount === "string" ? parseFloat(amount) : amount;
                    // Handle invalid input (zero, negative, or non-numeric values)
                    if (amountValue === 0 || isNaN(amountValue) || amountValue < 0) {
                        setCurrencyResult("");
                        setCurrencyRate("");
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    fromValue = from.split(" ")[0].trim();
                    intoValue = into.split(" ")[0].trim().toUpperCase();
                    url = endpointPath(fromValue);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    // Set loading state to true during the API request
                    setLoading(true);
                    return [4 /*yield*/, axios.get(url)];
                case 2:
                    response = _a.sent();
                    parsedData = response.data;
                    // If the target currency is valid, calculate and set conversion results
                    if (intoValue in parsedData.conversion_rates) {
                        currencyRate_1 = parsedData.conversion_rates[intoValue];
                        currencyResult_1 = amountValue * currencyRate_1;
                        parsedUpdate = parsedData.time_last_update_utc;
                        update_1 = moment(parsedUpdate).format("DD/MM/YYYY HH:mm:ss");
                        setCurrencyRate(currencyRate_1.toFixed(2));
                        setCurrencyResult(currencyResult_1.toFixed(2));
                        setAmountValue(amountValue.toString());
                        setUpdate(update_1);
                    }
                    else {
                        console.error("Error while converting currency: Invalid data");
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error while converting currency:", error_1);
                    return [3 /*break*/, 5];
                case 4:
                    // Ensure loading state is reset after API call
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // Use effect to trigger currency conversion when dependencies change
    useEffect(function () {
        if (from && into) {
            convertCurrency(from, into, amount);
        }
    }, [from, into, amount]);
    /**
     * Handles the input change for the amount field.
     * @param e - The input event containing the new value.
     */
    var handleInput = function (e) {
        var value = e.target.value;
        setAmount(parseFloat(value));
    };
    /**
     * Handles the selection of the source currency.
     * @param selectedOption - The selected option from the dropdown.
     */
    var handleFrom = function (selectedOption) {
        setFrom(selectedOption.value);
    };
    /**
     * Handles the selection of the target currency.
     * @param selectedOption - The selected option from the dropdown.
     */
    var handleInto = function (selectedOption) {
        setInto(selectedOption.value);
    };
    /**
     * Switches the source and target currencies.
     */
    var handleSwitch = function () {
        setFrom(into);
        setInto(from);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "container-fluid" }, { children: _jsxs("div", __assign({ className: "currency-app" }, { children: [_jsx("input", { className: "form-control-lg currency-amount", placeholder: "Enter Amount", value: amount, type: "number", onChange: handleInput }), _jsx("div", __assign({ className: "currency-from" }, { children: _jsx(Dropdowns, { handleChange: handleFrom, placeholder: "Select a currency (From)", value: from }) })), _jsx("div", __assign({ className: "currency-swap" }, { children: _jsx("button", __assign({ className: "btn currency-swap-btn", onClick: handleSwitch }, { children: _jsx("i", { className: "fas fa-sort" }) })) })), _jsx("div", __assign({ className: "currency-into" }, { children: _jsx(Dropdowns, { handleChange: handleInto, placeholder: "Select a currency (To)", value: into }) })), _jsx("div", { children: _jsx(Result, { loading: loading, result: parseFloat(currencyResult), rate: parseFloat(currencyRate), into: into, from: from, amount: parseFloat(amountValue), update: update }) })] })) })), _jsx("div", { className: "space" })] }));
};
export default CurrencyConverter;
