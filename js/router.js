import bookApp from './views/book-app.cmp.js';
import homePage from './views/home-page.cmp.js';
import aboutPage, { aboutTeam, aboutServices } from './views/about-page.cmp.js';
import bookDetailsCmp from './cmps/book-details.cmp.js';

const routes = [
	{
		path: '/',
		component: homePage,
	},
	{
		path: '/book',
		component: bookApp,
	},
	{
		path: '/about',
		component: aboutPage,
		children: [
			{
				path: 'team',
				component: aboutTeam,
			},
			{
				path: 'services',
				component: aboutServices,
			},
		],
	},
	{
		path: '/book/:bookId',
		component: bookDetailsCmp,
	},
];

export const router = VueRouter.createRouter({
	routes,
	history: VueRouter.createWebHashHistory(),
});
