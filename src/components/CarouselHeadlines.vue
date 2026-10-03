<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';

const props = defineProps({
	isMobile: Boolean,
});

const carousel = ref(null);
const shuffledHeadlines = ref([]);

const headlines = [
	{
		id: 1,
		title: '',
		headline: 'Creative and experienced web development; building striking and engaging websites',
	},
	{
		id: 2,
		title: '',
		headline: 'More than 10 years building modern, responsive user interfaces and fluid user experiences',
	},
	{
		id: 3,
		title: '',
		headline: 'Proven track record of collaborating with teams to launch successful web ecosystems',
	},
	{
		id: 4,
		title: '',
		headline: 'Building complete brand programs including logos, infographics, vector files, brochures, and digital assets',
	},
	{
		id: 5,
		title: '',
		headline: '3D modeling, printing, rendering, and Animation',
	},
	{
		id: 6,
		title: '',
		headline: 'Extensive experience creating illustrations and parts-breakout diagrams for technical or instructional manuals',
	},
	{
		id: 7,
		title: '',
		headline: 'Custom responsive web development with emphasis on semantic design and ADA accessibility compliance (WCAG)',
	},
];

// Configuration options
const config = {
	itemsToShow: 1.5,
	snapAlign: 'center',
	autoplay: 3000,
	wrapAround: true, // Infinite scroll loop
	breakpoints: {
		768: { itemsToShow: 1.5, snapAlign: 'center' },
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
const keyHandler = (event) => {
	if (event.key === 'ArrowRight') {
		carousel.value.next();
	} else if (event.key === 'ArrowLeft') {
		carousel.value.prev();
	}
};

onMounted(() => {
	shuffledHeadlines.value = shuffleArray(headlines);
	window.addEventListener('keydown', keyHandler);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', keyHandler);
});
</script>

<template>
	<div id="headlines-container">
		<Carousel v-bind="config" ref="carousel">
			<Slide class="headlines-container" v-for="slide in shuffledHeadlines" :key="slide.id">
				<div class="carousel__item">
					<div class="item-container">
						<p class="headline">{{ slide.headline }}</p>
					</div>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<style scoped>
.headline {
	font-size: 1em;
}

.headlines-container {
	padding: 0 0.5em;
	user-select: none;
}

.carousel__item {
	text-transform: uppercase;
	background-color: var(--wc-branding-accent-color);
	background-color: rgb(131 153 193 / 60%);
	background-image: radial-gradient(rgb(91 233 55 / 40%) 40%, rgb(41 38 163 / 30%) 90%);
	color: #ddd;
	padding: 1em;
	width: 100%;
	height: 100%;
	text-align: center;
	align-content: center;
	font-weight: bold;
	border-radius: 10px;
}

.item-container {
	background-image: linear-gradient(#0f438f, #020618);
	border-radius: 8px;
	height: 100%;
	width: 100%;
	padding: 0.5em;
	align-content: center;
	overflow: hidden;
	text-overflow: ellipsis;
}

@media (min-width: 768px) {
	.headline {
		font-size: 1.5em;
	}
}

/* #carousel-container {
	width: 100vw;
	padding: 0;
	margin: 0 auto;
	position: absolute;
	left: 0;
	top: 0;
} */

/* .carousel__item {
	min-height: 50vh;
	width: 100%;
	color: white;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
} */

/* .carousel__item span {
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
} */

/* .carousel__item img {
	width: 100%;
	height: 50vh;
	object-fit: cover;
	border-width: 0 2px;
	border-style: solid;
} */

/* .carousel__icon {
	color: #000;
	background-color: #fff;
	border-radius: 10px;
	transition:
		background-color 300ms ease-in-out,
		color 300ms ease-in-out;
} */

/* .carousel__prev,
.carousel__next {
	font-size: 4em;
	width: 0.7em;
	height: 0.7em;
} */

/* .carousel__pagination-button {
	height: 0.6em;
	background-color: var(--wc-branding-accent-color);
} */

/* .carousel__prev .carousel__icon {
	border-radius: 0 10px 10px 0;
}

.carousel__next .carousel__icon {
	border-radius: 10px 0 0 10px;
}

.carousel__pagination-button--active {
	background-color: #5611bd;
}

.carousel__icon:hover {
	color: #a8befb;
	background-color: #4b4f8c;
} */
</style>
