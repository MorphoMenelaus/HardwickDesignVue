<script setup>
import { ref, provide, inject, watch, onMounted } from 'vue';
import SlideViewer from '@/components/SlideViewer.vue';

const showHideLoader = inject('showHideLoader');

const imageArray = ref([]);
const baseUrl = inject('baseUrl');
const loading = ref('');
const error = ref(null);
const imageData = ref({});

provide('closeViewer', () => (imageData.value = {}));

const getMarketingImages = async () => {
	showHideLoader(true);
	loading.value = 'Loading...';

	let headerObj = new Headers();
	headerObj.append('Content-Type', 'application/json; charset=utf-8');
	let requestUrl = new URL('/api/seed/tech', baseUrl); //window.location, origin);

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
	getMarketingImages();
});
</script>
<template>
	<main>
		<div id="page-layout">
			<h2 class="page-header amaranth">Tech Marketing Design</h2>
			<p>
				Technical catalogs and brochures geared toward best accepted standards can contain the necessary advanced information to assign your
				products and services the authority of industry technicians and experts. Hardwick Design has worked with many industries and can
				present products in detail and reach new tech and manufacturing clientele. No detail is too small for a technically minded client.
			</p>
			<p>
				Check out my <RouterLink to="/pdfs" title="Online and Print Catalog PDFs">PDF gallery</RouterLink> for catalogs and other tech
				documentation examples.
			</p>
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
p {
	text-indent: 1.5em;
	margin-bottom: 0.5em;
}

#techMarketing {
	margin-top: 2em;
}

.slideContainer {
	width: 95%;
	margin: 1em auto 2em;
	padding: 1em;
	background: rgb(255 255 255 / 20%);
	border: 1px rgb(0 0 0 / 45%) solid;
	border-radius: 14px;
}

.cards {
	display: grid;
	width: 100%;
	gap: 1rem;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: 55vw;
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

@media (min-width: 768px) {
	.cards {
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 45vw;
	}
}

@media (min-width: 992px) {
	.cards {
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 35vw;
	}
}

@media (min-width: 1200px) {
	.cards {
		grid-template-columns: repeat(5, 1fr);
		grid-auto-rows: 25vw;
	}
}
</style>
