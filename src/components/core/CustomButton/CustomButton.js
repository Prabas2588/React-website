import React from "react";

const CustomButton = ({
  type,
  classType,
  onClick,
  text,
  radius,
  width,
  isSpinner = false,
  spinnerText = "Loading...",
  inlineButtonIcon,
}) => {
  const buttonClass = `btn ${classType} ${radius}`;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ width }}
      className={buttonClass}
      disabled={isSpinner}
    >
      {isSpinner && (
        <span
          className='spinner-border spinner-border-sm'
          role='status'
          aria-hidden='true'
        ></span>
      )}
      {inlineButtonIcon && (
        <img
          src={inlineButtonIcon}
          alt='button-icon'
          width='20px'
          height='21px'
          className='mx-2'
        />
      )}
      {isSpinner ? ` ${spinnerText}` : text}
    </button>
  );
};

export default CustomButton;
{
  /* <CustomButton
  type='submit'
  classType='btn-primary mb-4'
  onClick={redirectTo}
  text='Sign In'
  radius='rounded-pill'
  width='100%'
  isSpinner={spinner}
  spinnerText={spinner ? "Checking..." : ""}
/>; */
}
