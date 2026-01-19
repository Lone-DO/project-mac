import type { Projects } from '@/lib/types';

export const STORE_CATEGORIES = [
	{ label: 'Discover', imgSrc: 'images/icons/star.svg' },
	{ label: 'Create', imgSrc: 'images/icons/create.svg' },
	{ label: 'Work', imgSrc: 'images/icons/paper-plane.svg' },
	{ label: 'Play', imgSrc: 'images/icons/rocket.svg' },
	{ label: 'Develop', imgSrc: 'images/icons/hammer.png' },
	{ label: 'Categories', imgSrc: 'images/icons/category.svg' },
	{ label: 'Updates', imgSrc: 'images/icons/download.svg', subLabel: '2' },
];

export const PROJECTS: Projects = [
	{
		label: 'Vue.js Applications',
		category: 'vue',
		items: [
			{
				name: 'Netflix Portfolio',
				description: 'Nuxt Portfolio Webapp that utilizes SSR, with a theme based on Netflix.',
				tools: ['Nuxt', 'Vue@3', 'Vercel', 'Turso', 'Tailwindcss', 'SQLite', 'Drizzle', 'DaisyUi', 'Pinia'],
				startDate: 'September 2025',
				endDate: '',
				imgSrc: 'images/projects/netflix.webp',
				bannerSrc: 'images/projects/netflix-banner.webp',
				links: [
					['Website', 'https://losovoj-portfolio.vercel.app/'],
					['Github', 'https://github.com/Lone-DO/project-netflix'],
				],
			},
			{
				name: 'Travel Dashboard Webapp',
				description: 'Digital Passport Application built using Nuxt, TypeScript, and tailwindcss for the frontend, and Drizzle + SQLite for the backend.',
				tools: ['Nuxt', 'Vue@3', 'Vercel', 'Turso', 'Tailwindcss', 'SQLite', 'Drizzle', 'DaisyUi', 'Pinia'],
				startDate: 'August 2025',
				endDate: 'Sep 2025',
				imgSrc: 'images/projects/passport.webp',
				bannerSrc: '',
				links: [
					['Website', 'https://reisen-dashboard.vercel.app/'],
					['Github', 'https://github.com/Lone-DO/project-nuxt-passport'],
				],
			},
			{
				name: 'Vögel - Web Book',
				description: 'Creative application based on the kinderbücher series \'Vögel\' in Germany',
				tools: ['Vue@3', 'SASS', 'Github Pages'],
				startDate: 'August 2025',
				endDate: 'September 2025',
				imgSrc: 'images/projects/vogel.webp',
				bannerSrc: '',
				links: [
					['Github', 'https://github.com/Lone-DO/project-vogel'],
					['Website', 'https://lone-do.github.io/project-vogel/'],
				],
			},
			{
				name: 'Zenless Zone Zero - Video Store WebApp',
				description: 'Fundamentals Project: Video Game UI (Vue3)',
				tools: ['Vue@3', 'Vite', 'Typescript', 'SASS'],
				startDate: 'May 2025',
				endDate: 'July 2025',
				imgSrc: 'images/projects/zzz.webp',
				bannerSrc: 'images/projects/zzz-banner.webp',
				links: [
					['Github', 'https://github.com/Lone-DO/project-zzz'],
					['Website', 'https://lone-do.github.io/project-zzz/'],
				],
			},
		],
	},
	{
		label: 'Angular.js Applications',
		category: 'angular',
		items: [
			{
				name: 'Ecommerce Application',
				description: 'Angular Ecommerce WebApp, Utilizing FakeAPI',
				tools: ['Angular@13.3.3', 'SASS'],
				startDate: 'August 01, 2025',
				endDate: 'August 31, 2025',
				imgSrc: 'images/projects/angular-ecommerce.webp',
				bannerSrc: '',
				links: [
					['Github', 'https://github.com/lone-do/ecommerce-angular'],
					['Website', 'https://lone-do.github.io/ecommerce-angular/'],
				],
			},
			{
				name: 'TODO Application',
				description: 'Basic Angular@20.1 Application for learning how the basics of how this framework ticks.',
				tools: ['Angular@20.0', 'Github Pages', 'Figma'],
				startDate: 'July 2025',
				endDate: 'July 2025',
				imgSrc: 'images/projects/angular-todo.webp',
				bannerSrc: '',
				links: [
					['Github', 'https://github.com/Lone-DO/todo-angular'],
					['Website', 'https://lone-do.github.io/todo-angular/'],
				],
			},
		],
	},
	{
		label: 'React.js Applications',
		category: 'react',
		items: [
			{
				name: 'Animal Crossing: Radio',
				description: 'Creative application that brings the daily soundtracks of Animal Crossing back. Able to choose smoothly between the user\'s desired Generation, from the hit classics like original Animal Crossing from GameCube, to City Folk from the WII U, and the latest New Leaf on the 3DS. Built with the MERN stack, the backend API utilizes MongoDB as its database.',
				tools: ['MERN Stack', 'SASS', 'jQuery'],
				startDate: 'October 2019',
				endDate: 'December 2019',
				imgSrc: 'images/projects/animal-crossing.webp',
				bannerSrc: 'images/projects/animal-crossing-fan-banner.webp',
				links: [
					['Website', 'https://lone-do.github.io/project-ac/'],
					['Github', 'https://github.com/lone-do/project-ac/'],
					['Fan Banner Credit', 'https://www.reddit.com/r/AnimalCrossing/comments/bbqiz3/heres_a_cool_banner_for_you_all/'],
				],
			},
			{
				name: '2019 Portfolio',
				description: 'Original Portfolio Website',
				tools: ['MERN Stack', 'SASS', 'MaterialCSS'],
				startDate: 'October 2019',
				endDate: 'December 2019',
				imgSrc: 'images/projects/2019.jpg',
				bannerSrc: 'images/projects/2019-banner.jpg',
				links: [
					['Website', 'https://lone-do.github.io/2019-portfolio/'],
					['Github', 'https://github.com/lone-do/2019-portfolio/'],
				],
			},
		],
	},
	{
		label: 'Video Games',
		category: 'gaming',
		items: [
			{
				name: 'Hytale',
				description: 'Community Mod Creator - TBA',
				tools: [],
				links: [
					['Website', 'https://hytale.com/'],
				],
				startDate: '',
				endDate: '',
				imgSrc: 'images/projects/hytale.webp',
				bannerSrc: 'images/projects/hytale-banner.webp',
			},
			{
				name: '7 Days To Die',
				description: 'Community Mod Assistant for MerqSquad',
				tools: ['.XML', 'Microsoft Visual Studio'],
				links: [
					['Github', 'https://github.com/MerQSquadGaming'],
					['Project', 'https://github.com/MerQSquadGaming/SinMod-7DTD-A17?tab=readme-ov-file'],
				],
				startDate: 'April 01, 2017',
				endDate: 'October 01, 2019',
				imgSrc: 'images/projects/7dtd.webp',
				bannerSrc: 'images/projects/7dtd-banner.webp',
			},
		],
	},
];
