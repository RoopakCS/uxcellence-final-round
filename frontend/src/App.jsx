import "./App.css";
import LandingNav from "./components/LandingNav";
import Forms from "./pages/Forms";
import Portfolio from "./pages/Portfolio";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingNav />} />
				<Route path="/form" element={<Forms />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
