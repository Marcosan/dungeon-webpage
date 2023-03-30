import React, { useEffect, useRef, useState } from 'react';
import './aboutus.css';
// import 'materialize-css/dist/css/materialize.min.css';
import { useLocation, useNavigate } from "react-router-dom";
import Controls from '../../shared/Controls/Controls';
import { getObjectPageByPath } from '../../services/HandlerControls';

function AboutUsPage(props) {
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
		if (!obj) return;
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
			}}>ABOUT US</div>
		</div>
	);
}


export default AboutUsPage;