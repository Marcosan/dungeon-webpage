export const ABOUT ={title: 'Acerca de',current:'about',   up:null,    left: null,     right: 'a',     down: 'home'};
export const A_PAGE={title: 'Página A', current:'a',       up:null,    left: 'about',  right: null,    down: 'C'};
export const B_PAGE={title: 'Página B', current:'b',       up:null,    left: null,     right: 'home',  down: null};
export const HOME  ={title: 'Home',     current:'home',    up:'about', left: 'b',      right: 'c',     down: null};
export const C_PAGE={title: 'Página C', current:'c',       up:null,    left: 'home',   right: 'd',     down: null};
export const D_PAGE={title: 'Página D', current:'d',       up:null,    left: 'c',      right: null,    down: null};

export const ALL_PAGES = [
	[null, ABOUT, A_PAGE, null],
	[B_PAGE, HOME, C_PAGE, D_PAGE],
]
// null		about	A		null
// B		home	C		D