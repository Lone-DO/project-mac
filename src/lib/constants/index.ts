import type { DockApp, WindowConfig } from '@/lib/types';

export const navLinks = [
	{ label: 'Portfolio', link: '/' },
	{ label: 'Contact', link: '/' },
	{ label: 'Projects', link: '/' },
];

export const controlLinks = [
	{ label: 'wifi', imgSrc: 'icons/wifi.svg' },
	{ label: 'search', imgSrc: 'icons/search.svg' },
	{ label: 'user', imgSrc: 'icons/user.svg' },
	{ label: 'mode', imgSrc: 'icons/mode.svg' },
];

export const FONT_WEIGHTS = {
	subtitle: { min: 100, max: 900, default: 100 },
	title: { min: 400, max: 900, default: 400 },
};

export const DEFAULT_TOOLTIP_SHOW: (keyof HTMLElementEventMap)[] = ['mouseenter', 'focus'];
export const DEFAULT_TOOLTIP_HIDE: (keyof HTMLElementEventMap)[] = ['mouseleave', 'blur'];

export const DOCK_APPS: DockApp[] = [
	{ id: 'finder', label: 'Portfolio', imgSrc: 'app-icons/finder.png', canOpen: true },
	{ id: 'safari', label: 'Articles', imgSrc: 'app-icons/safari.png', canOpen: true },
	{ id: 'photos', label: 'Gallery', imgSrc: 'app-icons/photos.png', canOpen: true },
	{ id: 'contact', label: 'Contact', imgSrc: 'app-icons/contact.png', canOpen: true },
	{ id: 'terminal', label: 'Skills', imgSrc: 'app-icons/terminal.png', canOpen: true },
	{ id: 'trash', label: 'Archive', imgSrc: 'app-icons/trash.png', canOpen: false },
];

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG: WindowConfig = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};
