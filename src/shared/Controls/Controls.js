import { faChevronDown, faChevronLeft, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import './controls.css'
import { getPageNameByKey } from "../../services/HandlerControls";

export default function Controls(props) {
	const { objectPage, onPressControlHandler } = props;

	const onPressControl = (direction) => {
		let toPageTmp = '';
		let animClass = '';
		let animClassToPage = '';
		switch (direction) {
			case 'up':
				animClass = 'anim-change-page-up';
				animClassToPage = 'offset-down';
				toPageTmp = getPageNameByKey(objectPage.up);
				break;
			case 'down':
				animClass = 'anim-change-page-down';
				animClassToPage = 'offset-up';
				toPageTmp = getPageNameByKey(objectPage.down);
				break;
			case 'left':
				animClass = 'anim-change-page-left';
				animClassToPage = 'offset-right';
				toPageTmp = getPageNameByKey(objectPage.left);
				break;
			case 'right':
				animClass = 'anim-change-page-right';
				animClassToPage = 'offset-left';
				toPageTmp = getPageNameByKey(objectPage.right);
				break;
			default:
				break;
		}
		if (toPageTmp?.length > 0) {
			onPressControlHandler({
				animClass,
				animClassToPage,
				toPageTmp,
			});
		} else {
			onPressControlHandler(null);
		}
	}
	
	return (
		<div className="wrapper">
			<div className={`up ${objectPage?.up != null ? '' : ' deactivate'}`} onClick={() => onPressControl('up')}>
				<FontAwesomeIcon className="icon-dir" icon={faChevronUp}/>
			</div>
			<div className={`down ${objectPage?.down != null ? '' : ' deactivate'}`} onClick={() => onPressControl('down')}>
				<FontAwesomeIcon className="icon-dir" icon={faChevronDown}/>
			</div>
			<div className={`left ${objectPage?.left != null ? '' : ' deactivate'}`} onClick={() => onPressControl('left')}>
				<FontAwesomeIcon className="icon-dir" icon={faChevronLeft}/>
			</div>
			<div className={`right ${objectPage?.right != null ? '' : ' deactivate'}`} onClick={() => onPressControl('right')}>
				<FontAwesomeIcon className="icon-dir" icon={faChevronRight}/>
			</div>
		</div>
	);
}