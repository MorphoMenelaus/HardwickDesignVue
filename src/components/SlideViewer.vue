<script setup>
import { inject } from 'vue';

defineProps({
	imageData: Object,
});
const closeViewer = inject('closeViewer');
</script>

<template>
	<div id="viewer">
		<button class="btn" @click="closeViewer()">Close</button>
		<picture>
			<source :srcset="`${imageData.fullSize}.webp`" type="image/webp" />
			<source :srcset="`${imageData.fullSize}.jpg`" type="image/jpeg" />
			<img class="" :src="`${imageData.fullSize}.jpg`" :alt="imageData.alt" :title="imageData.title" />
		</picture>
	</div>
</template>

<style scoped>
#viewer {
	position: absolute;
	inset: 0;
	padding-top: 3vh;
	display: grid;
	align-items: flex-start;
	justify-content: center;
	background-color: rgb(0 0 0 / 60%);
	backdrop-filter: blur(6px);
	z-index: 2;
}

img {
	height: 75vh;
	border-radius: 12px;
	padding: 1em;
	background-color: #a9ccd4;
}

.btn {
	position: absolute;
	top: 3em;
	left: 3em;
	font-size: 1em;
}
</style>
