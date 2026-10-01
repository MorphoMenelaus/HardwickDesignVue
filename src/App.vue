<script setup>
import { onMounted, ref, provide, inject } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import MainHeader from '@/components/MainHeader.vue';
import MainNavbar from '@/components/MainNavbar.vue';
import MainFooter from './components/MainFooter.vue';

const baseUrl = inject('baseUrl');
const showHideLoader = ref(false);
const isMobile = ref(window.innerWidth < 1024);
const windowWidth = ref(window.innerWidth);
const isMobileLandscape = ref(
	screen.orientation.type.includes('landscape') && window.innerHeight < 600 && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),
);

const checkOrientation = () => {
	isMobileLandscape.value =
		screen.orientation.type.includes('landscape') && window.innerHeight < 600 && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
};

provide('showHideLoader', (bool) => (showHideLoader.value = bool));
window.addEventListener('resize', () => {
	isMobile.value = window.innerWidth < 1024;
	windowWidth.value = window.innerWidth;
	checkOrientation();
});
</script>

<template>
	<div v-if="isMobileLandscape" class="rotate-warning">
		<h2>For best user experience,<br />landscape view is not supported on mobile devices.</h2>
		<p>Please rotate your mobile device to portrait view.</p>
	</div>
	<div id="loading-icon" :class="showHideLoader ? 'loading' : ''">
		<div class="spinner-comet"></div>
	</div>

	<MainHeader v-if="!isMobile" />

	<MainNavbar :isMobile="isMobile" :isMobileLandscape="isMobileLandscape" />

	<RouterView id="view" :windowWidth="windowWidth" :isMobile="isMobile" :class="isMobile ? 'mobile' : ''" />

	<MainFooter :isMobile="isMobile" />
</template>

<style scoped>
#view {
	/* position: fixed;
	top: 10em;
	right: 0;
	left: 0;
	bottom: 4em;
	max-height: calc(100vh - 14em);
	overflow: hidden auto; */
}

.rotate-warning {
	position: fixed;
	inset: 0;
	background-color: #1a1a1a;
	color: #fff;
	z-index: 999999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 15px;
	background-position-y: top;
	font-size: 12px;
}

#loading-icon {
	display: none;
	align-content: center;
	justify-content: center;
	position: fixed;
	top: 200px;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	background-color: rgb(0 0 0 / 50%);
	backdrop-filter: blur(5px);
	transition: background-color 0.3 ease-in-out;
	z-index: 15000;
}

.loader-icon {
	height: 48px;
	width: 48px;
	border: 3px solid;
	border-radius: 100%;
	border-color: red white blue black;
	animation: loader 0.5s linear infinite;
}

#loading-icon.loading {
	display: grid;
}
</style>
