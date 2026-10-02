<script setup>
import { ref, inject, watch, onMounted } from 'vue';

const props = defineProps({
	slideArray: Array,
	slideIndex: Number,
});

const slideIndex = inject('slideIndex');

const imageData = ref({});
// const closeViewer = inject('closeViewer');

watch(
	() => props.slideIndex,
	(newIndex) => {
		console.log('SlideViewer.vue: slideIndex changed to', newIndex);
		if (newIndex !== null && newIndex < props.slideArray.length) {
			imageData.value = props.slideArray[newIndex];
		} else {
			imageData.value = {};
		}
	},
);

const nextSlide = () => {
	if (props.slideIndex < props.slideArray.length - 1) {
		slideIndex(props.slideIndex + 1);
	} else {
		slideIndex(0);
	}
};

const prevSlide = () => {
	if (props.slideIndex > 0) {
		slideIndex(props.slideIndex - 1);
	} else {
		slideIndex(props.slideArray.length - 1);
	}
};

onMounted(() => {
	imageData.value = props.slideArray[props.slideIndex];
});
</script>

<template>
	<div id="viewer">
		<div id="slide-nav">
			<button class="btn" @click="prevSlide">Previous</button>
			<button class="btn" @click="nextSlide">Next</button>
			<button class="btn close" @click="slideIndex(null)">Close</button>
		</div>
		<picture>
			<source :srcset="`${imageData.fullSize}.webp`" type="image/webp" />
			<source :srcset="`${imageData.fullSize}.jpg`" type="image/jpeg" />
			<img class="" :src="`${imageData.fullSize}.jpg`" :alt="imageData.alt" :title="imageData.title" />
		</picture>
	</div>
</template>

<style scoped>
#viewer {
	position: fixed;
	inset: 0 0 3em;
	display: grid;
	justify-content: center;
	background-color: rgb(0 0 0 / 60%);
	backdrop-filter: blur(6px);
	z-index: 9999;
}

#slide-nav {
	display: flex;
	justify-content: center;
}

#slide-nav .btn {
	display: flex;
	align-self: center;
	justify-self: center;
	margin: 0 1em;
	font-size: 1em;
}

.close {
	background-color: #537fac;
	color: #ddd;
}

.close:hover {
	color: #ddd;
	background-color: #185abc;
}

img {
	height: 75vh;
	border-radius: 12px;
	padding: 1em;
	background-color: #a9ccd4;
}
</style>
