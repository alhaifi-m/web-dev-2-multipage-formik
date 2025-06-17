"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { useFormContext } from "../FormContext";
import { personalInformationSchema } from "../ValidationSchema";

const Step1 = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">
        Step 1: Personal Information
      </h1>
      <Formik
        initialValues={{
          name: formData.name || "",
          age: formData.age || "",
          gender: formData.gender || "",
          occupation: formData.occupation || "",
        }}
        validationSchema={personalInformationSchema}
        onSubmit={(values) => {
          // Update form data in context
          setFormData({
            ...formData,
            ...values,
          });
          // Navigate to the next step
          router.push("/form/step2");
        }}
      >
        <Form className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block mb-1">Name</label>
            <Field
              type="text"
              name="name"
              className="border rounded-md p-2 w-full"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Age Input */}
          <div>
            <label className="block mb-1">Age</label>
            <Field
              type="number"
              name="age"
              className="border rounded-md p-2 w-full"
            />
            <ErrorMessage name="age" component="div" className="text-red-500" />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1">Gender</label>
            <Field
              as="select"
              name="gender"
              className="border rounded-md p-2 w-full"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Occupation Input */}
          <div>
            <label className="block mb-1">Occupation</label>
            <Field
              type="text"
              name="occupation"
              className="border rounded-md p-2 w-full"
            />
            <ErrorMessage
              name="occupation"
              component="div"
              className="text-red-500"
            />
          </div>
          {/* Next Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Step1;
