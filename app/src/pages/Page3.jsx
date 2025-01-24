import React from "react";
import { useNavigate } from "react-router-dom";

// Function to go to Home page
const goToHome = () => {
	navigate("/");
};

const Page3 = () => {
	return (
		<>
			{/* Navigation Button */}
			<button
				onClick={goToHome}
				className="mt-8 px-6 py-6 bg-red-500 text-white text-2xl rounded-lg shadow-md font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all"
			>
				Go Back to Home
			</button>
		</>
	);
};

export default Page3;
