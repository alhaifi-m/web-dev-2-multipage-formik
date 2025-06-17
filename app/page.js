"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-10">Welcome to the Multi-step Form Example</h1>
      <button
        onClick={() => router.push("/form/step1")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Start Form
      </button>
    </div>
  );
};

export default Home;
