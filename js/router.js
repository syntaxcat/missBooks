import bookApp from './views/book-app.cmp.js';
import homePage from './views/home-page.cmp.js';
import aboutPage from './views/about-page.cmp.js';
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
