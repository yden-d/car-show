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
			<Routes basename="/car-show">
				<Route index path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="vehicles" element={<Vehicles />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
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
