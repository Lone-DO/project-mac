import type { DockApp, NavLink } from '@/lib/types';

export * from './app-store.ts';

export const navLinks: NavLink[] = [
	{ label: 'Contact', id: 'contact' },
	{ label: 'Projects', id: 'store' },
	{ label: 'Resume', id: 'resume' },
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
	{ id: 'store', label: 'Projects', imgSrc: 'app-icons/app-store.svg', canOpen: true },
	{ id: 'finder', label: 'Portfolio', imgSrc: 'app-icons/finder.png', canOpen: true },
	{ id: 'photos', label: 'Gallery', imgSrc: 'app-icons/photos.png', canOpen: true },
	{ id: 'contact', label: 'Contact', imgSrc: 'app-icons/contact.png', canOpen: true },
	{ id: 'terminal', label: 'Skills', imgSrc: 'app-icons/terminal.png', canOpen: true },
	{ id: 'trash', label: 'Archive', imgSrc: 'app-icons/trash.png', canOpen: false },
];

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	store: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	/** Others */
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	trash: { isOpen: false, zIndex: null, data: null },
};
export const TECH_STACK = [
	{
		category: 'Frontend',
		items: ['Vue.js', 'Angular.js', 'React.js', 'Nuxt.js', 'TypeScript'],
	},
	{
		category: 'Styling',
		items: ['Tailwind CSS', 'Sass', 'CSS'],
	},
	{
		category: 'Backend',
		items: ['Node.js', 'Express', 'NuxtJs', 'SQL'],
	},
	{
		category: 'Database',
		items: ['MongoDB', 'Supabase', 'Turso'],
	},
	{
		category: 'Dev Tools',
		items: ['Git', 'GitHub', 'Docker'],
	},
];
