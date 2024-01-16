import { useState } from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import pointer from "./images/pointer.svg"

function App() {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 200) {
				setShowScroll(true);
			} else {
				setShowScroll(false);
			}
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<Navbar />
			<Routes>
				<Route index path="/car-show/" element={<Home />} />
				<Route path="/car-show/about" element={<About />} />
				<Route path="/car-show/vehicles" element={<Vehicles />} />
				<Route path="/car-show/contact" element={<Contact />} />
				<Route path="/car-show/*" element={<NotFound />} />
			</Routes>
			{showScroll && (
				<div>
					<button className="scroll-top" onClick={scrollToTop}>Back to Top</button>
				</div>
			)}
			<Footer />
		</>
	);
}

export default App;
