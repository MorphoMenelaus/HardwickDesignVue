<template>
	<div class="btn-group">
		<div class="btn-container">
			<RouterLink to="/websites" title="Custom Responsive Web Design &amp; Development">
				<div class="">
					<div>
						<h2 class="textOutlineBlue teko">Web Development</h2>
					</div>
					<div class="button-overlay">
						<span class="comforta">Custom Responsive Web Design &amp; Development</span>
					</div>
				</div>
			</RouterLink>
		</div>
		<div class="btn-container">
			<RouterLink to="/marketing" title="Tech Marketing Design Brochures &amp; Documents">
				<div>
					<div>
						<h2 class="textOutlineBlue teko">Tech Marketing</h2>
					</div>
					<div class="button-overlay">
						<span class="comforta">Tech Marketing Design Brochures &amp; Documents</span>
					</div>
				</div>
			</RouterLink>
		</div>
		<div class="btn-container">
			<RouterLink to="/prototyping" title="3D Design, Animation, and Printing&#47;Prototyping">
				<div class="">
					<div>
						<h2 class="textOutlineBlue teko">3D Design</h2>
					</div>
					<div class="button-overlay">
						<span class="comforta">3D Design, Animation, and Printing&#47;Prototyping</span>
					</div>
				</div>
			</RouterLink>
		</div>
		<div class="btn-container">
			<RouterLink to="/pdfs" title="Online and Print Catalog PDFs">
				<div class="">
					<div>
						<h2 class="textOutlineBlue teko">Catalog PDFs</h2>
					</div>
					<div class="button-overlay">
						<span class="comforta">Online and Print Catalog PDFs</span>
					</div>
				</div>
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>
.btn-group {
	display: grid;
	width: 100%;
	margin: 0.5em auto;
	padding: 0 2em;
	grid-template-columns: 1fr;
	gap: unset;
}

.btn-container {
	display: flex;
	justify-content: center;
	position: relative;
	padding: 15px 0;
	user-select: none;
}

.btn-container h2 {
	margin: 0px;
	padding-top: 8px;
	line-height: 0;
	font-size: 2em;
	font-weight: 700;
	text-transform: uppercase;
	transform: rotate(-4deg);
	transition: transform 0.2s;
}

.btn-container a {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100px;
	width: 100%;
	max-width: 380px;
	color: #000;
	background-color: #fff;
	background-image: url('/img/brushedAluminum.webp');
	background-image: image-set(url('/img/brushedAluminum.webp') type('image/webp'), url('/img/brushedAluminum.jpg') type('image/jpeg'));
	background-size: cover;
	text-align: center;
	text-decoration: none;
	overflow: hidden;
	box-sizing: border-box;
	border-radius: 90% 10% 90% 10% / 40% 10% 40% 10%;
	border: 3px #d20030 solid;
	box-sizing: border-box;
	transition:
		transform 0.2s,
		border-radius 0.2s;
}

.button-overlay {
	display: flex;
	flex-flow: column;
	justify-content: center;
	position: absolute;
	bottom: -100px;
	width: 100%;
	height: 4em;
	background: rgba(0, 0, 0, 0.75);
	color: #fff;
	text-align: center;
	transition: bottom 0.2s;
	padding: 7px 0 5px;
}

.btn-container a:hover {
	border-radius: 8px;
	transform: scale(1.1);
}

.btn-container a:hover h2 {
	transform: rotate(0deg);
}

.btn-container a:hover .button-overlay {
	bottom: 0;
}

.textOutlineBlue {
	text-shadow:
		-1px -1px 0 #00f,
		1px -1px 0 #00f,
		-1px 1px 0 #00f,
		1px 1px 0 #00f;
}

@media (min-width: 768px) {
	.btn-container a {
		border: 6px #d20030 solid;
	}

	.btn-group {
		grid-template-columns: repeat(2, 1fr);
		margin: 0.5em auto 1.5em;
		padding: 0.5em;
		gap: 2em;
	}
}

@media (min-width: 1024px) {
	.btn-group {
		grid-template-columns: repeat(3, 1fr);
	}
	.btn-container:last-child {
		grid-column-start: 2;
	}
}

@media (min-width: 1200px) {
	.btn-group {
		grid-template-columns: repeat(4, 1fr);
	}
	.btn-container:last-child {
		grid-column-start: unset;
	}
}
</style>
