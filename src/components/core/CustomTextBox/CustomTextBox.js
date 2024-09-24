import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CustomTextBox.css";
import { eyeOpen, eyeSlash } from "../../core/Icons";

const CustomTextBox = ({
  type,
  label,
  labelClass,
  placeholder,
  icon,
  value,
  onChange,
  validationType,
  validationErrorMessage,
  isRemoveBorder,
}) => {
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInputChange = (e) => {
    setError("");
    const inputValue = e.target.value;
    let returnedErrorMessage = validationType
      ? validationType(inputValue)
      : null;

    if (!returnedErrorMessage || returnedErrorMessage.length === 0) {
      setError("");
    } else {
      setError(returnedErrorMessage || validationErrorMessage);
    }
    onChange(inputValue);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType =
    type === "password" && !isPasswordVisible ? "password" : "text";

  const inputClasses = `form-control remove-input-focus ${
    isRemoveBorder && "rounded-0 border-0 border-bottom px-0"
  } ${error || validationErrorMessage ? "is-invalid" : ""}`;

  return (
    <div className='mb-3'>
      {label && (
        <label className={`form-label ${labelClass}`}>
          {label}
          {validationType && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      <div className='input-group'>
        {icon && (
          <span
            className={`input-group-text ${
              isRemoveBorder && "rounded-0 border-0 border-bottom"
            }`}
          >
            <img src={icon} alt='icon' width='20px' height='20px' />
          </span>
        )}
        <input
          type={inputType}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        {type === "password" && (
          <button
            type='button'
            className={`btn ${
              isRemoveBorder
                ? "rounded-0 border-0 border-bottom"
                : "btn-outline-secondary"
            }`}
            onClick={togglePasswordVisibility}
          >
            <img
              src={isPasswordVisible ? eyeSlash : eyeOpen}
              width='22px'
              height='20px'
            />
          </button>
        )}
        {(error || validationErrorMessage) && (
          <div className='invalid-feedback'>
            {error || validationErrorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

CustomTextBox.propTypes = {
  type: PropTypes.oneOf(["text", "password", "number", "email"]).isRequired,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  validationType: PropTypes.func,
};

export default CustomTextBox;

// const { type, passwordVisibility, handlePasswordVisibility } =
//   usePasswordToggler();
// const handleInputChange = (fieldName, value) => {
//   setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
//   setFormErrors({}); // Reset all form errors when any input changes
// };
// <CustomTextBox
// type='text'
// label='Username'
// labelClass: 'fw-bold',
// placeholder='Enter your username'
// value={formData.username}
// onChange={(value) => handleInputChange("username", value)}
// validationType={validateUsername}
// validationErrorMessage={formErrors["username"]}
// isRemoveBorder={true}
// />
// <CustomTextBox
// type='password'
// label='Password'
// labelClass: 'fw-bold',
// placeholder='Enter your password'
// value={formData.password}
// onChange={(value) => handleInputChange("password", value)}
// validationType={validatePassword}
// validationErrorMessage={formErrors["password"]}
// isRemoveBorder={true}
// />
// <CustomTextBox
// type='email'
// label='Email'
// labelClass: 'fw-bold',
// placeholder='Enter your email'
// value={formData.email}
// onChange={(value) => handleInputChange("email", value)}
// validationType={validateEmail}
// icon={eyeOpen}
// validationErrorMessage={formErrors["email"]}
// isRemoveBorder={true}
// />
