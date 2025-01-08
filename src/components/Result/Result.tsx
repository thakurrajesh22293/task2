import React from "react";
import Loading from "../Loading/Loading";
import "./index.css";

// Define the interface for props that the Result component expects
interface ResultProps {
  loading: boolean;  // Flag to indicate whether data is being loaded
  result: number;    // The result of the currency conversion
  rate: number;      // The conversion rate used for the currency conversion
  into: string;      // The currency code to convert into
  from: string;      // The currency code to convert from
  amount: number;    // The amount to be converted
  update: string;    // The timestamp of when the data was last updated
}

// Result component that displays the result of a currency conversion
function Result({ loading, result, rate, into, from, amount, update }: ResultProps) {
  
  // Extracts the base currency code from the 'from' field (e.g., "USD" from "USD Dollar")
  const fromField = from.split(" ")[0].trim().toUpperCase();
  
  // Extracts the target currency code from the 'into' field (e.g., "EUR" from "Euro")
  const intoField = into.split(" ")[0].trim().toUpperCase();

  return (
    <>
      {/* Conditional rendering based on the loading state */}
      {loading ? (
        // Display a loading spinner if data is being loaded
        <Loading />
      ) : (
        // Only render the result if it's a valid number for both result and rate
        !isNaN(result) &&
        !isNaN(rate) && (
          <>
            {/* Display the converted amount and its associated currency flag */}
            <p className="currency-value">
              {amount} {fromField}{" "}
              <span
                className={`currency-flag currency-flag-sm currency-flag-${from.toLowerCase()}`}
              />
            </p>

            {/* Display the conversion result and its associated currency flag */}
            <p className="currency-result">
              {result} ({intoField.toUpperCase()}){" "}
              <span
                className={`currency-flag currency-flag-lg currency-flag-${intoField.toLowerCase()}`}
              />
            </p>

            {/* Display the conversion rate with its associated currency flag */}
            <p className="currency-rate">
              Rate={rate}{" "}
              <span
                className={`currency-flag currency-flag-sm currency-flag-${intoField.toLowerCase()}`}
              />
            </p>

            {/* Display the timestamp of the last update */}
            <p className="currency-update">Last updated on: {update}</p>
          </>
        )
      )}
    </>
  );
}

export default Result;
