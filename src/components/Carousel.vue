<script setup>
import { ref, onMounted } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';
import slides from '@/dependencies/slides.json';

const props = defineProps({
	isMobile: Boolean,
});

const relativePath = './img/examples/';
const shuffledSlides = ref([]);

const config = {
	itemsToShow: 1.5,
	snapAlign: 'center',
	autoplay: 3000,
	wrapAround: true,
	breakpoints: {
		768: { itemsToShow: 1, snapAlign: 'center' },
		1024: { itemsToShow: 2, snapAlign: 'start' },
		1200: { itemsToShow: 3, snapAlign: 'start' },
		1920: { itemsToShow: 4, snapAlign: 'start' },
		2200: { itemsToShow: 5, snapAlign: 'start' },
	},
};

function shuffleArray(array) {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}

onMounted(() => {
	shuffledSlides.value = shuffleArray(slides);
});
</script>

<template>
	<div id="carousel-container" v-if="shuffledSlides?.length > 0">
		<Carousel v-bind="config">
			<Slide v-for="slide in shuffledSlides" :key="slide.id">
				<div class="carousel__item">
					<span class="text-stroke">{{ slide.title }}</span>
					<img :src="`/img/${slide.image}`" />
				</div>
			</Slide>
			<!-- Addons are optional slots for UI elements -->
			<template #addons>
				<Navigation />
				<Pagination />
			</template>
		</Carousel>
	</div>
</template>

<style>
#carousel-container {
	width: 100vw;
	padding: 0;
	margin: 0 auto;
	left: 0;
	top: 0; */
	user-select: none;
}

#carousel-container .carousel__item {
	min-height: 50vh;
	width: 100%;
	color: white;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
}

#carousel-container .carousel__item span {
	position: absolute;
	bottom: 0;
	text-align: center;
	background-color: rgb(5 14 56 / 70%);
	padding: 0 0.8em;
	color: var(--wc-branding-color);
	width: 100%;
	min-height: 4em;
	align-content: center;
	font-size: 1.1em;
}

#carousel-container .carousel__item img {
	width: 100%;
	height: 50vh;
	object-fit: cover;
	border-width: 0 2px;
	border-style: solid;
}

#carousel-container .carousel__icon {
	color: #000;
	background-color: #fff;
	border-radius: 10px;
	transition:
		background-color 300ms ease-in-out,
		color 300ms ease-in-out;
}

#carousel-container .carousel__prev,
#carousel-container .carousel__next {
	font-size: 4em;
	width: 0.7em;
	height: 0.7em;
}

.carousel__pagination {
	top: 0.5em;
}

#carousel-container .carousel__pagination-button {
	height: 0.6em;
	background-color: var(--wc-branding-accent-color);
}

#carousel-container .carousel__prev .carousel__icon {
	border-radius: 0 10px 10px 0;
}

#carousel-container .carousel__next .carousel__icon {
	border-radius: 10px 0 0 10px;
}

#carousel-container .carousel__pagination-button--active {
	background-color: #5611bd;
}

#carousel-container .carousel__icon:hover {
	color: #a8befb;
	background-color: #4b4f8c;
}

@media (min-width: 768px) {
	.carousel__pagination {
		top: 0.8em;
	}
}
</style>
