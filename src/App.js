import * as React from "react";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import './Animations.css';
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import Home from "./pages/Home/HomePage";
import Controls from "./shared/Controls/Controls";

export default function App() {
	const navigate = useNavigate();
	return (
		<div>
			{/* <Controls navigate={navigate}/> */}
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="about" element={<AboutUsPage />} />
				<Route path="a" element={<PageA />} />
				<Route path="b" element={<PageB />} />
				<Route path="c" element={<PageC />} />
				<Route path="d" element={<PageD />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</div>
	);
}

function PageA() {
	return (
		<div>
            A
		</div>
	);
}
function PageB() {
	return (
		<div>
            B
		</div>
	);
}
function PageC() {
	return (
		<div>
            C
		</div>
	);
}
function PageD() {
	return (
		<div>
            D
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}
