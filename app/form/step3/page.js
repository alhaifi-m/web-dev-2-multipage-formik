"use client";
import { useFormContext } from "../FormContext";
import { useRouter } from "next/navigation";

const Step3 = () => {
  const { formData } = useFormContext();
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = () => {
    // Here you can handle the final submission of the form data
     alert('Submitted:\n' + JSON.stringify(formData, null, 2));
    // Redirect to a success page or show a success message
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Step 3: Review Your Information
      </h1>
      {/* Display All Form Data */}
      <div className="space-y-4 mb-6">
        <div>
          <strong>Name:</strong> {formData.name}
        </div>
        <div>
          <strong>Age:</strong> {formData.age}
        </div>
        <div>
          <strong>Gender:</strong> {formData.gender}
        </div>
        <div>
          <strong>Occupation:</strong> {formData.occupation}
        </div>
        <div>
          <strong>Email:</strong> {formData.email}
        </div>
        <div>
          <strong>Phone:</strong> {formData.phone}
        </div>
        <div>
          <strong>Country:</strong> {formData.country}
        </div>
      </div>
      {/* Back and Submit Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => router.push("/form/step2")}
          className="bg-gray-300 px-4 py-2 rounded-b-lg hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-b-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
