<script setup>
import { ref, inject, onMounted, onUnmounted, nextTick } from 'vue';

defineProps({
	isMobile: Boolean,
	isMobileLandscape: Boolean,
});

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
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
	<nav class="russo-one" :class="['navbar', { 'is-scrolled': isScrolled }]">
		<div v-if="isMobile" class="mobile-menu-icon">
			<div id="hamburger" @click="showHideNav()">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="home-title">
				<RouterLink to="/" title="Home">Home</RouterLink>
			</div>
		</div>

		<div class="nav-container">
			<!-- <div class="logo">MyBrand</div> -->
			<div class="menu">
				<RouterLink to="/" title="Home">Home</RouterLink>
				<RouterLink to="/websites" title="Custom Responsive Web Design & Development">Web&nbsp;Development</RouterLink>
				<RouterLink to="/marketing" title="Tech Marketing Design Brochures & Documents">Tech&nbsp;Marketing</RouterLink>
				<RouterLink to="/prototyping" title="3D Design, Animation, and Printing / Prototyping">3D&nbsp;Design</RouterLink>
				<RouterLink to="/pdfs" title="Online and Print Catalog PDFs">Catalog&nbsp;PDFs</RouterLink>
				<RouterLink to="/about" title="About">About</RouterLink>
			</div>
		</div>
	</nav>
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
	max-width: 1200px;
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
	cursor: pointer;
}

.menu a:hover {
	background-color: rgb(19, 59, 119);
}

.menu a:hover {
	color: rgb(205, 228, 113);
}

a.router-link-active {
	background-color: rgb(24, 90, 188);
	box-shadow:
		rgba(0, 0, 0, 0.25) 4px 4px 4px 1px inset,
		rgba(0, 0, 0, 0.25) -2px -2px 4px 0px inset;
	color: white !important;
}
</style>
