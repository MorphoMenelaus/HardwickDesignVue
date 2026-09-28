<script setup>
import { inject } from 'vue';
import CarouselHeadlines from '@/components/CarouselHeadlines.vue';
import ProfessionalProfile from '@/components/ProfessionalProfile.vue';
const copyright = inject('copyright');
</script>
<template>
	<main>
		<CarouselHeadlines />
		<div id="page-layout" class="about">
			<h1 class="amaranth text-center">About Chris Hardwick</h1>
			<ProfessionalProfile />
		</div>
	</main>
</template>

<style scoped>
.about {
	margin: 1em auto;
	padding: 1em;
}

.copyright {
	margin-top: 0.5em;
}
</style>
