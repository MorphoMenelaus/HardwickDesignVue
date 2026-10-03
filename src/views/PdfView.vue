<script setup>
import { ref, watch, onBeforeUnmount } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import VuePdfEmbed from 'vue-pdf-embed';
import Copyright from '@/components/Copyright.vue';
import pdfs from '@/dependencies/pdfFileList.json';

onBeforeRouteUpdate((to, from) => {
	// React to the route change
	console.log('Navigating to:', to.params.id);
});

// Optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css';
import 'vue-pdf-embed/dist/styles/textLayer.css';

const props = defineProps({
	isMobile: Boolean,
	windowWidth: Number,
});

// Load first from list as default
let pdfSource = ref(pdfs[0].file);

const isLoading = ref(true);
const isRendering = ref(false);
const loadProgress = ref(0);
const page = ref(1);
const pageCount = ref(1);
const showAllPages = ref(false);
const width = ref(window.innerWidth * 0.7);
const height = ref(width.value * 1.414); // A4 aspect ratio
const totalSize = ref(0);
const loadedSize = ref(0);
const fitHeight = ref(false);

const handleDocumentLoad = ({ numPages }) => {
	pageCount.value = numPages;
	isRendering.value = true;
};
const handleDocumentRender = () => {
	isLoading.value = false;
	isRendering.value = false;
	loadProgress.value = 0;
};
const toggleShowAllPages = () => {
	page.value = showAllPages.value ? null : 1;
	let pageingId = props.isMobile ? 'pdf-container' : 'paging';
	scrollToId(pageingId);
};
const handleDropdown = () => {
	isLoading.value = true;
};
const handleProgress = (progress) => {
	loadProgress.value = progress.percent;
	totalSize.value = progress.total;
	loadedSize.value = progress.loaded;
};
const handlepaging = (direction) => {
	isLoading.value = true;
	let pageingId = props.isMobile ? 'pdf-container' : 'paging';
	scrollToId(pageingId);
	if (direction === 'next' && page.value < pageCount.value) {
		page.value++;
	} else if (direction === 'prev' && page.value > 1) {
		page.value--;
	}
};
const handleSource = (source) => {
	isLoading.value = true;
	loadProgress.value = 0;
	page.value = 1;
	showAllPages.value = false;
	pdfSource.value = source;
	let pageingId = props.isMobile ? 'pdf-container' : 'paging';
	scrollToId(pageingId);
};
const scrollToId = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}
};
const handleResize = () => {
	if (fitHeight.value) {
		height.value = window.innerHeight - 80;
		width.value = height.value * 0.707; // A4 aspect ratio
	} else {
		width.value = window.innerWidth * 0.7;
		height.value = width.value * 1.414; // A4 aspect ratio
	}
};

watch([fitHeight, () => props.isMobile], ([newfitHeight, newIsMobile], [oldfitHeight, oldIsMobile]) => {
	if (newfitHeight !== oldfitHeight) {
		handleResize();
	}
	if (newIsMobile !== oldIsMobile) {
		fitHeight.value = newIsMobile ? false : fitHeight.value;
	}
});

window.addEventListener('resize', handleResize);
onBeforeUnmount(() => {
	window.removeEventListener('resize', handleResize);
});
</script>

<template>
	<main>
		<div id="page-layout">
			<h2 class="page-header amaranth">Product Catalogs &amp; Tech Sheets for Print or Web</h2>
			<p>
				Catalogs and brochures are powerful mediums for communicating company identity, show off products and services, and portray a strong
				vision. Professional designs reinforce a business's reputation and commitment to their customers and leave a lasting impression.
				Hardwick Designs has worked with many industries to tell their stories and reach new clientele.
			</p>
		</div>
		<div id="pdf-viewer-main">
			<div id="show-all">
				<input
					id="show-all-pages"
					title="This option takes a while to load and the pages may appear blank while loading"
					v-model="showAllPages"
					type="checkbox"
					@change="toggleShowAllPages"
				/>
				<label for="show-all-pages" title="This option takes a while to load and the pages may appear blank while loading"
					>Show all pages</label
				>
				<span class="show-all-warning">
					Show all is slower to load
					<span class="info" title="This option takes a while to load and the pages may appear blank while loading">🛈</span></span
				>
			</div>
			<div id="paging">
				<div id="pageSelect">
					Select Page:
					<select
						v-model="page"
						v-if="pageCount"
						@change="handleDropdown"
						:title="showAllPages ? 'Show all pages option is enabled' : 'Select Page'"
						:disabled="showAllPages"
					>
						<option v-for="(item, index) in pageCount" :key="index" :value="item">Page {{ item }}</option>
					</select>
				</div>
				<button
					class="btn"
					:disabled="showAllPages || page <= 1"
					@click="handlepaging('prev')"
					:title="showAllPages ? 'Show all pages option is enabled' : 'Previous Page'"
				>
					Previous Page
				</button>
				<button
					class="btn"
					:disabled="showAllPages || page >= pageCount"
					@click="handlepaging('next')"
					:title="showAllPages ? 'Show all pages option is enabled' : 'Next Page'"
				>
					Next Page
				</button>
				Page: {{ page }} / {{ pageCount }}
				<button v-if="!isMobile" class="btn" @click="fitHeight = !fitHeight" :title="fitHeight ? 'Fit to width' : 'Fit to height'">
					{{ fitHeight ? 'Fit to Width' : 'Fit to Height' }}
				</button>
			</div>
			<div id="pdf-viewer-container">
				<div id="sidebar">
					<div class="sidebar-container">
						<h3>Product Catalogs &amp; Tech Sheets</h3>
						<div id="source">
							<button
								v-for="pdfs in pdfs"
								:key="pdfs.id"
								class="btn"
								:class="{ active: pdfSource === pdfs.file }"
								@click="handleSource(pdfs.file)"
							>
								{{ pdfs.title }}
							</button>
						</div>
					</div>
					<div class="paging-buttons">
						<button
							class="btn"
							:disabled="showAllPages || page <= 1"
							@click="handlepaging('prev')"
							:title="showAllPages ? 'Show all pages option is enabled' : 'Previous Page'"
						>
							Previous Page
						</button>
						<button
							class="btn"
							:disabled="showAllPages || page >= pageCount"
							@click="handlepaging('next')"
							:title="showAllPages ? 'Show all pages option is enabled' : 'Next Page'"
						>
							Next Page
						</button>
						Page: {{ page }} / {{ pageCount }}
					</div>
				</div>
				<div id="pdf-container">
					<div class="pdf-header"></div>
					<div id="loading-progress" v-if="isLoading">
						<div id="loader-container">
							<div class="spinner-comet"></div>
							<h3>{{ isRendering ? 'Rendering' : 'Loading' }}</h3>
							<progress v-if="loadProgress" :value="loadProgress" max="100"></progress>
							<span v-if="loadProgress">{{ (loadedSize / 1000000).toFixed(2) }} / {{ (totalSize / 1000000).toFixed(2) }} MB</span>
						</div>
					</div>
					<VuePdfEmbed
						id="pdf-viewer"
						annotation-layer
						text-layer
						:width="width"
						:height="height"
						:source="pdfSource"
						:page="page"
						@progress="handleProgress"
						@loaded="handleDocumentLoad"
						@rendered="handleDocumentRender"
						@internal-link-clicked="(url) => console.log('Internal link clicked:', url)"
						@rendering-failed="(error) => console.error('Rendering failed:', error)"
					/>
				</div>
			</div>
			<div id="paging-sidebar">
				<div id="pageSelect">
					Select Page:
					<select
						v-model="page"
						v-if="pageCount"
						@change="handleDropdown"
						:title="showAllPages ? 'Show all pages option is enabled' : 'Select Page'"
						:disabled="showAllPages"
					>
						<option v-for="(item, index) in pageCount" :key="index" :value="item">Page {{ item }}</option>
					</select>
				</div>
				<button
					class="btn"
					:disabled="showAllPages || page <= 1"
					@click="handlepaging('prev')"
					:title="showAllPages ? 'Show all pages option is enabled' : 'Previous Page'"
				>
					Previous Page
				</button>
				<button
					class="btn"
					:disabled="showAllPages || page >= pageCount"
					@click="handlepaging('next')"
					:title="showAllPages ? 'Show all pages option is enabled' : 'Next Page'"
				>
					Next Page
				</button>
				Page: {{ page }} / {{ pageCount }}
			</div>
		</div>
		<Copyright />
	</main>
</template>

<style>
#pdf-viewer canvas {
	padding: 1em;
	background-color: rgb(224 232 240);
	border-radius: 0.5em;
}
</style>

<style scoped>
h2 {
	text-align: center;
}

p {
	text-indent: 1.5em;
	margin-bottom: 1em;
}

.pdf-header {
	margin: 1em auto;
	width: 90%;
}

.vue-pdf-embed {
	width: 100%;
	margin: auto;
	overflow: hidden auto;
	object-fit: contain;
}

#loading-icon.loading {
	display: grid;
}

#pdf-viewer-main {
	margin: 1em;
	padding: 1em;
	background-color: rgb(255 255 255 / 30%);
	border: 1px rgb(0 0 0 / 45%) solid;
	border-radius: 1em;
}

canvas {
	background-color: red;
	padding: 1em;
}

#pdf-viewer-container {
	display: grid;
	margin: 1em auto;
}

#pdf-viewer * {
	margin: auto;
}

#sidebar {
	display: flex;
	flex-direction: column;
	max-width: calc(100vw - 4em);
}

.sidebar-container {
	text-align: center;
	background-color: #e0e8f0;
	margin: 1em 1em 0;
	padding: 0.5em;
	border-radius: 0.5em;
	height: fit-content;
}

#sidebar h3 {
	margin-top: 0.7em;
}

#pdf-container {
	position: relative;
}

#paging,
#paging-sidebar {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	max-width: calc(100vw - 4em);
	align-items: center;
	margin: 0 auto 1em;
	padding: 0.2em 0.6em;
	font-weight: bold;
	border-radius: 0.2em;
	border: 1px #333 solid;
	background: linear-gradient(rgba(124, 172, 191, 0.7), rgba(212, 232, 230, 0.7) 75%);
}

.paging-buttons {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0.2em;
	margin: 1em;
	font-weight: bold;
	border-radius: 0.2em;
	border: 1px #333 solid;
	background: linear-gradient(rgba(124, 172, 191, 0.7), rgba(212, 232, 230, 0.7) 75%);
}

#pageSelect {
	display: flex;
	flex-direction: column;
	font-weight: bold;
}

#show-all {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(224 232 240 / 50%);
	width: fit-content;
	margin: auto;
	padding: 0.2em 1em;
	border-radius: 0.5em 0.5em 0 0;
}

#show-all > * {
	margin: 0 5px;
}

#source {
	display: flex;
	flex-direction: column;
	margin: 1em;
}

.active {
	border-color: #fff;
	background-color: rgb(95 170 195 / 75%);
	color: #fff;
}

button {
	border-radius: 0.5em;
}

button[disabled] {
	background-color: rgb(37 106 135 / 74%);
	color: #b1b1b1;
	cursor: default;
}

#loading-progress {
	align-content: center;
	justify-content: center;
	position: absolute;
	inset: 0;
	width: 100%;
	background-color: rgb(0 0 0 / 70%);
	backdrop-filter: blur(5px);
	transition: background-color 0.3 ease-in-out;
	z-index: 15000;
	color: #fff;
	display: grid;
	min-height: 20vh;
	margin-top: 1em;
}

#loader-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 20%;
	right: 0;
	left: 0;
}

#loader-container > * {
	margin: 0.5em auto;
}

.loader-icon {
	height: 48px;
	width: 48px;
	border: 3px solid;
	border-radius: 100%;
	border-color: red white blue black;
	animation: loader 0.5s linear infinite;
}

input[type='checkbox'] {
	cursor: pointer;
	width: 20px;
	height: 20px;
}

label[for='show-all-pages'] {
	cursor: pointer;
	font-weight: bold;
}

.show-all-warning {
	color: #b00;
	font-weight: bold;
	text-transform: uppercase;
}

.info {
	font-size: 1.5em;
	line-height: 0;
	margin-left: 0.2em;
	cursor: help;
}

@media (max-width: 1023px) {
	#view {
		margin-top: 4em;
		margin-bottom: 3em;
	}

	.page-header {
		font-size: 2.2em;
	}
}

@media (min-width: 1024px) {
	#page-layout {
		margin-bottom: 2em;
	}

	#paging,
	#paging-sidebar {
		width: 35em;
	}

	#pdf-viewer-container {
		grid-template-columns: 25% 75%;
	}

	.vue-pdf-embed {
		margin-bottom: 0.5em;
	}
}
</style>
