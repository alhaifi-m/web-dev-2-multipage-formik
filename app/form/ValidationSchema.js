import * as Yup from "yup";

// Step 1: Personal Information Validation Schema

export const personalInformationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must not exceed 50 characters"),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  occupation: Yup.string().required("Occupation is required"),
});

// Step 2: Contact Information Validation Schema
export const contactInformationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
    country: Yup.string()
        .required("Country is required"),
})