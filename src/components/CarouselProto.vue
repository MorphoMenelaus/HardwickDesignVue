<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';
import slides from '@/dependencies/slidesProto.json';

const props = defineProps({
	isMobile: Boolean,
});

const carousel = ref(null);
const shuffledSlides = ref([]);

const config = {
	itemsToShow: 1,
	snapAlign: 'center',
	slideEffect: 'fade',
	keyboardNavigation: true,
	transition: 700,
	autoplay: 3000,
	wrapAround: true,
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
	shuffledSlides.value = shuffleArray(slides);
	window.addEventListener('keydown', keyHandler);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', keyHandler);
});
</script>

<template>
	<div id="carousel-proto" v-if="shuffledSlides?.length > 0">
		<Carousel v-bind="config" ref="carousel">
			<Slide v-for="slide in shuffledSlides" :key="slide.id">
				<RouterLink :to="slide.location" class="carousel__item">
					<span class="text-stroke">{{ slide.title }}</span>
					<picture>
						<source type="image/webp" :srcset="`/img/${slide.image}.webp`" />
						<source type="image/jpg" :srcset="`/img/${slide.image}.jpg`" />
						<img :src="`/img/${slide.image}.jpg`" class="logo" :alt="slide.title" />
					</picture>
				</RouterLink>
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
#carousel-proto {
	width: 100%;
	padding: 0;
	margin: 0 auto;
	user-select: none;
}

#carousel-proto .carousel__item {
	width: 100%;
	font-size: 1.4em;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
}

#carousel-proto .carousel__item span {
	position: absolute;
	bottom: 15px;
	text-align: center;
	background-color: rgb(5 14 56 / 50%);
	padding: 0 0.8em;
	color: var(--vt-c-text-dark-3);
	width: 100%;
	min-height: 3em;
	align-content: center;
	border-radius: 0 0 12px 12px;
	overflow: hidden;
}

#carousel-proto .carousel__item img {
	width: 100%;
	height: 300px;
	object-fit: cover;
	border-width: 0 2px;
	border-style: solid;
	border-radius: 12px;
	overflow: hidden;
}

#carousel-proto .carousel__icon {
	color: #000;
	background-color: #fff;
	border-radius: 10px;
	transition:
		background-color 300ms ease-in-out,
		color 300ms ease-in-out;
}

#carousel-proto .carousel__prev,
#carousel-proto .carousel__next {
	display: none;
}

#carousel-proto .carousel__pagination {
	top: 0.5em;
	height: fit-content;
}

#carousel-proto .carousel__pagination-button {
	height: 0.6em;
	background-color: var(--vt-c-text-dark-2);
	border-radius: 50%;
	height: 15px !important;
	width: 15px;
}

#carousel-proto .carousel__prev .carousel__icon {
	border-radius: 0 10px 10px 0;
}

#carousel-proto .carousel__next .carousel__icon {
	border-radius: 10px 0 0 10px;
}

#carousel-proto .carousel__pagination-button--active {
	background-color: #5611bd;
}

#carousel-proto .carousel__icon:hover {
	color: #a8befb;
	background-color: #4b4f8c;
}

@media (min-width: 768px) {
	#carousel-proto .carousel__pagination-button {
		height: 20px !important;
		width: 20px;
	}

	#carousel-proto .carousel__item img {
		height: calc(100vh - 14em);
	}

	#carousel-proto .carousel__pagination {
		top: 0.8em;
	}
}

@media (min-width: 1024px) {
	#carousel-proto .carousel__item {
		font-size: 1.75em;
	}

	#carousel-proto .carousel__item img {
		height: 600px;
	}
}
</style>
