import { faChevronDown, faChevronLeft, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom'
import * as React from "react";
import './controls.css'
import { useEffect } from "react";

export default function Controls(props) {
    const { navigate, onUp, onDown, onLeft, onRight } = props;
    const location = useLocation();
     useEffect(() => {
        // console.log(location.pathname);
     }, []);

	const onTransitionEnd = () => {
		console.log('sdfsdfds');
		navigate('');
	}

    const onClick = (type) => {}
    
	return (
		<div className="wrapper">
			<div className="up" onClick={onUp}>
				<FontAwesomeIcon className="icon-dir" icon={faChevronUp}/>
			</div>
			<div className="down" onClick={onDown}>
				<FontAwesomeIcon className="icon-dir" icon={faChevronDown}/>
			</div>
			<div className="left" onClick={onLeft}>
				<FontAwesomeIcon className="icon-dir" icon={faChevronLeft}/>
			</div>
			<div className="right" onClick={onRight}>
				<FontAwesomeIcon className="icon-dir" icon={faChevronRight}/>
			</div>
		</div>
	);
}