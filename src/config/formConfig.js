import { roleTypes} from "../data/mockData";
export const formConfig = {
  login: {
    fields: [
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "",
        errorMessage: "Email is required",
        disabled:false
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        required: true,
        placeholder: "",
        errorMessage: "Password is required",
        disabled:false
      }
    ]
  },
  user: {
    fields: [
      {
        name: "firstname",
        label: "First Name",
        type: "text",
        required: true,
        placeholder: "",
        maxLength: 50,
        errorMessage: "First Name is required",
        disabled:false
      },
      {
        name: "lastname",
        label: "Last Name",
        type: "text",
        required: true,
        placeholder: "",
        maxLength: 50,
        errorMessage: "Last Name is required",
        disabled:false
      },
      {
        name: "emailId",
        label: "Email Id",
        type: "email",
        required: true,
        placeholder: "",
        maxLength: 100,
        errorMessage: "Email Id is required",
        disabled:false
      },
      {
        name: "contactNumber",
        label: "Contact Number",
        type: "text",
        required: true,
        placeholder: "",
        minLength: 9,
        maxLength:10,
        errorMessage: "Contact number is required",
        disabled:false
      },
      {
        name: "role",
        label: "Roles",
        type: "select",
        required: true,
        placeholder: "",
        errorMessage: "Role Type is required",
        options: roleTypes,
        disabled:false
      }
    ]
  }
};
