<script setup>
// import MainNavbar from '@/components/MainNavbar.vue';

defineProps({
	isMobile: Boolean,
});
</script>

<template>
	<header id="header">
		<RouterLink to="/" title="Home" class="home-icon logo">
			<picture>
				<source type="image/webp" srcset="/icons/CSHorb-0border-256.webp" />
				<source type="image/png" srcset="/icons/CSHorb-0border-256.png" />
				<img src="/icons/CSHorb-0border-256.png" class="logo" alt="Hardwick Web Design Home" />
			</picture>
		</RouterLink>
		<RouterLink to="/" title="Home">
			<h1 class="header-h1 amaranth">Hardwick Web Design</h1>
		</RouterLink>
		<a href="https://linkedin.com/in/cs-hardwick" class="linkedin" title="Chris Hardwick on LinkedIn" target="_blank" rel="noreferrer">
			<picture>
				<source type="image/webp" srcset="/icons/LinkedIn_logo_initials.webp" />
				<source type="image/png" srcset="/icons/LinkedIn_logo_initials.png" />
				<img src="/icons/LinkedIn_logo_initials.png" class="logo" alt="Chris Hardwick on LinkedIn" />
			</picture>
		</a>

		<!-- <MainNavbar :isMobile="isMobile" /> -->
	</header>
</template>

<style scoped>
header {
	background-color: #79c6ec;
	background-image: url('/img/textureBG.webp');
	background-image: image-set(url('/img/textureBG.webp') type('image/webp'), url('/img/textureBG.jpg') type('image/jpeg'));
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

#header {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;
	overflow: hidden;
}

h1 {
	color: var(--vt-c-text-light-3);
	font-size: 3em;
	font-weight: bold;
	line-height: 1.8em;
	text-transform: uppercase;
}

.home-icon {
	margin-right: 2em;
}

.linkedin {
	margin-left: 2em;
}

.logo {
	width: 5em;
	height: 5em;
	object-fit: contain;
}

.linkedin .logo {
	width: 4em;
	height: 4em;
	border: 1px #fff solid;
	border-radius: 8px;
}

a {
	text-decoration: none;
	color: inherit;
}
</style>
