import { ABOUT, A_PAGE, B_PAGE, C_PAGE, D_PAGE, HOME } from "../data/DungeonMap";

export function getPageNameByKey(namePage) {
	switch (namePage) {
		case 'home':
			return '/';
		case 'about':
			return '/about';
		case 'a':
			return '/a';
		case 'b':
			return '/b';
		case 'c':
			return '/c';
		case 'd':
			return '/d';
		default:
			break;
	}
}

export function getObjectPageByPath(path) {
	switch (path) {
		case '/':
			return HOME;
		case '/about':
			return ABOUT;
		case '/a':
			return A_PAGE;
		case '/b':
			return B_PAGE;
		case '/c':
			return C_PAGE;
		case '/d':
			return D_PAGE;
		default:
			break;
	}
}

export function getClassByDirection(type, direction) {
	// switch (direction) {
	// 	case 'up':
	// 		animClass = 'anim-change-page-up';
	// 		setToPage(getPageNameByKey(objectPage.up));
	// 		break;
	// 	case 'down':
	// 		animClass = 'anim-change-page-up';
	// 		setToPage(getPageNameByKey(objectPage.down));
	// 		break;
	// 	case 'left':
	// 		animClass = 'anim-change-page-up';
	// 		setToPage(getPageNameByKey(objectPage.left));
	// 		break;
	// 	case 'right':
	// 		animClass = 'anim-change-page-up';
	// 		setToPage(getPageNameByKey(objectPage.right));
	// 		break;
	// 	default:
	// 		break;
	// }
}