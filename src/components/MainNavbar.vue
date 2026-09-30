<script setup>
import { ref, inject, onMounted, onUnmounted, nextTick } from 'vue';

defineProps({
	isMobile: Boolean,
	isMobileLandscape: Boolean,
});

const app = ref(null);
const isScrolled = ref(false);
const mobileMenuShow = ref(false);
const startY = ref(null);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20;
};

const showHideNav = () => {
	mobileMenuShow.value = mobileMenuShow.value ? false : true;
};

const handleTouchStart = (event) => {
	startY.value = event.touches[0].clientY;
};

const handleTouchEnd = (event) => {
	let endY = event.changedTouches[0].clientY;
	let diff = startY.value - endY;

	if (diff > 50) {
		mobileMenuShow.value = false;
	}
};

onMounted(() => {
	app.value = document.getElementById('app');
	app.value.addEventListener('click', (e) => {
		if (e.target.id !== 'hamburger' && e.target.parentElement.id !== 'hamburger') mobileMenuShow.value = false;
	});
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
	<!-- <div id="nav-container" :class="isMobile ? 'mobile' : ''"> -->
	<!-- <div v-if="isMobile" class="mobile-menu-icon">
			<div id="hamburger" @click="showHideNav()">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="home-title">
				<RouterLink to="/" title="Home">Home</RouterLink>
			</div>
		</div>

		<Transition name="slide-down">
			<nav :class="['navbar', { 'is-scrolled': isScrolled }]" aria-label="main menu" v-if="!isMobile">
				<div class="nav-container">
					<div class="logo">MyBrand</div>
					<div class="menu">
						<RouterLink to="/" title="Home" class="home-icon">Home</RouterLink>
						<RouterLink to="/about" title="About">About</RouterLink>
					</div>
				</div>
			</nav>
		</Transition> 
	</div> -->
	<!-- <nav class="russo-one" :class="['navbar', { 'is-scrolled': isScrolled }]"> -->
	<div id="mobile-container">
		<div v-if="isMobile" class="mobile-menu-icon">
			<div id="hamburger" @click="showHideNav()">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="home-title">
				<h3 class="amaranth uppercase">
					<RouterLink to="/" title="Home">Hardwick Design</RouterLink>
				</h3>
			</div>
		</div>
	</div>
	<Transition name="slide-down">
		<nav
			v-if="!isMobile || mobileMenuShow"
			class="russo-one"
			:class="['navbar', { 'is-scrolled': isScrolled }, { mobile: isMobile }]"
			@touchstart="handleTouchStart"
			@touchend="handleTouchEnd"
			@click="showHideNav"
		>
			<div class="nav-container">
				<div class="menu">
					<RouterLink to="/" title="Home">Home</RouterLink>
					<RouterLink to="/websites" title="Custom Responsive Web Design & Development">Web Development</RouterLink>
					<RouterLink to="/marketing" title="Tech Marketing Design Brochures & Documents">Tech Marketing</RouterLink>
					<RouterLink to="/prototyping" title="3D Design, Animation, and Printing / Prototyping">3D&nbsp;Design / Prototyping</RouterLink>
					<RouterLink to="/pdfs" title="Online and Print Catalog PDFs">Catalog&nbsp;PDFs</RouterLink>
					<RouterLink to="/about" title="About">About</RouterLink>
				</div>
			</div>
		</nav>
	</Transition>
</template>

<style scoped>
.navbar {
	position: sticky;
	top: 0;
	z-index: 1000;

	transition: all 0.3s ease;
	border-bottom: 1px solid #eee;
	color: var(--vt-c-text-light-3);
	background-color: rgb(114, 168, 190);
	background-image: linear-gradient(rgb(212, 232, 230), rgb(114, 168, 190) 90%);
	box-shadow: rgba(0, 0, 0, 0.8) 0px 1px 5px;
}

.nav-container {
	/* max-width: 1200px; */
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
}

.logo {
	font-weight: bold;
	font-size: 1.5rem;
}

.menu {
	display: flex;
	align-items: center;
	color: var(--vt-c-text-light-3);
	text-transform: uppercase;
	user-select: none;
}

.menu a {
	text-decoration: none;
	padding: 0.6em 2em;
	color: var(--vt-c-text-light-3);
	border-left: 1px solid rgb(51, 51, 51);
	border-right: 1px solid rgb(51, 51, 51);
	background-color: rgb(118, 171, 191);
	background-image: linear-gradient(rgb(212, 232, 230), rgb(114, 168, 190) 90%);
	transition: background-color 0.3s;

	cursor: pointer;
}

.menu a:hover {
	background-color: rgb(19, 59, 119);
}

.menu a:hover {
	color: rgb(205, 228, 113);
}

a.router-link-active {
	background-image: unset;
	background-color: rgb(24, 90, 188);
	box-shadow:
		rgba(0, 0, 0, 0.25) 4px 4px 4px 1px inset,
		rgba(0, 0, 0, 0.25) -2px -2px 4px 0px inset;
	color: white !important;
}

#mobile-container {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 2;
	/* box-shadow: 0px 6px 6px 8px #000; */
}

.home-title {
	width: calc(100vw - 9em);
	display: flex;
	align-self: center;
	justify-content: center;
	user-select: none;
}

.home-title a {
	color: var(--vt-c-text-light-1) !important;
	text-decoration: none;
	background-color: unset;
	box-shadow: unset;
}

.mobile-menu-icon {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 4.2em;
	background-color: rgb(114, 168, 190);
	background: linear-gradient(rgb(212, 232, 230), rgb(114, 168, 190) 90%);
	z-index: 2;
	overflow: hidden;
}

#hamburger {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 3.2em;
	height: 3.2em;
	margin: 0.5em 0.65em;
	padding: 0.3em;
	border: 1px solid rgb(170 170 170 / 50%);
	border-radius: 100%;
	background-color: rgb(37, 89, 150);
	/* background: var(--wc-c-black-blue); */
}

#hamburger div {
	margin: 5px;
	border: 1px #fff solid;
}

.mobile .navbar {
	position: absolute;
	overflow: hidden;
}

.mobile-menu-icon {
	display: flex;
	flex-flow: row nowrap;
	/* width: 100%; */
	top: 0;
	position: absolute;
}

.mobile .menu {
	/* background-color: var(--wc-branding-accent-dark); */
	color: #333;
	display: flex;
	flex-direction: column;
	position: absolute;
	/* top: 3.4em; */
	top: calc(4em - 2px);
	left: -1em;
	right: 0;
	width: calc(100vw + 1em);
	overflow: hidden;
}

.mobile .menu a {
	color: #333;
	margin-right: 0;
	user-select: none;
	width: 100%;
	padding-left: 2em;
}

.mobile .home-title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: calc(100vw - 3em);
	height: auto;
	padding-right: 3em;
}

.mobile .home-title a {
	border: none;
}
</style>
