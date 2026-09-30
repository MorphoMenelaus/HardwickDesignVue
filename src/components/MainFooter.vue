<script setup>
import { inject } from 'vue';
import ProfessionalProfile from '@/components/ProfessionalProfile.vue';
const appCurrentVersion = inject('appCurrentVersion');
defineProps({
	isMobile: Boolean,
});
</script>

<template>
	<footer id="footer">
		<div id="profile">
			<ProfessionalProfile :profileLink="true" :linkedinLink="true" :header="true" />
		</div>
	</footer>
	<div id="psuedo-footer">
		<h3 class="amaranth">Hardwick Web Design</h3>
	</div>
</template>

<style scoped>
#profile {
	width: 100%;
	margin-bottom: 3.75em;
	padding: 2em 10% 1em;
	/* background-color: rgb(148 189 209 / 60%); */
	background-image: linear-gradient(90deg, transparent 0, rgb(148 189 209 / 60%) 10%, rgb(148 189 209 / 60%) 90%, transparent 100%);
}

footer {
	background-color: #79c6ec;
	background-image: url('/img/textureBG.webp');
	background-image: image-set(url('/img/textureBG.webp') type('image/webp'), url('/img/textureBG.jpg') type('image/jpeg'));
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: sticky;
	bottom: 0px;
	z-index: 0;
}

#psuedo-footer {
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	height: 4em;
	padding: 1em;
	overflow: hidden;
	background-color: rgb(114, 168, 190);
	background-image: linear-gradient(rgb(212, 232, 230), rgb(114, 168, 190) 90%);
	border-top: 1px rgb(2 6 24) solid;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 9999999;
}

@media (max-width: 767px) {
	div#profile {
		display: none;
	}
}
</style>
