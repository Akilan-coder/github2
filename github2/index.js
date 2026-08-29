import React from "react";

function Dropdown({ labelText, options, onChange }) {
  return (
    <select data-testid="dropdown" onChange={onChange} defaultValue="">
      <option value="" disabled>
        {labelText}
      </option>
      {options && options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
