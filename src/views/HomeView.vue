<script setup>
import { inject } from 'vue';
import Copyright from '@/components/Copyright.vue';
import CarouselBanner from '@/components/CarouselBanner.vue';
import FrontPageCTA from '@/components/FrontPageCTA.vue';
// const copyright = inject('copyright');
</script>

<template>
	<main>
		<CarouselBanner />
		<!-- <div id="page-layout" class="main-home-layout">
			<h1 id="name-title" class="amaranth text-center">Hardwick Web Design</h1>
		</div> -->
		<FrontPageCTA />
		<Copyright />
	</main>
</template>

<style scoped>
.main-home-layout {
	margin: 1em auto;
	padding: 1em;
}
</style>
