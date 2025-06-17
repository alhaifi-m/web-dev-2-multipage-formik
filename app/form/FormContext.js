"use client";
import { createContext, useContext, useState } from "react";

// Create a context for the form data to be shared across steps
const FormContext = createContext();

// Custom hook to use the FormContext
export const useFormContext = () => useContext(FormContext)

// Provider component to wrap around the form steps and share form state
export const FormProvider = ({children}) => {
// Intialize shared state for form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    email: "",
    phone: "",
    country: ""
  })

// Provide the form data and updater function to all children
    return (
        <FormContext.Provider value={{ formData, setFormData }}>
        {children}
        </FormContext.Provider>
    );
}
