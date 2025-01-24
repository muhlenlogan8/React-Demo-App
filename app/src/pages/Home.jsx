import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [count, setCount] = useState(0); // State to track the count
	const [message, setMessage] = useState(""); // State to track the message
	const navigate = useNavigate(); // Hook to navigate to different pages

	// Function to increment count
	const increment = () => {
		setCount(count + 1);
	};

	// Function to reset count
	const reset = () => {
		setCount(0);
	};

	// Function to go to page2
	const goToPage2 = () => {
		navigate("/Page2", { state: { count } });
	};

	// Function to go to page3
	const goToPage3 = () => {
		navigate("/Page3");
	};

	// Function to change message based on count
	useEffect(() => {
		if (count === 0) {
			setMessage("Start Counting!");
		} else if (count > 5 && count < 10) {
			setMessage("Keep Counting!!");
		} else if (count >= 10 && count < 20) {
			setMessage("Good God Keep Counting!!!");
		} else if (count >= 20 && count < 30) {
			setMessage("KEEEEEEEEEEP COUNTING!!!!!!!!");
		} else if (count >= 30) {
			setMessage("done.");
		}
	}, [count]); // Run this effect whenever count changes

	// Can do }, []); to run this effect only once when the component mounts (Good for fetching leaderboard data initially)

	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-200">
				{/* Display the message and count */}
				<div className="text-center">
					<h1 className="text-4xl font-extrabold">Play With The Counter</h1>
					<p className="mt-8 text-lg font-bold">{message}</p>
					<p className="mt-4 text-lg font-bold">{count}</p>
				</div>

				{/* Buttons to increment and reset count */}
				<div className="flex flex-row items-center justify-center space-x-4">
					<button
						onClick={increment}
						className={`mt-4 px-3 py-3 ${
							count >= 30 ? "bg-gray-500" : "bg-blue-500"
						} text-white rounded-lg shadow-md font-semibold hover:${
							count >= 30 ? "bg-gray-500" : "bg-blue-600"
						} focus:outline-hidden focus:ring-2 focus:ring-${
							count >= 30 ? "gray" : "blue"
						}-300 transition-all`}
						disabled={count >= 30}
					>
						Increment
					</button>
					<button
						onClick={reset}
						className="mt-4 px-3 py-3 bg-green-500 text-white rounded-lg shadow-md font-semibold hover:bg-green-600 focus:outline-hidden focus:ring-2 focus:ring-green-300 transition-all"
					>
						Reset
					</button>
				</div>

				{/* Button to go to page2 */}
				<button
					onClick={goToPage2}
					className="mt-4 px-4 py-3 bg-purple-500 text-white text-2xl rounded-lg shadow-md font-bold hover:bg-purple-600 focus:outline-hidden focus:ring-2 focus:ring-purple-300 transition-all"
				>
					Go To Page 2
				</button>

				{/* Button to go to page3 */}
				<button
					onClick={goToPage3}
					className="mt-4 px-4 py-3 bg-orange-500 text-white text-2xl rounded-lg shadow-md font-bold hover:bg-orange-600 focus:outline-hidden focus:ring-2 focus:ring-orange-300 transition-all"
				>
					Go To Page 3
				</button>
			</div>
		</>
	);
};

export default Home;
