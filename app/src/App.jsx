import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Page2" element={<Page2 />} />
		</Routes>
	);
};

export default App;
