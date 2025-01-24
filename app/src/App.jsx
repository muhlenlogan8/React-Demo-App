import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Page2" element={<Page2 />} />
			<Route path="/Page3" element={<Page3 />} />
		</Routes>
	);
};

export default App;