import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./CustomDropdown.css";

const CustomDropdown = ({
  label,
  fieldName,
  requireSelectAll,
  requireSelectAllLabel,
  requireCheckboxes,
  options,
  selectedOptions,
  onChange,
  placeholder,
  requireAtLeastOne,
  validationType,
  validationErrorMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preSelectedOptions, setPreSelectedOptions] = useState(selectedOptions);
  const dropdownRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setPreSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleCheckChange = (option) => {
    setError("");
    const updatedOptions = preSelectedOptions.some(
      (selectedOption) => selectedOption.id === option.id
    )
      ? preSelectedOptions.filter(
          (selectedOption) => selectedOption.id !== option.id
        )
      : [...preSelectedOptions, option];

    setPreSelectedOptions(updatedOptions);

    if (requireAtLeastOne) {
      const atLeastOneCheckError = validationType(updatedOptions);
      setError(atLeastOneCheckError);
    }

    onChange(fieldName, updatedOptions);
  };

  const handleSelectAll = () => {
    const allSelected = options.every((option) =>
      preSelectedOptions.some(
        (selectedOption) => selectedOption.id === option.id
      )
    );
    const updatedOptions = allSelected ? [] : [...options];

    setPreSelectedOptions(updatedOptions);

    if (requireAtLeastOne) {
      const atLeastOneCheckError = validationType(updatedOptions);
      setError(atLeastOneCheckError);
    }

    onChange(fieldName, updatedOptions);
  };
  const handleOptionClick = (option) => {
    setError("");
    const updatedOptions = preSelectedOptions.includes(option)
      ? [option]
      : [option];
    setPreSelectedOptions(updatedOptions);
    if (requireAtLeastOne) {
      const atLeastOneCheckError = validationType(updatedOptions);
      setError(atLeastOneCheckError);
    }
    onChange(fieldName, updatedOptions);
  };
  const isOptionEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  const singleOptionClassName = (option) =>
    `form-check mb-0 ${!requireCheckboxes ? "form-without-checkbox" : ""} ${
      !requireCheckboxes &&
      preSelectedOptions.some((singleItem) => isOptionEqual(singleItem, option))
        ? "selected-item"
        : ""
    }`;
  return (
    <>
      <div className='dropdown custom-dropdown' ref={dropdownRef}>
        {label && (
          <div>
            <label className='form-label'>
              {label}
              {requireAtLeastOne && <span style={{ color: "red" }}>*</span>}
            </label>
          </div>
        )}
        <button
          className='btn custom-bg dropdown-toggle'
          onClick={toggleDropdown}
          type='button'
        >
          {preSelectedOptions.length > 0
            ? preSelectedOptions.map((option) => option.label).join(", ")
            : placeholder || "Select"}
        </button>
        {isOpen && (
          <div className='dropdown-options'>
            {requireCheckboxes && requireSelectAll && (
              <div
                key='selectAll'
                className='form-check mb-1 pb-1 border-bottom'
              >
                <input
                  type='checkbox'
                  id='checkbox-all'
                  className='form-check-input remove-check-focus'
                  checked={
                    options.length > 0 &&
                    options.every((option) =>
                      preSelectedOptions.some(
                        (selectedOption) => selectedOption.id === option.id
                      )
                    )
                  }
                  onChange={handleSelectAll}
                />
                <label htmlFor='checkbox-all'>{requireSelectAllLabel}</label>
              </div>
            )}
            {options.map((option) => (
              <div
                key={option.id}
                className={singleOptionClassName(option)}
                onClick={
                  !requireCheckboxes
                    ? () => handleOptionClick(option)
                    : undefined
                }
              >
                {requireCheckboxes && (
                  <input
                    type='checkbox'
                    id={`checkbox-${option.id}`}
                    className='form-check-input remove-check-focus'
                    checked={preSelectedOptions.some(
                      (selectedOption) => selectedOption.id === option.id
                    )}
                    onChange={() => handleCheckChange(option)}
                  />
                )}
                <label htmlFor={`checkbox-${option.id}`}>{option.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      {(error || validationErrorMessage) && (
        <div className='invalid-check'>{error || validationErrorMessage}</div>
      )}
    </>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  requireAtLeastOne: PropTypes.bool,
  selectedOptions: PropTypes.array,
};

export default CustomDropdown;

// // drop down usage
// const dropdownOptions = [
//   { id: 1, label: "Lane 1" },
//   { id: 2, label: "Lane 2" },
//   { id: 3, label: "Lane 3" },
// ];
// const [selectedDropDownOptions, setSelectedDropDownOptions] = useState([
//   { id: 2, label: "Lane 2" },
// ]);
// const handleDropdownChange = (fieldName, selectedDropDownOptions) => {
//   setSelectedDropDownOptions(selectedDropDownOptions);
//   handleInputChange(fieldName, selectedDropDownOptions);
// };
// <CustomDropdown
//   label='Select Lane'
//   fieldName='lanes'
//   requireSelectAll={false}
//   requireSelectAllLabel='All'
//   requireCheckboxes={false}
//   options={dropdownOptions}
//   selectedOptions={selectedDropDownOptions}
//   onChange={handleDropdownChange}
//   placeholder='Select Lane'
//   requireAtLeastOne={true}
//   validationType={validateAtLeastOneCheck}
//   validationErrorMessage={formErrors["lanes"]}
// />;
// const handleInputChange = (fieldName, value) => {
//   setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
//   setFormErrors({}); // Reset all form errors when any input changes
// };
