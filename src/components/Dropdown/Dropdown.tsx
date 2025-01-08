import React from "react";
import Select, { components } from "react-select";
import { currency } from "../../config/currency"; // Import currency options
import { customStyles } from "./index"; // Import custom styles for the Select component
const { Option } = components; // Destructure the Option component from react-select

interface DropdownsProps {
  placeholder: string; // Placeholder text for the dropdown
  handleChange: (selectedOption: any) => void; // Callback function when an option is selected
  value: any; // Current selected value
}

// Custom Option component for the dropdown, which includes a currency flag
const OptionComponent: React.FC<any> = (props) => {
  return (
    <Option {...props}>
      {/* Add a currency flag before the label using a class based on the option value */}
      <span className={`currency-flag currency-flag-${props.data.value}`} />{" "}
      {props.data.label}
    </Option>
  );
};

// Main Dropdowns component
const Dropdowns: React.FC<DropdownsProps> = (props) => {
  const { handleChange, placeholder, value } = props;

  // Find the selected value from the currency options based on the current value
  const selectValue = currency.find(
    (option) => option.value === value || option.label === value
  );

  return (
    <Select
      options={currency} // Provide currency options to the dropdown
      onChange={handleChange} // Callback for when an option is selected
      placeholder={placeholder} // Placeholder text for the dropdown
      styles={customStyles} // Apply custom styles
      value={selectValue} // Set the current selected value
      components={{ Option: OptionComponent }} // Use the custom Option component
    />
  );
};

export default Dropdowns; // Export the Dropdowns component as default
