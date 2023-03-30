import React, { useEffect, useRef, useState } from 'react';
import './home.css';
// import 'materialize-css/dist/css/materialize.min.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';
import Controls from '../../shared/Controls/Controls';
import { getObjectPageByPath, getPageNameByKey } from '../../services/HandlerControls';

function Home(props) {
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
			if (location.state.classToPage?.length > 0) {
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

	const onPressControl = (direction) => {
		let toPageTmp = '';
		let animClass = '';
		let animClassToPage = '';
		switch (direction) {
			case 'up':
				animClass = 'anim-change-page-up';
				animClassToPage = 'offset-up';
				toPageTmp = getPageNameByKey(objectPage.up);
				break;
			case 'down':
				animClass = 'anim-change-page-down';
				animClassToPage = 'offset-up';
				toPageTmp = getPageNameByKey(objectPage.down);
				break;
			case 'left':
				animClass = 'anim-change-page-left';
				animClassToPage = 'offset-up';
				toPageTmp = getPageNameByKey(objectPage.left);
				break;
			case 'right':
				animClass = 'anim-change-page-right';
				animClassToPage = 'offset-up';
				toPageTmp = getPageNameByKey(objectPage.right);
				break;
			default:
				break;
		}
		setClassToPage(animClassToPage);
		setToPage(toPageTmp);
		pageRef.current.classList.toggle(animClass);
	}
	
	return (
		<div ref={pageRef} onTransitionEnd={onTransitionEnd}
		className={`page-container ${location.state.classToPage?.length > 0 ? location.state.classToPage : ''}`} style={{}}>
			<Controls navigate={navigate}
				onUp={() => onPressControl('up')}
				onDown={() => onPressControl('down')}
				onLeft={() => onPressControl('left')}
				onRight={() => onPressControl('right')}/>
			<div style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				backgroundColor: 'aqua',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				fontSize: '50px',
			}}>HOME</div>
		</div>
	);
}


export default Home;