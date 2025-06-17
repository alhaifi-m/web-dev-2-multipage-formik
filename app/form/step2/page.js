"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { useFormContext } from "../FormContext";
import { contactInformationSchema } from "../ValidationSchema";

const Step2 = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6"> Step2: Contact Information </h1>
      <Formik
        initialValues={{
          email: formData.email || "",
          phone: formData.phone || "",
          country: formData.country || "",
        }}
        validationSchema={contactInformationSchema}
        onSubmit={(values) => {
          // Update form data in context
          setFormData({
            ...formData,
            ...values,
          });
          // Navigate to the next step
          router.push("/form/step3");
        }}
      >
        <Form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block mb-1">Email</label>
            <Field
              type="email"
              name="email"
              className="border rounded-md p-2 w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          {/* Phone Input */}
          <div>
            <label className="block mb-1">Phone</label>
            <Field
              type="tel"
              name="phone"
              className="border rounded-md p-2 w-full"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
          </div>
          {/* Country Input */}
          <div>
            <label className="block mb-1">Country</label>
            <Field
              type="text"
              name="country"
              className="border rounded-md p-2 w-full"
            />
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Back and Next Button */}
          <div className="flex flex-row justify-between">
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => router.push("/form/step1")}
            >
              Back
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Step2;
