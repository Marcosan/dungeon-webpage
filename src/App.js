import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import './Animations.css';
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import Home from "./pages/Home/HomePage";
import { getObjectPageByPath } from "./services/HandlerControls";
import Controls from "./shared/Controls/Controls";

export default function App() {
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
	const navigate = useNavigate();
	const [ toPage, setToPage ] = useState('');
	const [ classToPage, setClassToPage ] = useState('');
	const [ objectPage, setObjectPage ] = useState();
	
	const pageRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		onInit();
	}, []);

	const onInit = () => {
		setObjectPage(getObjectPageByPath(location.pathname));
		setTimeout(() => {
			if (location?.state?.classToPage?.length > 0) {
				pageRef.current.classList.remove(location.state.classToPage);
			}
		}, 200);
	}

	const onTransitionEnd = () => {
		if (toPage?.length > 0) {
			navigate(toPage, {
				state: {
					classToPage: classToPage,
				}
			});
		}
	}

	const onPressControl = (obj) => {
		setClassToPage(obj.animClassToPage);
		setToPage(obj.toPageTmp);
		pageRef.current.classList.toggle(obj.animClass);
	}
	
	return (
		<div ref={pageRef} onTransitionEnd={onTransitionEnd}
		className={`page-container ${location?.state?.classToPage?.length > 0 ? location.state.classToPage : ''}`} style={{}}>
			<Controls objectPage={objectPage}
				onPressControlHandler={onPressControl}/>
			<div style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				backgroundColor: 'aqua',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				fontSize: '50px',
			}}>PAGE A</div>
		</div>
	);
}
function PageB() {
	const navigate = useNavigate();
	const [ toPage, setToPage ] = useState('');
	const [ classToPage, setClassToPage ] = useState('');
	const [ objectPage, setObjectPage ] = useState();
	
	const pageRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		onInit();
	}, []);

	const onInit = () => {
		setObjectPage(getObjectPageByPath(location.pathname));
		setTimeout(() => {
			if (location?.state?.classToPage?.length > 0) {
				pageRef.current.classList.remove(location.state.classToPage);
			}
		}, 200);
	}

	const onTransitionEnd = () => {
		if (toPage?.length > 0) {
			navigate(toPage, {
				state: {
					classToPage: classToPage,
				}
			});
		}
	}

	const onPressControl = (obj) => {
		setClassToPage(obj.animClassToPage);
		setToPage(obj.toPageTmp);
		pageRef.current.classList.toggle(obj.animClass);
	}
	
	return (
		<div ref={pageRef} onTransitionEnd={onTransitionEnd}
		className={`page-container ${location?.state?.classToPage?.length > 0 ? location.state.classToPage : ''}`} style={{}}>
			<Controls objectPage={objectPage}
				onPressControlHandler={onPressControl}/>
			<div style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				backgroundColor: 'aqua',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				fontSize: '50px',
			}}>PAGE B</div>
		</div>
	);
}
function PageC() {
	const navigate = useNavigate();
	const [ toPage, setToPage ] = useState('');
	const [ classToPage, setClassToPage ] = useState('');
	const [ objectPage, setObjectPage ] = useState();
	
	const pageRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		onInit();
	}, []);

	const onInit = () => {
		setObjectPage(getObjectPageByPath(location.pathname));
		setTimeout(() => {
			if (location?.state?.classToPage?.length > 0) {
				pageRef.current.classList.remove(location.state.classToPage);
			}
		}, 200);
	}

	const onTransitionEnd = () => {
		if (toPage?.length > 0) {
			navigate(toPage, {
				state: {
					classToPage: classToPage,
				}
			});
		}
	}

	const onPressControl = (obj) => {
		setClassToPage(obj.animClassToPage);
		setToPage(obj.toPageTmp);
		pageRef.current.classList.toggle(obj.animClass);
	}
	
	return (
		<div ref={pageRef} onTransitionEnd={onTransitionEnd}
		className={`page-container ${location?.state?.classToPage?.length > 0 ? location.state.classToPage : ''}`} style={{}}>
			<Controls objectPage={objectPage}
				onPressControlHandler={onPressControl}/>
			<div style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				backgroundColor: 'aqua',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				fontSize: '50px',
			}}>PAGE C</div>
		</div>
	);
}
function PageD() {
	const navigate = useNavigate();
	const [ toPage, setToPage ] = useState('');
	const [ classToPage, setClassToPage ] = useState('');
	const [ objectPage, setObjectPage ] = useState();
	
	const pageRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		onInit();
	}, []);

	const onInit = () => {
		setObjectPage(getObjectPageByPath(location.pathname));
		setTimeout(() => {
			if (location?.state?.classToPage?.length > 0) {
				pageRef.current.classList.remove(location.state.classToPage);
			}
		}, 200);
	}

	const onTransitionEnd = () => {
		if (toPage?.length > 0) {
			navigate(toPage, {
				state: {
					classToPage: classToPage,
				}
			});
		}
	}

	const onPressControl = (obj) => {
		setClassToPage(obj.animClassToPage);
		setToPage(obj.toPageTmp);
		pageRef.current.classList.toggle(obj.animClass);
	}
	
	return (
		<div ref={pageRef} onTransitionEnd={onTransitionEnd}
		className={`page-container ${location?.state?.classToPage?.length > 0 ? location.state.classToPage : ''}`} style={{}}>
			<Controls objectPage={objectPage}
				onPressControlHandler={onPressControl}/>
			<div style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				backgroundColor: 'aqua',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				fontSize: '50px',
			}}>PAGE D</div>
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
