<script setup>
import { inject } from 'vue';
import CarouselBanner from '@/components/CarouselBanner.vue';
import FrontPageCTA from '@/components/FrontPageCTA.vue';
const copyright = inject('copyright');
</script>

<template>
	<main>
		<CarouselBanner />
		<!-- <div id="page-layout" class="main-home-layout">
			<h1 id="name-title" class="amaranth text-center">Hardwick Web Design</h1>
		</div> -->
		<FrontPageCTA />
		<p class="copyright-notice">
			<span>Website design by</span>
			<a href="https://hardwick.design" title="Visit Hardwick Design" target="_blank" rel="noreferrer">
				<picture>
					<source type="image/webp" srcset="/icons/CSHorb-0border-32.webp" width="32" height="32" />
					<source type="image/png" srcset="/icons/CSHorb-0border-32.png" width="32" height="32" />
					<img src="/icons/CSHorb-0border-32.png" alt="Visit Hardwick Design" width="32" height="32" />
				</picture>
				Hardwick Design
			</a>
		</p>
		<p v-html="copyright" class="text-center copyright"></p>
	</main>
</template>

<style scoped>
.main-home-layout {
	margin: 1em auto;
	padding: 1em;
}

.copyright-notice {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
}

.copyright-notice a {
	display: flex;
	align-items: center;
	margin-left: 0.25em;
}

.copyright-notice a img {
	margin-right: 0.25em;
}

.copyright {
	margin-bottom: 0.5em;
}
</style>
