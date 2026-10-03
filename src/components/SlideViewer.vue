<script setup>
import { ref, inject, watch, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
	isMobile: Boolean,
	slideArray: Array,
	slideIndex: Number,
});

const slideIndex = inject('slideIndex');
const imageData = ref({});

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
const keyDown = (event) => {
	switch (event.key) {
		case 'ArrowRight':
			nextSlide();
			break;
		case 'ArrowLeft':
			prevSlide();
			break;
		case 'Escape':
			slideIndex(null);
			break;
	}
};

watch(
	() => props.slideIndex,
	(newIndex) => {
		if (newIndex !== null && newIndex < props.slideArray.length) {
			imageData.value = props.slideArray[newIndex];
		} else {
			imageData.value = {};
		}
	},
);

onMounted(() => {
	imageData.value = props.slideArray[props.slideIndex];
	window.addEventListener('keydown', keyDown);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', keyDown);
});
</script>

<template>
	<div id="viewer">
		<div>
			<div class="slide-wrapper">
				<picture>
					<source :srcset="`${imageData.fullSize}.webp`" type="image/webp" />
					<source :srcset="`${imageData.fullSize}.jpg`" type="image/jpeg" />
					<img class="slide-image" :src="`${imageData.fullSize}.jpg`" :alt="imageData.alt" :title="imageData.title" />
				</picture>
				<button class="btn close" @click="slideIndex(null)" title="Close">✕</button>
				<span v-if="!isMobile" class="slide-title">{{ imageData.title }}</span>
			</div>
			<div id="slide-nav">
				<button class="btn slide-buttons prev" @click="prevSlide" title="Previous Slide">
					<img src="/img/left.png" alt="Previous Slide" />
				</button>
				<button class="btn slide-buttons next" @click="nextSlide" title="Next Slide">
					<img src="/img/right.png" alt="Next Slide" />
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
#viewer {
	position: fixed;
	inset: 0 0 3em;
	display: grid;
	background-color: rgb(0 0 0 / 60%);
	backdrop-filter: blur(6px);
	z-index: 9999;
}

#viewer > div {
	align-self: center;
}

#slide-nav {
	display: flex;
	justify-content: center;
}

#slide-nav .btn {
	display: flex;
	align-self: center;
	justify-self: center;
	padding: 0.5em;
	font-size: 1em;
}

.slide-buttons {
	position: absolute;
	top: calc(50vh - 4em);
}

.prev {
	left: 0;
	margin: 0 0 0 1em;
}

.next {
	right: 0;
	margin: 0 1em 0 0;
}

.close {
	position: absolute;
	top: -1.8em;
	right: -1.3em;
	padding: 0.5em 0.6em;
	text-transform: uppercase;
	font-size: 1.2em;
	font-weight: 700;
	line-height: 1em;
	background-color: #0088cc;
	color: #fff;
}

.close:hover {
	color: #ddd;
	background-color: #185abc;
}

.slide-wrapper {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: fit-content;
	margin: auto;
}

.slide-image {
	height: 100%;
	max-height: 70vh;
	width: 100%;
	max-width: 70vw;
	object-fit: contain;
	padding: 1em;
	background-color: #a9ccd4;
	border: 1px solid #333;
	border-radius: 12px;
}

.slide-title {
	position: absolute;
	padding: 0.42em 0.5em;
	font-size: 1.5em;
	bottom: -2em;
	color: #333;
	background-color: #a9ccd4;
	border-radius: 0 0 0.3em 0.3em;
}

@media (max-width: 1023px) {
	.slide-image {
		max-width: 85vw;
	}

	.slide-buttons[data-v-8dd053fa] {
		bottom: -14em;
	}

	.prev {
		left: 7.5em;
	}

	.next {
		right: 7.5em;
	}
}
</style>
