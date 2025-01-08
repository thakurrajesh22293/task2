import React, { useState, useEffect } from "react";
import axios from "axios";
import { endpointPath } from "../../config/api";
import Dropdowns from "../Dropdown/Dropdown";
import Result from "../Result/Result";
import moment from "moment";
import "./index.css";

const CurrencyConverter: React.FC = () => {
  // State variables to manage currency selection, amount, and conversion results
  const [from, setFrom] = useState<string>("EUR - Euro (€)");
  const [into, setInto] = useState<string>("INR - Indian Rupee (₹)");
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const [currencyResult, setCurrencyResult] = useState<string>("");
  const [currencyRate, setCurrencyRate] = useState<string>("");
  const [amountValue, setAmountValue] = useState<string>("");
  const [update, setUpdate] = useState<string>("");

  /**
   * Converts the currency from one type to another.
   * @param from - The source currency in "CODE - Name (Symbol)" format.
   * @param into - The target currency in "CODE - Name (Symbol)" format.
   * @param amount - The amount to convert, either as a number or string.
   */
  const convertCurrency = async (
    from: string,
    into: string,
    amount: number | string
  ) => {
    // Parse the amount to a valid number
    const amountValue =
      typeof amount === "string" ? parseFloat(amount) : amount;

    // Handle invalid input (zero, negative, or non-numeric values)
    if (amountValue === 0 || isNaN(amountValue) || amountValue < 0) {
      setCurrencyResult("");
      setCurrencyRate("");
      setLoading(false);
      return;
    }

    // Extract currency codes from the "CODE - Name (Symbol)" format
    const fromValue = from.split(" ")[0].trim();
    const intoValue = into.split(" ")[0].trim().toUpperCase();
    const url = endpointPath(fromValue);

    try {
      // Set loading state to true during the API request
      setLoading(true);

      // Fetch conversion data from the API
      const response = await axios.get(url);
      const parsedData = response.data;

      // If the target currency is valid, calculate and set conversion results
      if (intoValue in parsedData.conversion_rates) {
        const currencyRate = parsedData.conversion_rates[intoValue];
        const currencyResult = amountValue * currencyRate;
        const parsedUpdate = parsedData.time_last_update_utc;
        const update = moment(parsedUpdate).format("DD/MM/YYYY HH:mm:ss");
        setCurrencyRate(currencyRate.toFixed(2));
        setCurrencyResult(currencyResult.toFixed(2));
        setAmountValue(amountValue.toString());
        setUpdate(update);
      } else {
        console.error("Error while converting currency: Invalid data");
      }
    } catch (error) {
      console.error("Error while converting currency:", error);
    } finally {
      // Ensure loading state is reset after API call
      setLoading(false);
    }
  };

  // Use effect to trigger currency conversion when dependencies change
  useEffect(() => {
    if (from && into) {
      convertCurrency(from, into, amount);
    }
  }, [from, into, amount]);

  /**
   * Handles the input change for the amount field.
   * @param e - The input event containing the new value.
   */
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(parseFloat(value));
  };

  /**
   * Handles the selection of the source currency.
   * @param selectedOption - The selected option from the dropdown.
   */
  const handleFrom = (selectedOption: any) => {
    setFrom(selectedOption.value);
  };

  /**
   * Handles the selection of the target currency.
   * @param selectedOption - The selected option from the dropdown.
   */
  const handleInto = (selectedOption: any) => {
    setInto(selectedOption.value);
  };

  /**
   * Switches the source and target currencies.
   */
  const handleSwitch = () => {
    setFrom(into);
    setInto(from);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="currency-app">
          {/* Input field for the amount to convert */}
          <input
            className="form-control-lg currency-amount"
            placeholder="Enter Amount"
            value={amount}
            type="number"
            onChange={handleInput}
          />
          <div className="currency-from">
            {/* Dropdown for selecting the source currency */}
            <Dropdowns
              handleChange={handleFrom}
              placeholder="Select a currency (From)"
              value={from}
            ></Dropdowns>
          </div>
          <div className="currency-swap">
            {/* Button to swap source and target currencies */}
            <button className="btn currency-swap-btn" onClick={handleSwitch}>
              <i className="fas fa-sort"></i>
            </button>
          </div>
          <div className="currency-into">
            {/* Dropdown for selecting the target currency */}
            <Dropdowns
              handleChange={handleInto}
              placeholder="Select a currency (To)"
              value={into}
            ></Dropdowns>
          </div>
          <div>
            {/* Component to display the conversion result */}
            <Result
              loading={loading}
              result={parseFloat(currencyResult)}
              rate={parseFloat(currencyRate)}
              into={into}
              from={from}
              amount={parseFloat(amountValue)}
              update={update}
            ></Result>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
};

export default CurrencyConverter;
