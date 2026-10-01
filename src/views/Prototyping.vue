<script setup>
import { ref, provide, inject, watch, onMounted, onBeforeUnmount } from 'vue';
import CarouselProto from '@/components/CarouselProto.vue';
import SlideViewer from '@/components/SlideViewer.vue';

const showHideLoader = inject('showHideLoader');

const imageArray = ref([]);
const baseUrl = inject('baseUrl');
const loading = ref('');
const error = ref(null);
const imageData = ref({});

provide('closeViewer', () => (imageData.value = {}));

const getPrototypeImages = async () => {
	showHideLoader(true);
	loading.value = 'Loading...';

	let headerObj = new Headers();
	headerObj.append('Content-Type', 'application/json; charset=utf-8');
	let requestUrl = new URL('/api/seed/proto', baseUrl); //window.location, origin);

	let request = new Request(requestUrl.toString(), {
		method: 'GET',
		headers: headerObj,
	});

	try {
		let response = await fetch(request);

		if (response?.ok) {
			let data = await response.json();
			imageArray.value = data.data;
		}
	} catch (err) {
		console.error(err);
		error.value = err;
	} finally {
		loading.value = !imageArray.value.length > 0 ? 'No results' : '';
		showHideLoader(false);
	}
};

onMounted(() => {
	getPrototypeImages();
});

onBeforeUnmount(() => {
	showHideLoader(false);
});
</script>
<template>
	<main>
		<div id="page-layout">
			<h2 class="page-header amaranth">3D Design, Animation & Printing / Prototyping</h2>
		</div>
		<div id="headline-container">
			<CarouselProto />
			<div id="description-container">
				<h3 class="amaranth text-center">3D Modeling & Animation</h3>
				<h4>Precision modeling for videos and functional prototypes</h4>
				<p>
					What started as a love for 3D modeling and animation, has led to years working designing models and prototypes for manufacturing
					and mock-ups for marketing. Making vectors and 3D models for CNC manufacturing was not how I started this journey but I found that
					there is a demand for that.
				</p>
				<p>Below on this page are some examples of some 3D printing I have been doing recently. I will update these periodically.</p>
				<p>
					I have extensive experience creating drawings for technical manuals, instruction diagrams, and parts-breakout diagrams. Check out
					my Tech Marketing Design page for more examples.
				</p>
				<p>It's very satisfying to physically hold an object you just created in a computer.</p>
				<h4>My printer is capable of printing the following materials:</h4>
				<div class="flex-list">
					<ul>
						<li>ABS</li>
						<li>Polycarbonate</li>
						<li>PETG</li>
						<li>PLA</li>
					</ul>
					<ul>
						<li>HIPS (High Impact Polystyrene)</li>
						<li>PLA</li>
						<li>TPU</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="slideContainer" id="techMarketing">
			<div v-if="imageArray.length > 0" class="cards">
				<picture v-for="(item, index) in imageArray" :key="index" class="card" @click="imageData = item">
					<source :srcset="`${item.url}.webp`" type="image/webp" />
					<source :srcset="`${item.url}.jpg`" type="image/jpeg" />
					<img :src="`${item.url}.jpg`" :alt="item.alt" :title="item.title" :data-fullsize="`${item.fullSize}.jpg`" />
				</picture>
			</div>
			<div v-else class="text-center">
				<h1>{{ loading }}</h1>
				<h3 v-if="error" :class="error ? 'error' : ''">{{ error }}</h3>
			</div>
		</div>
		<Transition name="fade">
			<SlideViewer v-if="Object.keys(imageData).length > 0" :imageData="imageData" />
		</Transition>
	</main>
</template>

<style scoped>
h4 {
	font-size: 1.5em;
	line-height: 2.5em;
	text-align: center;
}

p {
	text-indent: 1.5em;
	margin-bottom: 0.5em;
}

#techMarketing {
	margin-top: 2em;
}

#headline-container {
	display: grid;
	grid-template-columns: 1;
	gap: 1em;
	width: 95%;
	margin: auto;
	padding: 1em;
	background-color: #e5f0fb;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 0.8em;
}

#description-container {
	padding-left: 1em;
	padding-right: 1em;
}

.slideContainer {
	width: 95%;
	margin: 1em auto 2em;
	padding: 0.25em;
	background: rgb(255 255 255 / 20%);
	border: 1px rgb(0 0 0 / 45%) solid;
	border-radius: 14px;
}

.cards {
	display: grid;
	width: 100%;
	gap: 1rem;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: 25vw;
	/* grid-template-rows: 400px repeat(auto-fill, 400px) 400px; */
}

.card {
	background-color: #e5f0fb;
	box-sizing: border-box;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 0.8em;
	min-height: 180px;
	padding: 0.5em;
	padding: 15px;
	cursor: pointer;
	box-shadow: 0 0 0 0 rgba(24, 90, 188, 0);
	transition:
		transform 0.3s,
		box-shadow 0.2s;
}

.card:hover {
	box-shadow: 0 0 10px 2px #185abc;
	transform: scale(1.05, 1.05);
}

.card img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.flex-list {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
}

@media (min-width: 768px) {
	#headline-container {
		grid-template-columns: repeat(2, 1fr);
	}

	.cards {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (min-width: 992px) {
	.cards {
		grid-template-columns: repeat(4, 1fr);
	}
}

@media (min-width: 1200px) {
	.cards {
		grid-template-columns: repeat(5, 1fr);
	}
}
</style>
