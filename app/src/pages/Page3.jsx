import React from "react";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
	const navigate = useNavigate(); // Hook to navigate to different pages

	// Function to go to Home page
	const goToHome = () => {
		navigate("/");
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen space-y-2 bg-gray-100">
			<h1 className="text-xl font-bold">
				RGB vs OKLCH Color Comparison (Orange)
			</h1>

			{/* RGB Color */}
			<div className="space-y-2">
				<button className="bg-rgb-orange text-white px-6 py-2 rounded-md shadow-md">
					RGB Orange
				</button>
			</div>

			{/* OKLCH Color */}
			<div className="space-y-2">
				<button className="bg-oklch-orange text-white px-6 py-2 rounded-md shadow-md">
					OKLCH Orange
				</button>
			</div>

			{/* Navigation Button */}
			<button
				onClick={goToHome}
				className="mt-8 px-6 py-6 bg-red-500 text-white text-2xl rounded-lg shadow-md font-bold hover:bg-red-600 focus:outline-hidden focus:ring-2 focus:ring-red-300 transition-all"
			>
				Go Back to Home
			</button>
		</div>
	);
};

export default Page3;
