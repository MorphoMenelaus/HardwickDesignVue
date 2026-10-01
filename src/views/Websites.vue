<template>
	<main>
		<div id="page-layout">
			<h1 class="page-header amaranth">Custom Fully Resposive Web Development</h1>
		</div>
		<div class="two-panel-grid">
			<div class="two-panel-item">
				<h2 class="panel-header">We can build your custom website together!</h2>
				<div class="panel-inner">
					<p>
						With years of custom responsive web design experience and a strong emphasis on semantic markup with support for accessability,
						including WCAG standards for ADA compliance, most any website&#47;e&dash;commerce needs can be met.
						<a href="/about" title="Get a quote">Get&nbsp;a&nbsp;quote</a> for your next project, today.
					</p>
					<p>This website you are currently visiting was baked in the kitchen of Hardwick Web Designs.</p>
					<p>
						Here are some examples of Hardwick Design's responsive web development. These are shrunk down to fit the display box and are
						meant as a functional representation. Please view full website to get a real sense of the site and it's responsiveness.
					</p>
					<sub>
						<strong>Note&#058;</strong> Embedded website previews are disabled on mobile devices with a screen smaller than 1024 pixels
						wide. This is due to the space and bandwith that embeded sites would put on your mobile device.
					</sub>
				</div>
			</div>
			<div class="two-panel-item">
				<picture class="">
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
			<div class="two-panel-item">
				<h2 class="panel-header">
					<a href="https://gary.hardwick.design/" rel="noreferrer" title="Gary's Plastic Place" target="_blank">Gary's Plastic Place</a>
				</h2>
				<div class="panel-inner">
					<iframe src="https://gary.hardwick.design/" title="Gary's Plastic Place Website" width="100%" height="600px"></iframe>
				</div>
			</div>
			<div class="two-panel-item">
				<h2 class="panel-header">
					<a href="https://gary.hardwick.design/" rel="noreferrer" title="Gary's Plastic Place" target="_blank">Gary's Plastic Place</a>
					&mdash; loyal client since 2010
				</h2>
				<div class="panel-inner">
					<p>
						They wanted a way to showcase their tradeshow, POP, and food service display cases while also showing the sheet plastic stock.
						Due to the needs from COVID-19 this website now prominently displays COVID-19 protection devices.
					</p>
					<picture class="">
						<source srcset="/img/GPP.webp" type="image/webp" />
						<source srcset="/img/GPP.jpg" type="image/jpeg" />
						<img src="/img/GPP.jpg" class="website-image" alt="Gary's Plastic Place Website" />
					</picture>
					<p>I also provided them with a google maps location page and a contact form for a call to action.</p>
					<p>
						This websites was skillfully crafted with semantic HTML, CSS, and Javascript. With support for Accessability, this website
						conforms to WCAG Level AA &dash; ADA compliance
					</p>
					<p>Using modern JSON-LD and other technologies, this website has a very high SEO score.</p>
				</div>
			</div>
		</div>
		<div class="two-panel-grid">
			<div class="two-panel-item">
				<h2 class="panel-header">
					<a href="https://blog.chrisshardwick.com/" rel="noreferrer" title="CSH Photography" target="_blank">CSH Photography</a>
				</h2>
				<div class="panel-inner">
					<iframe id="" class="" src="https://blog.chrisshardwick.com/" title="CSH Photography" width="100%" height="600px"></iframe>
				</div>
			</div>
			<div class="two-panel-item">
				<h2 class="panel-header">
					<a href="https://blog.chrisshardwick.com/" rel="noreferrer" title="CSH Photography" target="_blank"
						>CSH Photography Photography Blog</a
					>
				</h2>
				<div class="panel-inner">
					<p>
						This photography blog is a Wordpress&dash;based website. When the client prefers a Wordpress CMS, that can be accomodated. Using
						customized themes or a theme of your choice, any needs can be met.
					</p>
					<p>I also consult on Wordpress setups and customizations.</p>
					<picture class="">
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
		</div>
		<div class="two-panel-grid">
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
}

.website-image {
	width: 100%;
	border-radius: 12px;
	border: 1px #333 solid;
}

p {
	text-indent: 1.5em;
	margin-bottom: 0.5em;
}

@media (min-width: 1024px) {
	.two-panel-grid {
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}
}
</style>
