import * as yup from 'yup';

export const shouldRenderHeader = (path) => {
    return ['/forgot-password'].includes(path)
}
export const generateUniqueNumber=(input) =>{
    const randomNum = Math.floor(Math.random() * 90000) + 10000; // Generate a random number between 10000 and 99999
    const uniqueNum = (randomNum + input).toString().slice(-5); // Add the input to the random number and take the last 5 digits
    return uniqueNum;
}

export const getYupSchema = (fields) => {
  const shape = {};

  fields.forEach(field => {
      if (field.required) {
          switch (field.type) {
              case 'text':
                  shape[field.name] = yup.string()
                      .matches(/^[a-zA-Z0-9&$@_\- ]*$/, `${field.label} can only contain letters, numbers, $, &, @, _, -, and spaces`)
                      .max(field.maxLength, `${field.label} must be at most ${field.maxLength} characters`)
                      .required(field.errorMessage);
                  break;

              case 'number':
                  shape[field.name] = yup.number()
                      .positive(`${field.label} must be a positive number`)
                      .integer(`${field.label} must be an integer`)
                      .typeError(`${field.label} must be a number`)
                      .max(9999999999, `${field.label} must be at most 10 digits`)
                      .required(field.errorMessage);
                  break;

              case 'email':
                  shape[field.name] = yup.string()
                      .email(`${field.label} must be a valid email address`)
                      .required(field.errorMessage);
                  break;

              case 'select':
                  shape[field.name] = yup.string()
                      .required(field.errorMessage);
                  break;

              case 'password':
                  shape[field.name] = yup.string()
                      .min(6, `${field.label} must be at least 6 characters`)
                      .required(field.errorMessage);
                  break;

              case 'tel':
                  shape[field.name] = yup.string()
                      .matches(/^\+?[1-9]\d{1,14}$/, `${field.label} must be a valid phone number`)
                      .required(field.errorMessage);
                  break;

              case 'date':
                  shape[field.name] = yup.date()
                      .required(field.errorMessage);
                  break;

              default:
                  shape[field.name] = yup.string().required(field.errorMessage);
                  break;
          }
      }
  });

  return yup.object().shape(shape);
};