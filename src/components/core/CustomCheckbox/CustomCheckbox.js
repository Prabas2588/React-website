import React, { useState} from "react";
import PropTypes from "prop-types";
import "./CustomCheckbox.css";

const CustomCheckbox = ({
  label,
  fieldName,
  requireSelectAll,
  requireSelectAllLabel,
  options,
  selectedOptions,
  onChange,
  isHorizontal,
  requireAtLeastOne,
  validationType,
  validationErrorMessage,
}) => {
  const [error, setError] = useState("");
  const [preSelectedOptions, setPreSelectedOptions] = useState(selectedOptions);
  const updateOptions = (newOptions) => {
    setPreSelectedOptions(newOptions);

    if (requireAtLeastOne) {
      const atLeastOneCheckError = validationType(newOptions);
      setError(atLeastOneCheckError);
    }

    onChange(fieldName, newOptions);
  };

  const handleCheckboxChange = (option) => {
    setError("");
    const isOptionSelected = preSelectedOptions.some(
      (selectedOption) => selectedOption.id === option.id
    );

    const updatedOptions = isOptionSelected
      ? preSelectedOptions.filter(
          (selectedOption) => selectedOption.id !== option.id
        )
      : [...preSelectedOptions, option];

    updateOptions(updatedOptions);
  };

  const handleSelectAll = () => {
    const allSelected = options.every((option) =>
      preSelectedOptions.includes(option)
    );
    const updatedOptions = allSelected ? [] : [...options];

    updateOptions(updatedOptions);
  };

  const checkboxClass = `form-check-input remove-check-focus ${
    error ? "is-invalid" : ""
  }`;

  return (
    <div className={`mb-${isHorizontal ? "0" : "3"}`}>
      {label && (
        <label className='form-label'>
          {label}
          {requireAtLeastOne && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      <div>
        {requireSelectAll && (
          <div
            key='selectAll'
            className={`form-check  ${
              isHorizontal ? "form-check-inline" : "mb-2"
            }`}
          >
            <input
              type='checkbox'
              id='checkbox-all'
              className='form-check-input remove-check-focus'
              checked={
                options.length > 0 &&
                options.every((option) => preSelectedOptions.includes(option))
              }
              onChange={handleSelectAll}
            />
            <label htmlFor='checkbox-all'>{requireSelectAllLabel}</label>
          </div>
        )}
        {options.map((option) => (
          <div
            key={option.id}
            className={`form-check  ${
              isHorizontal ? "form-check-inline" : "mb-2"
            }`}
          >
            <input
              type='checkbox'
              className={checkboxClass}
              checked={preSelectedOptions.some(
                (selectedOption) => selectedOption.id === option.id
              )}
              onChange={() => handleCheckboxChange(option)}
            />
            <label className='form-check-label'>{option.label}</label>
          </div>
        ))}
      </div>
      {(error || validationErrorMessage) && (
        <div className='invalid-check'>{error || validationErrorMessage}</div>
      )}
    </div>
  );
};

CustomCheckbox.propTypes = {
  options: PropTypes.array.isRequired, // Pass an array of options with 'id', 'label', and 'isChecked' properties
  onChange: PropTypes.func.isRequired,
  isHorizontal: PropTypes.bool,
  requireAtLeastOne: PropTypes.bool,
  selectedOptions: PropTypes.array,
};

export default CustomCheckbox;
// // checkboxes usage
// const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState([
//   {
//     id: 1,
//     label: "Sun",
//   },
//   {
//     id: 2,
//     label: "Mon",
//   },
// ]);
// const [checkBoxOptions, setCheckBoxOptions] = useState([
//   { id: 1, label: "Sun" },
//   { id: 2, label: "Mon" },
//   { id: 3, label: "Tue" },
//   { id: 4, label: "Wed" },
//   { id: 5, label: "Thr" },
//   { id: 6, label: "Fri" },
//   { id: 7, label: "Sat" },
// ]);
// const handleCheckboxChange = (fieldName, updatedOptions) => {
//   setSelectedCheckboxOptions(updatedOptions);
//   handleInputChange(fieldName, selectedDropDownOptions);
// };
// <CustomCheckbox
//   label='Occurs'
//   fieldName='occurs'
//   requireSelectAll={false}
//   requireSelectAllLabel='All Days'
//   options={checkBoxOptions}
//   selectedOptions={selectedCheckboxOptions}
//   onChange={handleCheckboxChange}
//   isHorizontal={true}
//   requireAtLeastOne={true}
//   validationType={validateAtLeastOneCheck}
//   validationErrorMessage={formErrors["occurs"]}
// />;
// const handleInputChange = (fieldName, value) => {
//   setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
//   setFormErrors({}); // Reset all form errors when any input changes
// };
