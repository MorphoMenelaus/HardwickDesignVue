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
	// scrollToId('pdf-viewer');
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
		<div id="page-layout">
			<h2 class="page-header amaranth">Product Catalogs &amp; Tech Sheets for Print or Web</h2>
			<p>
				Catalogs and brochures are powerful mediums for communicating company identity, show off products and services, and portray a strong
				vision. Professional designs reinforce a business's reputation and commitment to their customers and leave a lasting impression.
				Hardwick Designs has worked with many industries to tell their stories and reach new clientele.
			</p>

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
				<div class="pdf-header">
				</div>
				<div id="loading-progress" v-if="isLoading">
					<div class="spinner-comet"></div>
					<h3>{{ isRendering ? 'Rendering' : 'Loading' }}</h3>
					<progress v-if="loadProgress" :value="loadProgress" max="100"></progress>
					<span v-if="loadProgress">{{ (loadedSize / 1000000).toFixed(2) }} / {{ (totalSize / 1000000).toFixed(2) }} MB</span>
				</div>
				<div id="paging">
					<div id="pageSelect">
						Select Page:
						<select v-model="page" v-if="pageCount" @change="handleDropdown" title="Select Page">
							<option v-for="(item, index) in pageCount" :key="index" :value="item">Page {{ item }}</option>
						</select>
					</div>
					<button class="btn" :disabled="page <= 1" @click="handlepaging('prev')" title="Previous Page">Previous Page</button>
					<button class="btn" :disabled="page >= pageCount" @click="handlepaging('next')" title="Next Page">Next Page</button>
					Page: {{ page }} / {{ pageCount }}
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
	background-color: #e0e8f0;
	margin: 1.5em;
	padding: 0.5em;
	border-radius: 0.5em;
}

#sidebar h3 {
	margin-top: 0.7em;
}

#pdf-container {
	position: relative;
	width: 80%;
	float: right;
}

#paging {
	display: flex;
	justify-content: space-evenly;
	width: 35em;
	align-items: center;
	margin: 1em auto;
	padding: 0.2em 0.6em;
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
	margin: 1em 1em 0;
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
