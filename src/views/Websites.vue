<script setup>
import Copyright from '@/components/Copyright.vue';
defineProps({
	isMobile: Boolean,
});
</script>
<template>
	<main>
		<div id="page-layout">
			<h1 class="page-header amaranth">Custom Fully Resposive Web Development</h1>
		</div>
		<div class="two-panel-grid">
			<div class="two-panel-item">
				<h2 class="panel-header amaranth top-header">We can build your custom website together!</h2>
				<div class="panel-inner">
					<p>
						With years of custom responsive web design experience and an emphasis on semantic markup and WCAG standards for accessibility,
						most any website / e-commerce need can be met.
						<a href="/about" title="Get a quote">Get&nbsp;a&nbsp;quote</a> for your next project, today.
					</p>
					<p>
						This website was created using modern web standards and technologies that perform high on SEO and render fast, reponsive and
						efficient user interfaces.
					</p>
					<p v-if="!isMobile">
						Here are some examples of Hardwick Design's responsive web development. These are shrunk down to fit the display box and are
						meant as a functional representation. Please view full website to get a real sense of the site and it's responsiveness.
					</p>
				</div>
			</div>
			<div class="two-panel-item">
				<picture>
					<source srcset="/img/BannerWebDevAd.webp" type="image/webp" />
					<source srcset="/img/BannerWebDevAd.jpg" type="image/jpeg" />
					<img
						src="/img/BannerWebDevAd.jpg"
						class="website-image"
						alt="Custom Fully Resposive Web Development for all devices and browsers"
						title="Custom Fully Resposive Web Development for all devices and browsers"
					/>
				</picture>
			</div>
		</div>
		<div class="two-panel-grid">
			<div class="two-panel-item" v-if="!isMobile">
				<h2 class="panel-header amaranth">
					<a href="https://gary.hardwick.design/" rel="noreferrer" title="Gary's Plastic Place" target="_blank">Gary's Plastic Place</a>
				</h2>
				<div class="panel-inner">
					<iframe src="https://gary.hardwick.design/" title="Gary's Plastic Place Website" width="100%" height="600px"></iframe>
				</div>
			</div>
			<div class="two-panel-item">
				<h2 class="panel-header amaranth">
					<a href="https://gary.hardwick.design/" rel="noreferrer" title="Gary's Plastic Place" target="_blank">Gary's Plastic Place</a>
					&mdash; loyal client since 2010
				</h2>
				<div class="panel-inner">
					<p>
						This client wanted to showcase their tradeshow, POP, and food service display cases while also showing the sheet plastic stock.
					</p>
					<picture>
						<source srcset="/img/GPP.webp" type="image/webp" />
						<source srcset="/img/GPP.jpg" type="image/jpeg" />
						<img src="/img/GPP.jpg" class="website-image" alt="Gary's Plastic Place Website" />
					</picture>
					<p>I also provided them with a google maps location page and a contact form for a call to action.</p>
					<p>
						This websites was skillfully crafted with semantic HTML, CSS, and JavaScript. With support for accessibility, this website
						conforms to WCAG Level AA &dash; ADA compliance
					</p>
					<p>Using modern JSON-LD and other technologies, this website has a very high SEO score.</p>
				</div>
			</div>
		</div>
		<div class="two-panel-grid">
			<div class="two-panel-item" v-if="!isMobile">
				<h2 class="panel-header amaranth">
					<a href="https://cshardwick.com/" rel="noreferrer" title="Chris Hardwick Frontend Developer" target="_blank"
						>Chris Hardwick Frontend Developer</a
					>
				</h2>
				<h4 class="amaranth">Mobile Friendly, Responsive, and Modern</h4>
				<div class="panel-inner">
					<div id="cshardwick-iframe">
						<iframe src="https://cshardwick.com/" title="Chris Hardwick Frontend Developer"></iframe>
					</div>
				</div>
			</div>
			<div class="two-panel-item">
				<h2 class="panel-header amaranth">
					<a href="https://cshardwick.com/" rel="noreferrer" title="Chris Hardwick Frontend Developer" target="_blank"
						>Chris Hardwick Vue 3 Demo Portfolio</a
					>
				</h2>
				<div class="panel-inner">
					<p>
						Creative and experienced front-end and web application developer with over 10 years of experience building fluid, modern,
						responsive user experiences. Blending a strong background in graphic design, intuitive user interface architecture, and
						extensive experience in relational database optimization, I seamlessly integrate user connections to the data supporting modern
						web applications.
					</p>
					<picture>
						<source srcset="/img/cshardwick_screenshot.webp" type="image/webp" />
						<source srcset="/img/cshardwick_screenshot.jpg" type="image/jpeg" />
						<img src="/img/cshardwick_screenshot.jpg" class="website-image" alt="CSH Photography Website" />
					</picture>
				</div>
			</div>
		</div>
		<div class="two-panel-grid">
			<div class="two-panel-item" v-if="!isMobile">
				<h2 class="panel-header amaranth">
					<a href="https://blog.chrisshardwick.com/" rel="noreferrer" title="CSH Photography" target="_blank">CSH Photography</a>
				</h2>
				<div class="panel-inner">
					<iframe src="https://blog.chrisshardwick.com/" title="CSH Photography" width="100%" height="600px"></iframe>
				</div>
			</div>
			<div class="two-panel-item">
				<h2 class="panel-header amaranth">
					<a href="https://blog.chrisshardwick.com/" rel="noreferrer" title="CSH Photography" target="_blank"
						>CSH Photography Photography Blog</a
					>
				</h2>
				<div class="panel-inner">
					<p>
						This photography blog is a WordPress&dash;based website. When a client prefers a WordPress CMS, that can be accommodated.
						Using customized themes or a theme of your choice, any needs can be met.
					</p>
					<p>I also consult on WordPress setups and customizations.</p>
					<picture>
						<source srcset="/img/CSSH.webp" type="image/webp" />
						<source srcset="/img/CSSH.jpg" type="image/jpeg" />
						<img src="/img/CSSH.jpg" class="website-image" alt="CSH Photography Website" />
					</picture>
				</div>
			</div>
		</div>
		<!-- <div class="two-panel-grid">
			<div class="two-panel-item">
				<h2 class="panel-header"></h2>
				<div class="panel-inner">
					<p></p>
				</div>
			</div>
			<div class="two-panel-item">
				<h2 class="panel-header"></h2>
				<div class="panel-inner">
					<p></p>
				</div>
			</div>
		</div> -->
		<Copyright />
	</main>
</template>

<style scoped>
#view {
	padding: 0 1em;
}

.two-panel-grid {
	width: 100%;
	display: grid;
	margin: 1em auto;
	row-gap: 1em;
}

.two-panel-item {
	padding: 1em;
	background-color: #e5f0fb;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 0.8em;
	height: 100%;
}

.panel-header {
	font-size: 2.5em;
	text-align: center;
}

.panel-header {
	font-size: 1.6em;
	font-weight: bold;
	margin-bottom: 1em;
}

.website-image {
	width: 100%;
	border-radius: 12px;
	border: 1px #333 solid;
	margin: 1em auto;
}

h4 {
	text-align: center;
	margin-bottom: 1em;
}

p {
	text-indent: 1.5em;
	margin-bottom: 0.5em;
}

iframe {
	margin-bottom: 1em;
}

#cshardwick-iframe iframe {
	width: 100%;
	height: 100vw;
}

@media (max-width: 1023px) {
	.page-header {
		font-size: 2.2em;
	}
}

@media (min-width: 1024px) {
	.panel-header.top-header {
		font-size: 2.5em;
	}

	.two-panel-grid {
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}

	#cshardwick-iframe {
		width: 60%;
		margin: auto;
	}

	#cshardwick-iframe iframe {
		height: 50vw;
	}
}
</style>
