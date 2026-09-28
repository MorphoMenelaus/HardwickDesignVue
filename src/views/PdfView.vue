<script setup>
import { ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';
import pdfs from '@/dependencies/pdfFileList.json';

// Optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css';
import 'vue-pdf-embed/dist/styles/textLayer.css';

// Load first from list as default
let pdfSource = ref(pdfs[0].file);

const isLoading = ref(true);
const isRendering = ref(false);
const loadProgress = ref(0);
const page = ref(1);
const pageCount = ref(1);
const showAllPages = ref(false);
const height = ref(window.innerHeight * 0.7);
const totalSize = ref(0);
const loadedSize = ref(0);
const renderIfDebug = ref(false);

const handleDocumentLoad = ({ numPages }) => {
	// console.log('Document loaded', numPages);
	pageCount.value = numPages;
	isRendering.value = true;
};
const handleDocumentRender = () => {
	// console.log('Document rendered');
	isLoading.value = false;
	isRendering.value = false;
	loadProgress.value = 0;
};
const toggleShowAllPages = () => {
	page.value = showAllPages.value ? null : 1;
	scrollToId('pdf-viewer');
};
const handleDropdown = () => {
	isLoading.value = true;
};
const handleProgress = (progress) => {
	// console.log('PDF loading progress:', progress);
	loadProgress.value = progress.percent;
	totalSize.value = progress.total;
	loadedSize.value = progress.loaded;
};
const handlepaging = (direction) => {
	isLoading.value = true;
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
	scrollToId('pdf-viewer');
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
</script>

<template>
	<main>
		<div id="view-inner">
			<div id="sidebar">
				<h3>Select Catalog</h3>
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
			<div id="pdf-container">
				<div id="loading-progress" v-if="isLoading">
					<div class="spinner-comet"></div>
					<h3>{{ isRendering ? 'Rendering' : 'Loading' }}</h3>
					<progress v-if="loadProgress" :value="loadProgress" max="100"></progress>
					<span v-if="loadProgress"
						>{{ (loadedSize / 1000000).toFixed(2) }} / {{ (totalSize / 1000000).toFixed(2) }} MB</span
					>
				</div>
				<div id="paging">
					<button class="btn" :disabled="page <= 1" @click="handlepaging('prev')" title="Previous Page">
						Previous Page
					</button>
					<button class="btn" :disabled="page >= pageCount" @click="handlepaging('next')" title="Next Page">
						Next Page
					</button>
				</div>
				<div id="pageCount">
					Select Page:
					<select v-model="page" v-if="pageCount" @change="handleDropdown" title="Select Page">
						<option v-for="(item, index) in pageCount" :key="index" :value="item">Page {{ item }}</option>
					</select>
				</div>
				<div id="show-all" v-if="renderIfDebug">
					<input id="show-all-pages" v-model="showAllPages" type="checkbox" @change="toggleShowAllPages" />
					<label for="show-all-pages">Show all pages</label>
				</div>
				<VuePdfEmbed
					id="pdf-viewer"
					annotation-layer
					text-layer
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
	</main>
</template>

<style scoped>
.vue-pdf-embed {
	width: 50vw;
	margin: auto;
	overflow: hidden auto;
	object-fit: contain;
}

#loading-icon.loading {
	display: grid;
}

#pdf-viewer * {
	margin: auto;
}
#sidebar {
	width: calc(20% - 3em);
	display: flex;
	flex-direction: column;
	float: left;
	text-align: center;
	background-color: #1a2243;
	margin: 1.5em;
	padding: 0.5em;
}

#sidebar h3 {
	margin-top: 0.7em;
	color: #ddd;
}

#pdf-container {
	position: relative;
	width: 80%;
	float: right;
}

#paging {
	display: flex;
	justify-content: center;
}

#pageCount {
	display: flex;
	justify-self: center;
	margin-bottom: 0.5em;
	justify-content: center;
}

div#pageCount > * {
	margin: 0 1em;
}

#show-all {
	display: flex;
	justify-content: center;
	margin-bottom: 1em;
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
	background-color: rgb(131 153 193 / 50%);
	color: #fff;
}

button[disabled] {
	background-color: rgb(2 6 24 / 60%);
	color: #4b4b4b;
	/* cursor: not-allowed; */
	cursor: default;
}

#loading-progress {
	/* display: none; */
	align-content: center;
	justify-content: center;
	position: absolute;
	inset: 6em 0 0;
	width: 100%;
	height: calc(100% - 6em);
	background-color: rgb(0 0 0 / 70%);
	backdrop-filter: blur(5px);
	transition: background-color 0.3 ease-in-out;
	z-index: 15000;
	color: #fff;
	display: grid;
	min-height: 20vh;
	/* align-items: center; */
	/* justify-items: center; */
	/* align-content: center; */
	/* justify-content: center; */
}

#loading-progress > * {
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
</style>
