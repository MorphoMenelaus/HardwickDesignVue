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
		headline: 'More than 10 years creating modern, responsive user interfaces and experiences',
	},
	{
		id: 3,
		title: '',
		headline: 'Proven track record of collaborating with teams to launch successful web ecosystems',
	},
	{
		id: 4,
		title: '',
		headline: 'Building complete brand programs — logos, infographics, vector art, brochures, and digital assets',
	},
	{
		id: 5,
		title: '',
		headline: '3D modeling, printing, rendering, and Animation',
	},
	{
		id: 6,
		title: '',
		headline: 'Extensive experience illustrating parts-breakout diagrams for technical or instructional manuals',
	},
	{
		id: 7,
		title: '',
		headline: 'Custom responsive web development emphasizing semantic design and WCAG standards for accessibility',
	},
];

// Configuration options
const config = {
	itemsToShow: 1.5,
	snapAlign: 'center',
	autoplay: 4000,
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

<style>
#headlines-container .carousel__item {
	/* text-transform: uppercase; */
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

#headlines-container .carousel__viewport {
	overflow: unset;
}

@media (min-width: 1024px) {
	#headlines-container .carousel__viewport {
		overflow: hidden;
	}
}
</style>

<style scoped>
.headline {
	font-size: 1em;
}

.headlines-container {
	padding: 0 0.5em;
	user-select: none;
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
</style>
