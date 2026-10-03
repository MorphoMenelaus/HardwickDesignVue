<script setup>
import { inject } from 'vue';
import PrivacyDisclaimer from '@/components/PrivacyDisclaimer.vue';
import Copyright from '@/components/Copyright.vue';
import Contact from '@/components/Contact.vue';
import CarouselHeadlines from '@/components/CarouselHeadlines.vue';
import ProfessionalProfile from '@/components/ProfessionalProfile.vue';
import ProfSkills from '@/components/ProfSkills.vue';
// const copyright = inject('copyright');
</script>
<template>
	<main>
		<CarouselHeadlines />
		<h1 class="page-header amaranth">About Hardwick Web Design</h1>
		<div class="two-panel-grid">
			<div class="two-panel-item">
				<div id="form-header">
					<h2 class="amaranth text-center">Contact Chris Hardwick</h2>
				</div>
				<Contact />
			</div>
			<div class="two-panel-item">
				<div id="form-header">
					<h2 class="amaranth text-center">About Chris Hardwick</h2>
					<h4>
						More than 15 years experience delivering modern, clean production websites and graphic design assets with memorable branding.
					</h4>
				</div>
				<ProfessionalProfile :bioPic="true" :quote="true" />
				<ProfSkills />
			</div>
		</div>
		<PrivacyDisclaimer />
		<Copyright />
	</main>
</template>

<style scoped>
#view {
	padding: 1em;
}

.two-panel-grid {
	width: 100%;
	display: grid;
	margin: 1em auto;
	row-gap: 1em;
}

.two-panel-item {
	padding: 1em;
	background-color: #e5f0fb;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 0.8em;
	height: 100%;
}

.panel-header {
	font-size: 2.8em;
	text-align: center;
}

.panel-header {
	font-size: 1.6em;
	font-weight: bold;
}

h4 {
	font-size: 1.5em;
	line-height: 1.5em;
	margin: 0.25em 1em 0.5em;
}

p {
	text-indent: 1.5em;
	margin-bottom: 0.5em;
}

@media (max-width: 1023px) {
	.page-header {
		font-size: 2.2em;
	}
}

@media (min-width: 1024px) {
	.two-panel-grid {
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}
}
</style>
