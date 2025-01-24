import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Page2 = () => {
	const [inputValue, setInputValue] = useState(""); // State to track the input value
	const [userTyped, setUserTyped] = useState(false); // State to track if the user has typed something
    const location = useLocation(); // Hook to access the state passed via navigate
	const count = location.state?.count ?? 0; // Retrieve the count value or default to 0
	const navigate = useNavigate(); // Hook to navigate to different pages

	// Function to go to Home page
	const goToHome = () => {
		navigate("/");
	};

	// Handle input changes
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	// Function to check if the user has typed something
	useEffect(() => {
		if (inputValue === "") {
			setUserTyped(false);
		} else {
			setUserTyped(true);
		}
	}, [inputValue]);

	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
				{/* Count From Home Page */}
				<p className="text-lg font-semibold">Count From Home: {count}</p>
				{/* Input Field */}
				<input
					type="text"
					placeholder="Type something..."
					value={inputValue}
					onChange={handleInputChange}
					className="mt-6 px-4 py-2 rounded-md border border-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-400 transition-all"
				/>
				<p className="mt-4 text-lg font-semibold">
					{userTyped ? "You Typed: " + inputValue : "Type Something Above"}
				</p>

				{/* Navigation Button */}
				<button
					onClick={goToHome}
					className="mt-8 px-6 py-6 bg-red-500 text-white text-2xl rounded-lg shadow-md font-bold hover:bg-red-600 focus:outline-hidden focus:ring-2 focus:ring-red-300 transition-all"
				>
					Go Back to Home
				</button>
			</div>
		</>
	);
};

export default Page2;
