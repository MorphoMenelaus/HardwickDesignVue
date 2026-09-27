<script setup>
defineProps({
	isMobile: Boolean
});
</script>

<template>

	<div id="nav-container" :class="isMobile ? 'mobile' : ''">

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

		<Transition name="slide-down">
			<nav aria-label="main menu" v-if="!isMobile">
				<RouterLink to="/" title="Home" class="home-icon">Home</RouterLink>
				<RouterLink to="/about" title="About">About</RouterLink>
			</nav>
		</Transition>

	</div>

</template>

<style scoped>
#nav-container {
	font-size: 3em;
	display: flex;
	align-items: center;
}

nav a {
	margin-right: 1em;
}
</style>
