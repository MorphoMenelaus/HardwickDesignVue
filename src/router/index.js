import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: { requiresAuth: false, title: 'Hardwick Web Design | Home' },
		},
		{
			path: '/websites',
			name: 'Websites',
			component: () => import('../views/Websites.vue'),
			meta: { requiresAuth: false, title: 'Websites | Hardwick Web Design' },
		},
		{
			path: '/marketing',
			name: 'Marketing',
			component: () => import('../views/Marketing.vue'),
			meta: { requiresAuth: false, title: 'Marketing | Hardwick Web Design' },
		},
		{
			path: '/prototyping',
			name: 'Prototyping',
			component: () => import('../views/Prototyping.vue'),
			meta: { requiresAuth: false, title: 'Prototyping | Hardwick Web Design' },
		},
		{
			path: '/pdfs',
			name: 'PdfView',
			component: () => import('../views/PdfView.vue'),
			meta: { requiresAuth: false, title: 'PDFs | Hardwick Web Design' },
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue'),
			meta: { requiresAuth: false, title: 'About | Hardwick Web Design' },
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('@/views/NotFound.vue'),
			meta: { title: '404 - Not Found | Hardwick Web Design' },
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({
						el: to.hash,
						behavior: 'smooth',
					});
				}, 200);
			});
		}
		// If the browser back/forward button is pressed, maintain the saved position
		if (savedPosition) {
			return savedPosition;
		}
		// Otherwise, always scroll to the top of the page
		return { top: 0 };
	},
});

export default router;
